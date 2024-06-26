import React, { useEffect, useState } from 'react'

const App = () => {
  const [posts,setPosts] = useState([]);
  const fetchData = async()=>{
    const data = await fetch("https://fakestoreapi.com/products")
                .then(response=> response.json())
                .catch(error=>error.message)
setPosts(data);
console.log(posts);
    
  }
useEffect(()=>{
  fetchData()
},[])
  return (
    <div>
      {posts.map((posts,index) => 
      <div key={index}>{posts.title}</div>
      )}
    </div>
  )
}

export default App
