import Ember from 'ember';

export default Ember.Controller.extend({
  actions : {
    postUser(param){
      let username = param.get('username'),
          email = param.get('email'),
          password = param.get('password');

      this.data('store').createRecord('user',{
          username : username,
          email : email,
          password : password
      })
    }
  }
});
