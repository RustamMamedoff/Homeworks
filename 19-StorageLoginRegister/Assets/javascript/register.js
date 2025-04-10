// const registeredUsers = [];

//     document.querySelector("form").addEventListener("submit", function (e) {
//         e.preventDefault();

//         const name = document.querySelector('input[name="full-name"]').value.trim();
//         const email = document.querySelector('input[name="email"]').value.trim();
//         const password = document.querySelector('input[name="password"]').value;
//         const confirmPassword = document.querySelector('input[name="confirm-password"]').value;

//         if (name.length < 3 || name.length > 20) {
//             alert("username must contain 3-20 elements");
//             return;
//         }

//         if (!email.endsWith('@gmail.com')) {
//             alert("Email must end to @gmail.com.");
//             return;
//         }

//         if (password.length < 8) {
//             alert("password must contain min 8 elements.");
//             return;
//         }

//         if (password !== confirmPassword) {
//             alert("invalid username or password");
//             return;
//         }

//         const alreadyRegistered = registeredUsers.some(user =>
//             user.name === name && user.password === password
//         );

//         registeredUsers.push({ name, email, password });
//         alert("registered successfully");

//         this.reset();
//     });

//////////////////////////////////////////////////////////////////////////


