import Route from '@ember/routing/route';


export default Route.extend({
  actions: {
    signUp(user) {
      user.save().then(() => {
        // TRANSITION TO MAIN ROUTE
      }).catch((error) => {
        user.rollbackAttributes();
        this.controller.set('responseMessage', error.errors[0]);

      })
    }
  }

});