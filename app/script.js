  function getAllData() {
    try {
      fetch('http://localhost:8080/users')  
        .then(response => response.json())
        .then(
            (data) => {
            clearlist();
                let div = document.getElementById("users");
                var elem = "<ul>"
                data.data.forEach((user)=>{
                  elem += "<li>"+ user.name +"  <input type='button' onClick='onEdit("+user.id+")' value='Edit'/>   <input type='button' onClick='onDelete("+user.id+")' value='Delete'/></div></li>";           
                });
                elem += "</ul>";
                div.innerHTML = elem;
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
      const res = fetch(`http://localhost:8080/adduser`, {
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