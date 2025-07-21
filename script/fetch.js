// const handlerLoadData =()=>{

//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(res => res.json())
//     .then(data => {
//       console.log(data)
//     })
// }

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));





  // // const handlerLoadData = () => {

  // //   fetch("https://jsonplaceholder.typicode.com/todos/1")
  // //   .then((res) => res.json())
  // //   .then((data) => console.log(data))


  // }

////////////////////

  // fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     .then(res => res.json())
  //     .then(data => console.log(data))

  



  const handlerLoadData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })
  }



  // fetch("https://jsonplaceholder.typicode.com/todos/1")
  // .then(res => res.json())
  // .then(data => console.log("Todo 1:", data))



  // fetch("https://jsonplaceholder.typicode.com/todos/1")
  // .then(res => res.json())
  // .then(data => console.log("Todo 2:", data))



  // fetch("https://jsonplaceholder.typicode.com/todos/1")
  // .then(res => res.json())
  // .then(data => console.log("User 1:", data))




// fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then(res => res.json())
// .then(data => console.log("Post 1:", data));



// fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then(res => res.json())
// .then(data => console.log("Comment 1:", data))



const handlerLoadTodo = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("todo-data");
   container.innerHTML = `
   <h3> TODO Details</h3>
   <p><strong>ID:</strong> ${data.id}</p>
   <p><strong>Title:</strong> ${data.title}</p>
   <p><strong>Completed:</strong> ${data.Completed ? "Yes" : "No"}</p>
   
   
   `
  
  
  })
}