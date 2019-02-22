

fetch('http://localhost:3722/foo').then(res => res.json())
.then(response => console.log('Success:', JSON.stringify(response)))
.catch(error => console.error('Error:', error));

fetch('http://localhost:3722/api', {
  method: 'POST', // or 'PUT'
  body: JSON.stringify({a:1}), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.then(response => console.log('Success:', JSON.stringify(response)))
.catch(error => console.error('Error:', error));
