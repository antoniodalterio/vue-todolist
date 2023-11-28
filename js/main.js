'use strict';
const { createApp } = Vue;

createApp({
  data() {
    return {
      tasks: [
        {
          nome: 'Andare a calcio',
          done: true,
        },
        {
          nome: 'Studiare Vue.js',
          done: true,
        },
        {
          nome: 'Seguire le lezioni',
          done: false,
        },
      ],
      newTask: '',
    };
  },
  methods: {
    removeTask(task) {
      this.tasks.splice(task, 1);
    },
    addTask() {
      if (this.newTask.trim() !== '') {
        this.tasks.push({ nome: this.newTask, done: false });
        this.newTask = '';
      }
    },
    checkTask(check) {
      console.log(this.tasks[check]['done']);
      if (!this.tasks[check]['done']) {
        this.tasks[check]['done'] = true;
      } else if (this.tasks[check]['done']) {
        this.tasks[check]['done'] = false;
      }
    },
  },
}).mount('#app');
