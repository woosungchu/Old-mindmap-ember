import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'svg',
  elementId : 'map-editor',
  map : null,
  actions : {
    postMindMap(param){
      alert('mindmap');
      console.log(param);
    }
  }
});
