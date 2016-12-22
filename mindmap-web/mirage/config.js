export default function() {

  this.namespace = '/api';

  this.get('/maps',function(){
    return {
      'maps':  [
        {
          id: '1',
          title : 'Bad',
          map : 'test1'
        },
        {
          id: '2',
          title : 'Romance',
          map : 'test2'
        },
        {
          id: '3',
          title : 'Poker',
          map : 'test3'
        },
        {
          id: '4',
          title : 'Face',
          map : 'test4'
        },
      ]
    }
  });



}
