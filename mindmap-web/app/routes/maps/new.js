import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    this._super(...arguments);
    if (!this.get('session.isAuthenticated')) {
      this.replaceWith('users.login');
    }
  }
});
