import Component from '@ember/component';

export default Component.extend({
  actions:{
    star: function(email, newValue) {
      email.set('starred', newValue);
    }
  }

});
