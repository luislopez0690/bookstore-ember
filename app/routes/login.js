import Route from '@ember/routing/route';

export default Route.extend({

  actions: {
    createUser(user) {
      user.save().then((data) => {
        //let user = this.get('store').peekRecord('user', data.get('user.id'))
        this.transitionTo('index');
      })
    }
  }

});