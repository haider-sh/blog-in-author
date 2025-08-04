import { useEffect, useState } from "react";
import "../styles/PostPage.css";
import Comment from "./Comment.jsx";
import { useParams } from "react-router-dom";
import { format } from "date-fns";

function PostPage() {


    let [deletedComments, setDeletedComments] = useState(0);
    let [pageData, setPageData] = useState(null);
    let { id } = useParams();

    useEffect(() => {
        async function getPostById() {
            const response = await fetch(`https://blog-in-backend.vercel.app/posts/${id}`);
            const post = await response.json();

            if (!post.success) {
                console.log(post.message);
                return;
            }

            setPageData(post.data);
        }
        getPostById();
    }, [id, deletedComments]);

    function deleteComment(commentId){
        return async () => {
            const response = await fetch(`https://blog-in-backend.vercel.app/posts/${id}/comments/${commentId}/delete`, 
                {
                    headers : {
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    }
                }
            );
            
            const result = await response.json();
            if(!result.success){
                console.log(result.message);
                return;
            }
            console.log(result.message);
            setDeletedComments(deletedComments + 1);
        }
    }

    function calculateReadTime(length) {
        return Math.round((length / 5) / 250);
    }

    return (
        pageData ? 
            <div className="page">
                <div className="title">{pageData.title}</div>
                <div className="info">
                    <div className="date">{format(pageData.created, "dd LLL, yyyy")}</div>
                    •
                    <div className="length">{calculateReadTime(pageData.content.length)} min read</div>
                </div>
                <div className="author">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round-icon lucide-user-round"><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" /></svg>
                    {pageData.author.user.username}
                </div>
                <div className="description">{pageData.description}</div>
                <div 
                className="content"
                dangerouslySetInnerHTML={{__html: pageData.content}}
                ></div>
                <div className="comments">
                    <h2>Comments ({pageData.comments.length})</h2>
                    {
                        pageData.comments.map(comment => (
                            <Comment
                                key={comment.id}
                                id={comment.id}
                                author={comment.author.user.username}
                                date={format(comment.created, "dd LLL, yyyy")}
                                content={comment.content}
                                deleteComment={deleteComment}
                            />
                        ))
                    }
                </div>
            </div> :
            "Loading post..."
    );
};

export default PostPage;