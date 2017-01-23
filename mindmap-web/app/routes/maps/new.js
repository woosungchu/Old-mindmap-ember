import Ember from 'ember';

export default Ember.Route.extend({
  actions : {
    // newNode(){
    //   let node = this.get('store').createRecord('node',{name:''})
    //   return node.save();
    // },
    // editNode(param) : {
    //   return this.get('store').find('node',param.id).then((node)=> {
    //     node.set('name',param.name);
    //     node.save();
    //   })
    // }
  }
});
