  fetch('https://reqres.in/api/users/23'),{ 
    method : 'POST'
  }
       .then(res =>{
         if(res.ok){
            console.log('SUCCESS');
            
         }else{
            console.log('not success');
            
         }
       } )
        .then(data => console.log(data) )    
        .catch(error => console.log('ERROR')
        )
