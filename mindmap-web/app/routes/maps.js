import Ember from 'ember';

let fixtures = [
  {
    id: '1',
    title : 'Bad',
    data : 'test1'
  },
  {
    id: '2',
    title : 'Romance',
    data : 'test2'
  },
  {
    id: '3',
    title : 'Poker',
    data : 'test3'
  },
  {
    id: '4',
    title : 'Face',
    data : 'test4'
  },
]

export default Ember.Route.extend({
  model(){
    return fixtures;
  }
});
