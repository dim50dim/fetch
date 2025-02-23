  fetch('https://reqres.in/api/users/23',{ 
    method : 'POST',
    headers: {
        'Content-Type' : 'application/json'
    },
    body : JSON.stringify( {
        name : 'user 1',
    })
  })
       .then(res =>{
             return res.json()
       } )
        .then(data => console.log(data) )    
        .catch(error => console.log('ERROR')
        )
