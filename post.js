const handlePost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json()).then(data => {
        displayPost(data)
    })
}

const displayPost = (posts) => {

    const postContainer = document.getElementById('postContainer');
    
    for(const post of posts){
       console.log(post)
    const div = document.createElement("div");
    div.classList.add("card")
    div.innerHTML = `
    <h1>${post.title}</h1>
    <p>${post.body}</p>
    <button>Dtaisl</button>
    `;
    postContainer.appendChild(div)
    }
}

// handlsePost()


const handleUpdate= () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}

const handleCreate = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}


//////////


// const handlePost = () => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(res => res.json())
//     .then(data => displayPost(data))
//     .catch(err => console.log(err))
// }


// const displayPost = (posts) => {
//     const postConatainer = document.getElementById("postConatainer");
// for (const post of posts) {
//     // console.log(post)
//     const div = document.createElement("div");
//     div.classList.add("card")
//     div.innerHTML = `
//     <h1>${post.title}</h1>
//     <p>${post.body}</p>
//     <button>Details</button>
    
//     `;
//     postConatainer.appendChild(div)
// }
// }




// const handlePost = () => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(res => res.json())
//     .then(data => displayPost(data))
//     .catch(err => console.log("Error:", err))
// }

// const displayPost = (posts) => {
//     const postContainer = document.getElementById("postContainer");
//     for (const post of posts) {
//         const div = document.createElement("div");
//         div.classList.add("card");
//         div.innerHTML = `<h1>${post.title}</h1>
//         <p>${post.body}</p>
//         <button>Details</button>
        
//         `;
//         postContainer.appendChild(div);
//     }
// }



// const handlePost = () => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(res => res.json())
//     .then(data => displayPost(data))
//     .catch(err => console.log("Error:", err))
// }


// const displayPost = (posts) => {
//     const postContainer = document.getElementById("postContainer");
//     for (const post of posts) {
//       const div = document.createElement("div");
//       div.classList.add("card");
//       div.innerHTML = `<h1>${post.title}</h1>
//       <p>${post.body}</p>
//       <button>Details</button
      
      
//       `;
//       postContainer.appendChild(div);

      
        
//     }

// }



// const handlePost = () => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(res => res.json())
//     .then(data => displayPost(data))
//     .catch(err => console.log(err))
// }

// const displayPost = (posts) => {
//     const postContainer = document.getElementById("postContainer");
//     for (const post of posts) {
//         const div = document.createElement("div");
//         div.classList.add("card");
//         div.innerHTML = `
//         <h1>${post.title}</h1>
//         <p>${post.body}</p>
//         <button>Details</button>
//         `;
//         postContainer.appendChild(div);
//     }
// }
// handlePost();



// console.log("Start fetching...");


// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(err => console.log(err));

// console.log("Fetch request sent.");
 





// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(res => {
//     if(!res.ok) {
//         throw new Error("Network response was not ok");
//     }
//     return res.json();
// })
// .then(data => console.log(data)
// .catch(error => console.log("Error:", error)));


// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(response => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then(data => console.log(data))
//   .catch(error => console.log("Error:", error));


// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response => {
//     if (!response.ok) {
        
// throw new Error("Network response was not ok");

//     }
//     return response.json();
    
// })
// .then(data => console.log(data))
// .catch(error => console.log("Error:", error));


// POST Request Example (For Sending Data):
// fetch() use kore apni data server e pathate paren (POST request). Example:

// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers: {
//         "Content-Type":"application/json"
//     },
//     body: JSON.stringify({
//         title: "New Post",
//         body: "This is a new post",
//         userId: 1
//     })
// })


// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log("Error:", error)); 


// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(res => res.json())
// .then(data => {
//     console.log(data);
// })
// .catch(error => {
//     console.log("Error fetching data:", error);
// })


// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(res => {
//     if(!res.ok) {
//         throw new Error("Network response was not ok");
//     }
//     return response.json();
// })
// .then(data => {
//     console.log(data);
// })
// .catch(error => {
//     console.log("Error occurred:", error);
// });




// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",  // Specify the method as POST
//   headers: {
//     "Content-Type": "application/json"  // Indicate that we're sending JSON data
//   },
//    body: JSON.stringify({  // Data to send
//     title: "New Post",
//     body: "This is a new post from fetch.",
//     userId: 1
//   })
// })
//  .then(response => response.json())
//   .then(data => {
//     console.log("Data sent successfully:", data);
//   })
//   .catch(error => {
//     console.log("Error in sending data:", error);
//   });



// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(res => {
//     if (res.status !== 200) {
//         throw new Error("Failed to fetch data. Status code: ${res.status")
//     }
//     return res.json();
// })
// .then(data => {
//     console.log("Fetched data successfully:", data);
// })
// .catch(error => {
//     console.log("Error occurred:", error);
// });


// const apiKey = "your_api_key";
// const city = "Dhaka";

// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
// .then(res => res.json())
// .then(data => {
//     console.log("Weather Data:", data);
// })
// .catch(error => {
//     console.log("Error fetching weather data:", error);
// });


 