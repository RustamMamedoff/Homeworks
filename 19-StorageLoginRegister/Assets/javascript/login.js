
  // let attempts = 0;
  // let locked = false;
  // let locktime = 0;

  // document.getElementById("loginForm").addEventListener("submit", function(e) {
  //   e.preventDefault();

  //   let username = document.getElementById("username").value.trim();
  //   let password = document.getElementById("password").value;

  //   if (locked) {
  //     let now = new Date().getTime();
  //     if (now < locktime) {
  //       alert("Account is locked.Please wait 15 min");
  //       return;
  //     } else {
  //       locked = false;
  //       attempts = 0;
  //     }
  //   }
  //   if (username.length < 3) {
  //     alert("username should contain min 3 elements");
  //     return;
  //   }

  //   if (password.length < 8) {
  //     alert("password should contain min 8 elements");
  //     return;
  //   }
  //   let correctUsername = "test";
  //   let correctPassword = "test12345";

  //   if (username === correctUsername && password === correctPassword) {
  //     alert("welcome!");
  //     attempts = 0;
  //   } else {
  //     attempts++;
  //     if (attempts >= 5) {
  //       locked = true;
  //       locktime = new Date().getTime() + 15 * 60 * 1000;
  //       alert("too many trys to log in.Account is locked for 15 min");
  //     } else {
  //       let left = 5 - attempts;
  //       alert("incorrect username or password:"+ left);
  //     }
  //   }
  // });
