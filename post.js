// const handlsePost = () => {
//     fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json()).then(data => {
//         displayPost(data)
//     })
// }

// const displayPost = (posts) => {

//     const postContainer = document.getElementById('postContainer');
    
//     for(const post of posts){
//        console.log(post)
//     const div = document.createElement("div");
//     div.classList.add("card")
//     div.innerHTML = `
//     <h1>${post.title}</h1>
//     <p>${post.body}</p>
//     <button>Dtaisl</button>
//     `;
//     postContainer.appendChild(div)
//     }
// }

// // handlsePost()


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



const handlePost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => displayPost(data))
    .catch(err => console.log(err))
}

const displayPost = (posts) => {
    const postContainer = document.getElementById("postContainer");
    for (const post of posts) {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
        <h1>${post.title}</h1>
        <p>${post.body}</p>
        <button>Details</button>
        `;
        postContainer.appendChild(div);
    }
}
