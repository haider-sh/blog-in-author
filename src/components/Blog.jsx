import Post from "./Post";

function Blog({ posts, editedPosts, setEditedPosts}) {
    return (
        <div className="blogs">
            {
                posts?.length ? posts.map(post => (
                    <Post                
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        date={post.created}
                        isPublished={post.isPublished}
                        content={post.content}
                        description={post.description}
                        author={post.author}
                        editedPosts={editedPosts}
                        setEditedPosts={setEditedPosts}
                    />
                )) :
                    "Loading..."
            }
        </div>
    );
}

export default Blog;