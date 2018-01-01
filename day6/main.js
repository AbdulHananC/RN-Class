var userName;                                        //declaring
var passWord;
var username1 = [];
var password1 = [];
function signup(username1, password1) {             //signup function
    for (i = 0; i < 3; i++) {                       // loop to get multiple inputs
        username1 = prompt("enter signup username"); //will get a prompt to get username
        password1= prompt("enter signup password");// will get a prompt to get signup password
    }
    userName = username1;                            //storing in another variable
    passWord = password1;                           //storing is another variable

}
for (a = 0; a < 3; a++) {
    function login(username, password) {                 //to get login prompt
        username = prompt("enter login username");
        password = prompt("enter login password");

        if (username === userName && password === passWord) { //comparing
            document.getElementById("heading").innerText = "Logged In"

        }
        else {
            document.getElementById("heading").innerText = "Try Again"
        }
    }
}
signup();
login();


