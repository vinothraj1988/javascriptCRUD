  function getAllData() {
    try {
      fetch('http://localhost:8080/users')  
        .then(response => response.json())
        .then(
            (data) => {
                clearlist();
                let tableelem = `<tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Edit</th>
                                <th>Delete</th>
                                </tr>`;
                let table = document.getElementById("users");
                data.data.forEach(user=>{
                 tableelem += 
                `<tr>
                  <td>${user.name}</td>
                  <td>${user.email}</td>  
                  <td> <input type='button' onClick='onEdit(${user.id})' value='Edit'/> </td>
                  <td> <input type='button' onClick='onDelete(${user.id})' value='Delete'/> </td>      
                </tr>`;
                });
                table.innerHTML = tableelem;
            }
        ).catch(err => console.log(err));
    } catch (err) {
      console.log(err);
    }
  }

  function addUser() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;  
    var userData = {
       user : {
            name: name,
            email: email,
        }
    };
    try {
      fetch(`http://localhost:8080/adduser`, {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData),
      })
      .then(response => response.json())
      .then( (data) => {
          console.log(data);
          getAllData();
      }).catch(err => console.log(err));   
    } catch (err) {
        console.log(err);
    }
  }

  function clearlist(){
    let list = document.getElementById("users");
    list.innerHTML = "";
  }

  function onEdit(id){
    console.log(id)
  }

  function onDelete(id){
    console.log(id)
  }


var xhr = new XMLHttpRequest(); //invoke a new instance of the XMLHttpRequest
xhr.open('GET', 'https://622383da3af069a0f9a42a61.mockapi.io/api/v1/employee'); // open a GET request
xhr.send(); // send the request to the server.
xhr.onload = function success() {
  var data = JSON.parse(this.responseText); //parse the string to JSON
  console.log(data);
}; // call success function if request is successful
xhr.onerror = function error(err) {
  console.log('Request Failed', err); //error details will be in the "err" object
};  // call error function if request failed

fetch('https://622383da3af069a0f9a42a61.mockapi.io/api/v1/employee/50', {
  method: 'GET',
  })
  .then(response => response.json())
  .then(json => console.log(json))


  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
