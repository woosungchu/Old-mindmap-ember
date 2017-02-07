import Ember from 'ember';

export default Ember.Component.extend({
  map : null,
  actions : {
    newMap(){
      if (this.get('session.isAuthenticated')) {
        let map = this.get('store').createRecord('map');

        map.save().then((response)=>{
            this.set('map',response);
            alert('Success to save');

        }).catch((/*error*/)=>{
            alert('Failed to save');
        });

      }else{
        //Replace to popup
        this.transitionToRoute('users.login');
      }
    }//end newMap

  }
});
