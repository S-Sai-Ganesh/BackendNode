const myForm = document.querySelector('#my-form');

const nameInput = document.getElementById('name');
const mobileInput = document.getElementById('mobile');
const emailInput = document.getElementById('email');

myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();
    name = nameInput.value;
    mobile = mobileInput.value;
    email = emailInput.value;
    nameInput.value = '';
    mobileInput.value = '';
    emailInput.value = '';

    myObj = {
        name,
        mobile,
        email
    }
    console.log(myObj);
    axios.post("http:localhost:3000/user/add-user",myObj)
        .then((response) => {
            console.log(response);
            addNewLineElement(response.data.newUserDetail)
        }).catch((err) => {
            document.body.innerHTML+= '<h6> Submit failed try again</h6>'
            console.log(err);      
        }
    );
}  
if (document.readyState == "loading" ) {
    
    axios.get('http:localhost:3000/user/get-users')
        .then((result) => {
            console.log(result);
            result.data.forEach(element => {
                addNewLineElement(element);
            });
        }).catch((err) => {
            console.error(err);
            document.body.innerHTML+= '<h6> Failed to retrieve data from server</h6>'
        }
    );
}


function addNewLineElement(detailsOfPeople){

    const ul=document.getElementById('users');
    const li=document.createElement('li');
    li.appendChild(
        document.createTextNode(detailsOfPeople.name + " " + detailsOfPeople.email + " ")
      );

    const editBtn = document.createElement('input');
    editBtn.id='edit';
    editBtn.type='button';
    editBtn.value='Edit';
    editBtn.addEventListener('click', ()=> {
        document.getElementById('name').value = detailsOfPeople.name;
        document.getElementById('mobile').value = detailsOfPeople.mobile;
        document.getElementById('email').value = detailsOfPeople.email;
        axios.get(`http:localhost:3000/user/delete-user/${detailsOfPeople.id}`)
        li.remove();
        editingUserId = detailsOfPeople._id;
        console.log(editingUserId);
    });

    editBtn.style.border = '2px solid green';
    li.appendChild(editBtn);

    const delBtn = document.createElement('input');
    delBtn.id='delete';
    delBtn.type='button';
    delBtn.value='delete';
    delBtn.addEventListener('click', ()=> {
        axios.get(`http:localhost:3000/user/delete-user/${detailsOfPeople.id}`)
        li.remove();
    });
    delBtn.style.border = '2px solid red';
    li.appendChild(delBtn);
    ul.appendChild(li);
}



// 8942025118
// Abhik Das8:37 PM
// // let editingUserId = null;

// submitHandler() {
//   // taking the values from input

//   if (editingUserId === null) {
//     axios.post('crudcrudurl', obj)
//   } else {
//     axios.put(`crudcrudurl/${editingUserId}`, obj)
//     editingUserId = null;
//   }
// }

// editUser(name, email, _id) {
//   // prefilling the form inputs
//   li.remove()
//   editingUserId = _id;
// }