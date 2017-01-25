export default function() {

  this.post('/api-token-auth', function(){
    return [
      {
        token : 'OK'
      }
    ];
  });

  this.namespace = '/api';

  this.get('/maps',function(){
    return [
        {
          id: 1,
          title : 'Bad',
          node : 'test1'
        },
        {
          id: 2,
          title : 'Romance',
          node : 'test2'
        },
        {
          id: 3,
          title : 'Poker',
          node : 'test3'
        },
        {
          id: 4,
          title : 'Face',
          node : 'test4'
        }
      ];
  });



}
