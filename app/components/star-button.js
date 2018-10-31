import Component from '@ember/component';

export default Component.extend({
  actions:{
    toggle(){
      this.onClick(!this.on)

    //  console.log(this.on)
    }
  }
});
