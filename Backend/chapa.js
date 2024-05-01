var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer CHAPUBK_TEST-pydPLApELW4IaBBnbSSIXt81wY2JNVkd");
  
  var raw = "";
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch("https://api.chapa.co/v1/transaction/verify/APLhjOHzrblr9", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));