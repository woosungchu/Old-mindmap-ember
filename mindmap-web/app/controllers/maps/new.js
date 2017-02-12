import Ember from 'ember';

export default Ember.Controller.extend({
  classNames : ['container-fluid'],
  map : null,
  actions : {
    postMindMap(param){
      let paramMap = this.get('map');
      let map = null;

      //create
      if(paramMap == null){
        alert('insert')

        map = this.get('store').createRecord('map',{
          title : '0212Title'
        })
        map.save().then(()=>{
          this.set('map',map);
        });

      //update
      }else{
        alert('update')
        let pk = paramMap.get('id');
        alert(pk);

        this.get('store').findRecord('id', pk).then(function(map) {
          //map.get('node')

          map.set('title', "Updated!");
          map.save().then(()=>{
            this.set('map',map);
          });
        });

      }

    }
  }//end actions
});
