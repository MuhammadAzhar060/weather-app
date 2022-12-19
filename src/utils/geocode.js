const request=require('request');

const geocode=(address,callback)=>{
  const url='https://jsonplaceholder.typicode.com/posts/'+address+'/comments';
  request({url:url,json:true},(error,response)=>{
    if(error){
       callback('there is an error',undefined);
     }else if(response.body.length==0){
        callback('Unable to find data',undefined);
     }else{
       callback(undefined,{
        name:response.body[0].name,
        email:response.body[0].email
      });
     }
  })
}

module.exports=geocode;
