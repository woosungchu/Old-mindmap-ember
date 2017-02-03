export default function() {

  this.post('/api-token-auth', function(){
    return [
      {
        "token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6Indvb3N1bmdjaHUiLCJleHAiOjE0ODU3NTA3NzQsImVtYWlsIjoid29vc3VuZ2NodUBnbWFpbC5jb20ifQ.eAT4_B3GCFS0fDTf0NIG6lermhVQRN82bOtBtJDZvPw"
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

  this.post('/users',function(schema,request){
    return{
      'user': {username:'good'}//schema.db.users.insert(JSON.parse(request.requestBody).user)
    };
  });



}
