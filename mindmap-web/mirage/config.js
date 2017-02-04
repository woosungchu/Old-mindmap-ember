import Mirage from 'ember-cli-mirage';

export default function() {

  //https://gist.github.com/code0100fun/f9b99b2a562702683602
  this.post('/api-token-auth', function(db, request){
    var params = JSON.parse(request.requestBody);

    if(params.username === "test" && params.password === "test") {
      let body = {
        "access_token":"PA$$WORD",
        "token_type":"bearer",
        "token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJvcmlnX2lhdCI6MTQ4NjIwMTQ1NiwiZXhwIjoxNDg2MjAxNzU2LCJlbWFpbCI6InRlc3RAZW1haWwuY29tIiwidXNlcl9pZCI6NDN9.iM3d3KmOD66wDj8hsJXRu_gFC2CxSRXWv63EISmVDU8"
      };
      return new Mirage.Response(201, {}, body);
    }else{
      let body = { errors: 'Email or password is invalid' };
      return new Mirage.Response(401, {}, body);
    }
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

  this.post('/maps',function(/*schema,request*/){
    return{
      'map': {"title":"untitled","author":{"username":"test","email":"test@email.com","password":"test"}}//schema.db.users.insert(JSON.parse(request.requestBody).user)
    };
  });

  this.post('/users',function(/*schema,request*/){
    return{
      'user': {/*"id":1,*/"username":"test","email":"test@email.com","password":"test"}//schema.db.users.insert(JSON.parse(request.requestBody).user)
    };
  });



}
