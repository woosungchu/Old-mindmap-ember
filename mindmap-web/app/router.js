import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('maps',function(){
    this.route('new');
  });

  this.route('users', {path: '/api-auth'}, function() {
    this.route('login');
    this.route('logout');
  });
});

export default Router;
