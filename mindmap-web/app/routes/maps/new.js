import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Route.extend({
  // beforeModel() {
  //   return this._loadCurrentUser();
  // },
  //
  // sessionAuthenticated() {
  //   this._super(...arguments);
  //   this._loadCurrentUser().catch(() => this.get('session').invalidate());
  // },
  //
  // _loadCurrentUser() {
  //   return this.get('currentUser').load();
  // },
  session: service('session'),
  beforeModel(){

  },

  model(){
    if (this.get('session.isAuthenticated')) {
      let map = this.get('store').createRecord('map');

      map.save().then((response)=>{
          console.log(response);
          return map;
      }).catch((/*error*/)=>{
        return this._super(...arguments);
      });

    }else{
      return this._super(...arguments);
    }
  },
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
