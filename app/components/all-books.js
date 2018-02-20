import Component from '@ember/component';

export default Component.extend({
  actions: {
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
    }
  }
});