import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
const EndpointWQuery = () => {

    const fetchData = () => 
        axios
        .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.data)



    const {data: Posts, error, isLoading} = useQuery<Post[],Error>({
        queryKey: ["posts"],
        queryFn:fetchData,
    });

  return (
    <>
    <h1 className="blue">React Query</h1>
    {isLoading ? <p>Loading Posts....</p> : null}
    {error ? <p>{error.message}</p> : null}
    {Posts?.map((post) => (
        <li className="blue" key={post.id}>{post.id}. {post.title}</li>
    ))}
    </>
  )
}

export default EndpointWQuery