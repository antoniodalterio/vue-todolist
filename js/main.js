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
    };
  },
  methods: {
    removeTask(task) {
      this.tasks.splice(task, 1);
    },
  },
}).mount('#app');
