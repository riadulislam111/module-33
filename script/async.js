// const num1 = 10;
// const num2 = 30;

// console.log("ami prothom")


// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())
// .then(data => console.log(data))

// console.log("ami second")
// const result = num1 = num2;

// console.log(result)






// const num1 = 38;
// const num2 = 43;

// console.log("ami prothim")

// setTimeout(()=>{
//     console.log("ami settimeout")
// },3000)

// console.log("ami third")
// const result = num1 + num2;

// console.log(result)

// function test(){
//     console.log("ami test")
// }




















// const { constant } = require("async");

// const { constant } = require("async");

// const handleUser = () => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(error => console.log("error dhorchi", error))
// }

// handleUser()



// const handleUser2 = async () => {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json();
//         console.log(data);  
//     }
//     catch {
//         console.log("hello error");  
//     }
// }

// handleUser2()


// const num1 = 10;
// const num2 = 20;
// const result = num1 + num2;

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())
// .then(data => console.log(data))
// console.log(result)
// console.log("hello")




// // API কল ১: ফেচিং ইউজার ডেটা
// const fetchUsers = async () => {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const users = await response.json();
//         console.log("Users:", users);
//     } catch (error) {
//         console.log("Error fetching users:", error);
//     }
// };







// const handleUser = ()=>{
//     fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())
//     .then(data => console.log(data))
//     .catch(error => console.log("error dhorci", error))
// }

// handleUser()

//////////////////////

// const handleUser2 = async () => {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");

//         const data = await response.json();
//         console.log(data)
//     }
//     catch{
//         console.log("hello error")
//     }
// }

// handleUser2()

/////////////////////

// const num1 = 10;
// const num2 = 20;
// const result = num1 + num2;

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())
// .then(data => console.log(data))

// console.log(result)
// console.log("hello")


// // console.log("Start");

// setTimeout(() => {
//     console.log("এই মেসেজ ৩ সেকেন্ড পর শো করবে");
// }, 3000);

// // console.log("End");

// console.log("start");

// setInterval(( )=> {
//     console.log("timer")
// },5000);


// console.log("end")

// let numbers = [2, 4, 56, 7];

// numbers.push(34,45);

// console.log(numbers);

// let numbers = [34,45,56,7,4];
// let lastItem = numbers.pop();

// console.log(numbers);


// let fruits = ["apple", "bnaana", "mango"];

// console.log(fruits.indexOf("mango"));
// console.log(fruits.indexOf("cat"));

// setTimeout (() => {
//     console.log("asynchronous task");
// }, 2000);

// console.log("synchronous task");



///////


// async function amrData() {
//     return "data chole aise";
// }
// amrData().then(console.log);


// async function dataAno() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
//     const user = await response.json();
//     console.log(user);

// }




// async function userDekhao() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
//         const data = await response.json();
//         console.log("User:", data);
//     }catch (error) {
//         console.log("Problem hoyeche:", error);
//     }
// }
// userDekhao();



// const handleUser = async () => {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");

//         const data = await response.json();
//         console.log(data)
//     } catch{
//         console.log("Hello Error!!");
//     }
// }

// handleUser();


// const handleUser = async () => {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");

//         const data = await response.json();
//         console.log(data)
//     } catch {
//         console.log("Hello Error!");
//     }
// }

// handleUser();



// const getPosts = async () => {
//     try {
//         const res = await fetch("https://jsonplaceholder.typicode.com/users");
//         const posts = await res.json();
//         console.log(posts);
//     }catch {
//       console.log("Post anar somoy hoyeche ")        
//     }
// }
// getPosts();


// const getSingleUser = async () => {
//     try {
//         const res = await fetch("https://jsonplaceholder.typicode.com/users");
//         const user = await res.json();
//         console.log(user);
//     }catch {
//         console.log("problem");
//     }
// }
// getSingleUser();


// const getTodos = async () => {
//     try {
//        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//        const todos = await res.json();
//        todos.forEach(todos => {
//         console.log(`${todos.title}`);
//        });
//     }catch {
//         console.log("problem")
//     }
// }
// getTodos();


// const getUserNames = async () => {
//     try {
//         const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//         const users = await res.json();
//         users.forEach(user => {
//             console.log(`${user.title}`);
//         });
//     }catch {
//         console.log("problem")
//     }
// }
// getUserNames();


// const getPostTitle = async () => {
//     try {
//         const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//         const posts = await res.json();
//         posts.slice(0, 10).forEach(post => {
//             console.log(`${post.title}`);
//         });
//     }catch {
//         console.log("problem")
//     }
// }
// getPostTitle();



