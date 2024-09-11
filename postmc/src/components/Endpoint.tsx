import axios from "axios";
import { useEffect, useState } from "react"

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const Endpoint = () => {

    const [posts, setPosts] = useState<Post[]>([]);
    const [error, setError] = useState("");

    const fetchData = () => {
        axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => setPosts(res.data))
        .catch((error) => setError(error))
    }

    useEffect(() => {
        fetchData();
    }, [])
    

  return (
    <>
    <h1 className="red">Axios, UseState, UseEffect</h1>
        {posts.map((post) => (
            
            <li className="red" key={post.id}>{post.id}. {post.title}</li>
            
        ))}
    </>
  )
}

export default Endpoint