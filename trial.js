// console.log("start");
// console.log("first task");
// console.log("second task");
// console.log("end");

// console.log("start");

// setTimeout(() => {
//   console.log("Asynchronous Task");
// }, 2000);

// console.log("End");


// console.log("Start");

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(error => console.log(error));

// console.log("End");


// console.log("Start");

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(res => res.json())
// .then(data => {
//     console.log("data fetched");
//     console.log(data)
// })

// .catch(error => console.log(error));


// console.log("End");


// async function fetchData() {
//     console.log("Start");
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json();
//     console.log(data);
//     console.log("End");
    
    
// }

// fetchData();



// let myPromise = new Promise(function(resolve, reject){
//     let success = true;

//     if(success){
//         resolve("Task completed successfull");
//     }
//     else{
//         reject("task failed");
//     }
// });

// myPromise.then(function(result){
//     console.log(result);
// }).catch(function(error){
//     console.log(error);
// });


// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Promise 1 is done"), 2000);
// });

// let promise2 = new Promise ((resolve, reject) => {
//     setTimeout(() => resolve("Promise 2 is done"), 5000);
// } );

// Promise.all([promise1, promise2])
// .then((results) => {
//     console.log(results);
// })

// .catch((error) => {
//     console.log(error);
// });


// let myPromise = new Promise(function(resolve, reject){
//     let success = false;

//    if (success){
//     resolve("success");
//    }
//    else{
//     reject("Failed");
//    }

// });

// console.log(myPromise);

// myPromise.then((result) => {
//     console.log(result);
// }).catch((error)=> {
//     console.log(error);
// });


// // Example of multiple promises with Promise.all
// function fetchData1() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("Data from API 1");
//       }, 3000);
//     });
//   }
  
//   function fetchData2() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("Data from API 2");
//       }, 2000);
//     });
//   }
  
//   function fetchData3() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         reject("Error fetching data from API 3");
//       }, 1000);
//     });
//   }
  
//   Promise.all([fetchData1(), fetchData2(), fetchData3()])
//     .then((results) => {
//       console.log(results);  // If all are successful
//     })
//     .catch((error) => {
//       console.log(error);  // If any one of them fails
//     });
  


// let myPromise = new Promise(function(resolve, reject){
//     let success = true;
//     if(success){
//         resolve("your order is ready");
//     }
//     else{
//         reject("something went wrong");
//     }
// });

// myPromise.then(function(result){
//     console.log(result);
// }).catch(function(error){
//     console.log(error)
// });



// let myPromise = new Promise(function(resolve, reject){
//     let success = false;
//     if(success){
//         resolve("your order is ready!")
//     }
//     else{
//         reject("something went wrong");
//     }
// });

// myPromise.then(function(result){
//     console.log(result);
// }).catch(function(error){
//     console.log(error);
// })


// let fetchData = new Promise(function(resolve, reject){
//     let dataFetched = true;

//     if(dataFetched){
//         resolve("data fetched successfull");
//     }
//     else{
//     reject("Error fatching data ");
//     }
// });

// fetchData.then(function(data){
//     console.log(data);
// }).catch(function(error){
//     console.log(error);
// });


// async function fetchData() {
//     let respose = await fetch('https://jsonplaceholder.typicode.com/posts');
//     let data = await respose.json();
//     console.log(data); 

// }

// fetchData();



// async function fetchData() {
//     try{
//         let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
//         if(!response.ok){
//             throw new Error('Network response was not ok');
//         }
//         let data = await response.json();
//         console.log(data);
//     }catch(error){
//       console.log.error('There was a problem with the fetch oparetion:', error);
//     }
// }

// fetchData();



// async function fetchData() {
//     try{
//         let [response1, response2] = await Promise.all([
//             fetch('https://jsonplaceholder.typicode.com/posts'),
//             fetch('https://jsonplaceholder.typicode.com/users')
//         ]);
//         let data1 = await response1.json();
//         let data2 = await response2.json();
//         console.log(data1, data2);
//     }catch(error){
//         console.log("Error fetching data:", error);
//     }
// }

// fetchData();



// async function getPostData() {
//     let post = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
//     let postData = await post.json();
//     return postDatal;
// }

// async function fetchData(userID, postID
// ) {
//     try{
//         let user = await getUserData(userID);
//         let post = await getPostData(postID);

//         console.log("User Data:", user);
//         console.log("Post Data:", post);
//     }
//     catch(error){
//         console.error('Error fetching data:', error);
//     }
    
// }

// fetchData(1, 1);



// async function getUserData(userId) {
//     let user = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//     let userData = await user.json();
//     return userData;
//   }
  
//   async function getPostData(postId) {
//     let post = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
//     let postData = await post.json();
//     return postData;
//   }
  
//   async function fetchData(userId, postId) {
//     try {
//       let user = await getUserData(userId);
//       let post = await getPostData(postId);
//       console.log("User Data: ", user);
//       console.log("Post Data: ", post);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }
  
//   fetchData(1, 1);
  

// setTimeout(()=> {
//     console.log("3 second pore ei msg ta dekhaba");
// },3000);

// let inervalID = setInterval(() => {
//     console.log("proti 2 second por msg dekhaba")
// },2000);

// setTimeout(()=>{
//     clearInterval(inervalID);
//     console.log("Interval off kora hoyese")
// },6000)


// let timer = setTimeout
// (()=>{
//     console.log("ei msg ta kokhono dekha jabe nah")
// }, 5000);

// clearTimeout(timer);


// let count = 0 ;
// let interval = setInterval(()=> {
//     count++;
//     console.log(`barta ${count}`);
//     if(count === 5){
//         clearInterval(interval);
//     }
// },1000);


// setTimeout(()=> {
//     console.log("Hello , World");
// }, 5000);


// let interval = setInterval(()=>{
//     console.log("Hello");
// },2000);

// setTimeout(()=>{
//     clearInterval(interval);
//     console.log("Stopped");
// },1000);


// let count = 0;
// let timer = setInterval(()=> {
//     count++;
//     console.log(count);
//     if(count === 5){
//         clearInterval(timer);
//         console.log("Timer Stopped")
//     }
// }, 1000);


// function multiply(x,y) {
//     return x * y;
//  }
 
//  function squared(n) {
//       return multiply(n,n)
//    }
 
//  function printSquare(n) {
//     return squared(n)
//  }
 
//  let numberSquared = printSquare(5);
//  console.log(numberSquared);

// console.log("ji");

// setTimeout(function(){
//     console.log("free")
// },5000);

// console.log("js")

// function first() {
//     console.log("First Function");
//   }
  
//   function second() {
//     console.log("Second Function");
//   }
  
//   first();
//   second();
  


// console.log("Start");

// setTimeout(() => {
//   console.log("Inside Timeout");
// }, 2000);

// console.log("End");


// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout Callback");
// }, 2000);

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(data => console.log("Fetched Data"));

// console.log("End");


// function delayGreeting(name,delayTime){
//     setTimeout(()=>{
//         console.log(`Hello, ${name}!`);
//     },delayTime);
// }

// delayGreeting("Alice", 2000)



// function tellJoke(){
//     console.log("Why dont scientists trust atoms? Because they make up everything");

// }

// const jokeInterval = setInterval(tellJoke,2000);

// setTimeout(()=>{
//     clearInterval(jokeInterval);

//     console.log("No more jokes for today")
// },10000)


// async function fetchJoke() {
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json();
//         console.log(data.joke);
//     }
//     catch(error){
//         console.log("Faied to fetch joke:", error);
//     }

// }


// fetchJoke();



// async function fetchJoke() {
//     try {
//         const response = await fetch("https://v2.jokeapi.dev/joke/Programming?type=single");
//         const data = await response.json();
        
//         console.log(data.joke); // Print the joke from API
//     } catch (error) {
//         console.log("Failed to fetch joke:", error);
//     }
// }

// // Call function to fetch and log the joke
// fetchJoke();




// console.log("Start");

// setTimeout(()=> {
//     console.log("Timeout callback");
// }, 0);

// Promise.resolve().then(()=>{
//     console.log("Promies Resolved")
// });

// console.log("End");

// alert("hello");

