<template>
    <div class="calendar-app">
      <div class="controls">
        <!-- Event Mode Selection -->
        <el-radio-group v-model="selectedMode" @change="filterEvents">
          <el-radio-button label="University">University</el-radio-button>
          <el-radio-button label="Exams">Exams</el-radio-button>
          <el-radio-button label="Personal">Personal</el-radio-button>
        </el-radio-group>
      </div>
  
      <!-- Event List -->
      <div class="event-list">
        <ul>
          <li v-for="(event, index) in filteredEvents" :key="index">
            <span>
              <strong v-if="selectedMode === 'University'">[{{ formatDate(event.date) }}]</strong>
              <strong v-if="selectedMode === 'Exams'">[{{ formatShortDate(event.date) }}]</strong>
              <strong v-if="selectedMode === 'Personal'">[{{ formatTimeRange(event.timeRange) }}]</strong>
              {{ event.name }}
            </span>
            <el-button type="text" @click="deleteEvent(index, event.type)">🗑</el-button>
          </li>
        </ul>
        <el-button v-if="selectedMode !== 'University' || currentDate" type="primary" @click="showAddDialog = true">+ add more</el-button>
      </div>
  
      <!-- Add Event Dialog -->
      <el-dialog v-model="showAddDialog" title="Add Event">
        <el-input v-model="newEvent.name" placeholder="Event Name"></el-input>
        <template v-if="selectedMode === 'University'">
          <el-date-picker v-model="newEvent.date" type="date" placeholder="Select Date"></el-date-picker>
        </template>
        <template v-if="selectedMode === 'Exams'">
          <el-date-picker v-model="newEvent.date" type="date" :disabled-date="disableExamDates" placeholder="Select Date"></el-date-picker>
        </template>
        <template v-if="selectedMode === 'Personal'">
          <el-time-picker v-model="newEvent.timeRange" is-range format="HH:mm" placeholder="Select Time Range"></el-time-picker>
        </template>
        <span slot="footer" class="dialog-footer">
          <el-button @click="showAddDialog = false">Cancel</el-button>
          <el-button type="primary" @click="validateAndAddEvent">Add</el-button>
        </span>
      </el-dialog>
  
      <!-- Calendar -->
      <el-calendar v-model="currentDate" @select="showEventsForSelectedDate"></el-calendar>
  
      <!-- Month Switcher -->
      <div class="month-switcher">
        <el-button @click="prevMonth">◀</el-button>
        <span>{{ formattedMonth }}</span>
        <el-button @click="nextMonth">▶</el-button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedMode: 'University',
        events: [],
        filteredEvents: [],
        showAddDialog: false,
        newEvent: { name: '', date: '', timeRange: [] },
        currentDate: new Date(),
      };
    },
    methods: {
      filterEvents() {
        if (this.selectedMode === 'University') {
          this.filteredEvents = this.events.filter(event => event.type === 'University');
        } else if (this.selectedMode === 'Exams') {
          const nextWeek = new Date(this.currentDate);
          nextWeek.setDate(nextWeek.getDate() + 7);
          this.filteredEvents = this.events.filter(event => event.type === 'Exams' && new Date(event.date) >= this.currentDate && new Date(event.date) <= nextWeek);
        } else {
          this.filteredEvents = this.events
            .filter(event => event.type === 'Personal' && new Date(event.date).toDateString() === this.currentDate.toDateString())
            .sort((a, b) => new Date(a.timeRange[0]) - new Date(b.timeRange[0]));
        }
      },
      validateAndAddEvent() {
        if (!this.newEvent.name || (!this.newEvent.date && !this.newEvent.timeRange.length)) {
          this.$message.error('Please fill in all required fields.');
          return;
        }
        const newEvent = { ...this.newEvent, type: this.selectedMode, completed: false };
        if (this.selectedMode === 'Exams' && (new Date(newEvent.date) < this.currentDate || new Date(newEvent.date) > new Date(this.currentDate).setDate(this.currentDate.getDate() + 7))) {
          this.$message.error('Exam events must be within the next 7 days.');
          return;
        }
        if (this.selectedMode === 'Personal' && new Date(newEvent.date).toDateString() !== this.currentDate.toDateString()) {
          this.$message.error('Personal events must match the selected date.');
          return;
        }
        this.events.push(newEvent);
        this.showAddDialog = false;
        this.newEvent = { name: '', date: '', timeRange: [] };
        this.filterEvents();
      },
      deleteEvent(index, type) {
        if (type !== this.selectedMode) {
          return;
        }
        this.events.splice(this.events.indexOf(this.filteredEvents[index]), 1);
        this.filterEvents();
      },
      showEventsForSelectedDate(date) {
        this.currentDate = date;
        this.filterEvents();
      },
      prevMonth() {
        const prev = new Date(this.currentDate);
        prev.setMonth(prev.getMonth() - 1);
        this.currentDate = prev;
      },
      nextMonth() {
        const next = new Date(this.currentDate);
        next.setMonth(next.getMonth() + 1);
        this.currentDate = next;
      },
      formatTimeRange(timeRange) {
        return `${this.formatTime(timeRange[0])} to ${this.formatTime(timeRange[1])}`;
      },
      formatTime(time) {
        return new Date(time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      },
      formatDate(date) {
        return new Date(date).toLocaleDateString('en-CA');
      },
      formatShortDate(date) {
        const d = new Date(date);
        return `${d.getMonth() + 1}.${d.getDate()}`;
      },
      disableExamDates(date) {
        const selected = new Date(this.currentDate);
        const nextWeek = new Date(selected);
        nextWeek.setDate(selected.getDate() + 7);
        return date < selected || date > nextWeek;
      },
    },
    computed: {
      formattedMonth() {
        return this.currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
      },
    },
  };
  </script>
  
  <style scoped>
  .calendar-app {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .controls {
    margin-bottom: 20px;
  }
  .event-list {
    width: 250px;
    margin-bottom: 20px;
  }
  .month-switcher {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  </style>