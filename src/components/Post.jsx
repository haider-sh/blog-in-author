import { format } from "date-fns";
import { Trash2, SquareCheckBig, SquareX } from "lucide-react";
import { Link } from "react-router-dom";

function Post({ id, title, description, date, author, content, isPublished, editedPosts, setEditedPosts }) {


    function deletePost(id) {
        return async () => {
            const response = await fetch(`http://localhost:8080/posts/${id}/delete`,
                {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    }
                }
            );

            const result = await response.json();
            if (!result.success) {
                console.log(result.message);
                return;
            }
            console.log(result.message);
            setEditedPosts(editedPosts + 1);
        }
    }

    function updatePublishStatus(id) {
        return async () => {
            const response = await fetch(`http://localhost:8080/posts/${id}/toggleStatus`,
                {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    }
                }
            );

            const result = await response.json();
            if (!result.success) {
                console.log(result.message);
                return;
            }
            console.log(result.message);
            setEditedPosts(editedPosts + 1);
        }
    }

    function calculateReadTime(length) {
        return Math.round((length / 5) / 250);
    }

    return (
        <div className="blog">
            <div className="title-actions">
                <div className="title">
                    <Link to={`/posts/${id}`}>{title}</Link>
                </div>
                <button onClick={deletePost(id)}>
                    <Trash2 />
                </button>
                <button onClick={updatePublishStatus(id)}>
                    {
                        isPublished ?
                            <SquareCheckBig />
                            : <SquareX />
                    }
                    {isPublished ? "Published" : "Not Published"}
                </button>
            </div>
            <div className="info">
                <div className="date">
                    {format(date, "dd LLL, yyyy")}
                </div>
                •
                <div className="length">{calculateReadTime(content.length)} min read</div>
            </div>
            <div className="description">
                {description.substr(0, 200)}...
            </div>
            <div className="author">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round-icon lucide-user-round"><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" /></svg>
                {author.user.username}
            </div>
        </div>
    );
}

export default Post;