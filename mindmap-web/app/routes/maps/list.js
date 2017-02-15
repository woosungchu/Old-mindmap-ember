import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Route.extend({
  session : service('session'),
  model(){
    return this.get('store').findAll('map');
  }
});
