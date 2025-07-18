const loadUser = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => showUser(data));
};

const showUser = (users) => {
  const userContainer = document.getElementById("users");
  for (const user of users) {
    const li = document.createElement("li");
    li.innerText = user.name;
    userContainer.appendChild(li);
  }
};





























// const loadUser = () =>{
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json())
//     .then(data => {
//         showUser(data)
//     })
// }

// const showUser = (users) => {
//     const userContainer = document.getElementById('users');

//     for(const user of users){
//         console.log(user.name)
//         const li = document.createElement("li");
//         li.innerText = user.name;
//         userContainer.appendChild(li);
//     }
// }

// // const showUser = (users) => {
// //     for (let i = 0; i < users.length; i++){
// //         const user = users[i]
// //         console.log(user)
// //     }
// // }

// // const showUser = (users) => {
// //     // for (const user of users){
// //     //     console.log(user)
// //     // }
// //     console.log(users)
// // }
