// let toggle = true;
// const toggleFunction = () => {
//      if (toggle) { console.log(`I am true.`);
//       toggle = false;
//      } else { 
//          console.log(`I am false.`);
//           toggle = true
//          } }
//           toggleFunction() 

const nameInput = document.getElementById("nameInput")
const passwordInput = document.getElementById("passwordInput")
const logInBtn = document.getElementById("logInBtn")
let name;
let password;

// const logIn = () => {
//     name
//     
// }

logInBtn.addEventListener("click", () => {
    //logIn()
    name = nameInput.value;
    password = passwordInput.value;
    console.log("this button works");
    
    message.textContent = (`Hello ${name}. Your password is ${password}`)
    

})