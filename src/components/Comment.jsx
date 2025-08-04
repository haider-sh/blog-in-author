import { Trash2 } from "lucide-react";

function Comment({ id, author, date, content, deleteComment }) {

    return (
        <div className="comment">
            <div className="info-actions">
                <div className="info">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-user-round-icon lucide-circle-user-round"><path d="M18 20a6 6 0 0 0-12 0" /><circle cx="12" cy="10" r="4" /><circle cx="12" cy="12" r="10" /></svg>
                    </div>
                    <div className="name-date">
                        <div className="name">{author}</div>
                        <div className="date">{date}</div>
                    </div>
                </div>
                <button onClick={deleteComment(id)}>
                    <Trash2 />
                </button>
            </div>
            <div className="text">{content}</div>
        </div>
    );
}

export default Comment;