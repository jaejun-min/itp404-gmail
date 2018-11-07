import Controller from '@ember/controller';
import window from 'ember-window-mock';
export default Controller.extend({
  actions: {
    deleteEmail(model) {
      let confirmed = window.confirm(
        'Are you sure you want to delete this post?'
      );

      if (confirmed) {
        model.destroyRecord();
        this.transitionToRoute('index');
      }
    }
  }
});
