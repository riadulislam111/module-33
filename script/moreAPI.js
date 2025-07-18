// const handlerLoadUser = () => {

//     fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(data => {
//         console.log(data)
//         displayUser(data)
//     })

// }






// const displayUser = (users) =>{

// console.log(users[5])

// }




// // fetch("").then(res => res.json()).then(data => {
// //     displayUser()
// // })





const handlerLoadUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
       
        displayUser(data)
    } )
}

const displayUser = (users) => {
 console.log(users)
}