// const loadData = () => {
//     fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(err => console.log(err))
// }

// loadData();



// const fetchData = () => {
//     return new Promise((reslove,reject) => {
//         const status = true;
//        if (status) {
//         reslove({name:"hero"})
//        }
//        else {
//         reject("server error")
//        }

//     })
// }

// fetchData()
// .then(res => console.log(res))
// .catch(err => console.log(err))


// const urls = [
//     'https://jsonplaceholder.typicode.com/posts',
//     'https://jsonplaceholder.typicode.com/users',
//     'https://jsonplaceholder.typicode.com/albums',
//     'https://jsonplaceholder.typicode.com/albums',
//     'https://jsonplaceholder.typicode.com/todos'
// ];



// Promise.all(urls.map(url => {
//     return fetch(url).then(res => res.json())
//     .then(data => data)
// }))
// .then(res => res)
// .then(data => console.log(data))
// .catch(error => console.log(error))


// const loadData = async () => {
//     try{
//         console.log("ami prontom")
//         console.log("ami second")
//         const respose = await fetch("https://jsonplaceholder.typicode.com/posts");
//         const data = await respose.json();
//         console.log(data)
//         const result = 10 + 10;
//         console.log(result)
//         console.log("ami third")
//     }
//     catch{
//     console.log("error")
//     }
// }

// loadData()


// let count = 0;

// const clockID = setInterval(()=> {
//     count++;
//    console.log(count)
   
//     if (count >=6){
//         clearInterval(clockID)
//     }


// },2000)













// console.log(1)
// console.log(2)
// console.log(3)
// let count = 0;
// // setInterval(()=> {
// //     console.log("jello")
// // },3000)
// setInterval(()=> {
//     count++;
//     console.log(count)
// },3000)

// console.log(4)
// console.log(5)


// setTimeout(() => {
//     console.log("hello")
// },4000)