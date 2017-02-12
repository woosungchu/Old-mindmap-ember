import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'svg',
  elementId : 'map-editor',
  actions : {
    postMindMap(){
      //action from map/new.js
      this.get('postMindMap')(...arguments);
    }
  }

});
