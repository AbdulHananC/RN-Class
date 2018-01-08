let loginObj = [];

// loginObj.push({"usnername":"sumair","password":"1234"});
// loginObj.push({"usnername":"sumair1","password":"1234"});
// loginObj.push({"usnername":"sumair2","password":"1234"});
// loginObj.push({"usnername":"sumair3","password":"1234"});
var value = {};
function signupFunc(){
    value.username1 = document.getElementById('username').value;
    value.password1 = document.getElementById('password').value;

loginObj.push(value);

localStorage.setItem('objDb',JSON.stringify(loginObj));
objDb = JSON.parse(localStorage.getItem('objDb'));

document.getElementById('signup').innerHTML = "<button id='login' onclick='login()'>login</button> " 
}
function login(){
    document.getElementById('username').innerHTML = ''; 
document.getElementById('password').innerHTML = '';
objDb.forEach(function(item) {
    console.log(item);
  if(item.username !== value.username1) {
    console.log("username does not exist");
  }else {
    if(item.password === value.password1) {
      console.log("Password is correct");
    } else {
      console.log("password incorrect");
    }
  }
})}
 
//genimotion