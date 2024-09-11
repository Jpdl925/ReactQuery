import usePosts from "../hooks/usePosts"

const EndpointWQueryHook = () => {

    const {data: posts, error, isLoading } = usePosts();

  return (
    <>
        <h1 className="green">React Query with Custom Hook</h1>
    {isLoading ? <p>Loading Posts....</p> : null}
    {error ? <p>{error.message}</p> : null}
    {posts?.map((post) => (
        <li className="green" key={post.id}>{post.id}. {post.title}</li>
    ))}
    </>
  )
}

export default EndpointWQueryHook