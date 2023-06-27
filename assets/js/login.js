function signup(e) {
  event.preventDefault();
  var username = document.getElementById("usernameSignUp").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("passwordSignUp").value;
  var user = {
    username: username,
    email: email,
    password: password,
  };
  var json = JSON.stringify(user);
  localStorage.setItem(username, json);
  alert("Dang ki thanh cong .");
  window.location.href = "login.html";
}
function login(e) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var user = localStorage.getItem(username);
  var data = JSON.parse(user);
  if (user == null) {
    alert("vui long nhap username va password");
  } else if (username == data.username && password == data.password) {
    alert("Dang nhap thanh cong");
    window.location.href = "index.html";
  } else alert("Dang nhap that bai");
}
