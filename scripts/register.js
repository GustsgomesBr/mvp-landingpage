
var inputLogin = document.getElementById('login');
var inputPassword = document.getElementById('password');
var inputRePassword = document.getElementById('repeat-password');
var inputEmail = document.getElementById('email');
var inputReEmail = document.getElementById('repeat-email');
var inputPhone = document.getElementById('phone');


function registrarUsuario(){
//validação dos campos front-end;
  if(inputPassword.value != inputRePassword.value){
    alert('Error: As senhas não coincidem!');
  }else if(inputEmail.value != inputReEmail.value){
    alert('Error: Os emails não coincidem!');
  }else{
    registerUser();
  }
}

async function registerUser(){
  let login = inputLogin.value;
  let senha = inputPassword.value;
  let email = inputEmail.value;
  let phone = inputPhone.value
  try{
    const response = await fetch(`http://localhost:3000/auth/register`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: login, password: senha, email: email, whatsapp: phone})
    });
    const data = await response.json();
    let token = data.token
    document.cookie = `token=${token}`;
    if(data.token != null){
      window.open('/app', '_self');
    }
  }
  catch (error){
    console.error(error);
  }

}