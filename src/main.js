import KeigoButton from './components/KeigoButton.vue';

export default {
  install (app, options = {}) {
    app.component('KeigoButton', KeigoButton);
  }
};
