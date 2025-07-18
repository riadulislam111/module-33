const loadPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => showPosts(data));
  };
  
  const showPosts = (posts) => {
    const postsContainer = document.getElementById("posts");
    postsContainer.innerHTML = ""; 
  
    for (const post of posts) {
      const postDiv = document.createElement("div");
      postDiv.classList.add("post");
  
      const title = document.createElement("h3");
      title.innerText = post.title;
  
      const body = document.createElement("p");
      body.innerText = post.body;
  
      postDiv.appendChild(title);
      postDiv.appendChild(body);
  
      postsContainer.appendChild(postDiv);
    }
  };
  
  
  window.onload = loadPosts;
  