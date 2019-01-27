$(document).ready(function () {
  eraseForm();
  loadUsers();
});
$("#form").submit(function(){
  return false;
});



let users = [
{
  firstName: 'Jasmin',
  lastName: 'Ellis',
  userName: 'jayellis',
  email: 'jasmin@ellis.com',
  password: 'jayne123',
  active: 'yes',
  permissions: 'Power User'

},

{
  firstName: 'Shawn',
  lastName: 'Dobbs',
  userName: 'Sunshine',
  email: 'shawn@dobbs.com',
  password: 'sunshine123',
  active: 'yes',
  permissions: 'Basic User'
},

{
  firstName: 'Arthur',
  lastName: 'Parrott',
  userName: 'acedown23',
  email: 'arthur@parrott.com',
  password: 'aphrenzy',
  active: 'yes',
  permissions: 'Basic User'

}
          ];


//Constructor 
  function User (firstName, lastName, userName, email, password, active, permissions) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.email = email;
    this.password = password;
    this.active = active;
    this.permissions = permissions;
  }


function addUser() {
  
  users.push(
    new User(
      $('#FirstName').val(),
      $('#LastName').val(),
      $('#Username').val(),
      $('#Email').val(),
      $('#Password').val(),
      $('#Active').val(),
      $('#Permissions option:selected').text()
      )
      );
      console.log("#submitted User", users)

    // alert('Added Successfully!');
    eraseForm(); 
    loadUsers();
    }


function eraseForm () {
  $('#firstName').val('');
  $('#lastName').val('');
  $('#userName').val('');
  $('#email').val('');
  $('#password').val('');
  $('#active').val('');  
}

function loadUsers() {

  //loop through array
  //get user properties
  //add property values as new table row

  $('#UserTable').empty();

  $('#UserTable').append(
    `<tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>Password</th>
        <th>Active</th>
        <th>Permissions</th>
      </tr>`
  );

   for (let i=0; i<users.length; i++) {

        let firstName = users[i].firstName;
        let lastName = users[i].lastName;
        let userName = users[i].userName;
        let email = users[i].email;
        let password = users[i].password;
        let active = users[i].active;
        let permissions = users[i].permissions;

      

        $("#UserTable").append(
            `<tr>
              <td>${firstName}</td>
              <td>${lastName}</td>
              <td>${userName}</td>
              <td>${email}</td>
              <td>${password}</td>
              <td>${active}</td>
              <td>${permissions}</td>
              </tr>`
              );
  

               
                
          }}
    