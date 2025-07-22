// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(res => res.json())
// .then(data => {
//     console.log(data);
// })



// POST request (JavaScript fetch



// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         name: "iphone 15",
//         price: 1200,
//         color: "black"
//     })
// })
// .then(res => res.json())
// .then(data => {
//     console.log("New Product: created:", data);  
// });



// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//     method: "PATCH",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         price: 1100 
//     })
// })

// .then(res => res.json())
// .then(data => {
//     console.log("Update product: ", data)
// });


// PATCH Practice
// const productId = 1;

// const updateData = {
//     color: "black"
// };

// fetch("https://jsonplaceholder.typicode.com/posts/1${productId}", {
//     method: "PATCH",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(updateData)
// })
// .then(res => res.json())
// .then(data => {
//     console.log("Update product:", data)
// })
// .catch(err => {
//     console.error("Error updating product:", err);
// });


// // DELETE request 

// const productId =3;

// fetch("https://jsonplaceholder.typicode.com/posts/1${productId}", {
//     method: "DELETE"
// })
// .then(res => {
//     if (res.ok) {
//         console.log("Product with ID ${productId} has been deleted.");
//     }else {
//         console.error("Failed to delete the product.");
//     }
// })
// .catch(error => {
//     console.error("Error:", error);
// // });


// const productId = 4;

// fetch("https://jsonplaceholder.typicode.com/posts/1${productId}", {
//     method: "DELETE"
// })
// .then(res => {
//     if (res.ok) {
//         console.log("Product with ID ${productId} has been deleted.")
//     }else {
//         console.error("Failed to delete the product.")
//     }
// })
// .catch(error => {
//     console.error("Error:", error);
// });

