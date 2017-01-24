import Ember from 'ember';
//provides the authenticationSucceeded and invalidationSucceeded events
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

//To make a route in the application accessible only when the session is authenticated, mix the AuthenticatedRouteMixin into the respective route:
export default Ember.Route.extend(ApplicationRouteMixin);
