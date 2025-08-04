import BlogEditor from "./BlogEditor";
import styles from "../styles/PostForm.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PostForm() {

    let [title, setTitle] = useState("");
    let [description, setDescription] = useState("");
    let [isPublished, setIsPublished] = useState(0);
    let [content, setContent] = useState("");

    let navigate = useNavigate();

    async function savePost() {
        const response = await fetch(`http://localhost:8080/posts/create`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body : JSON.stringify({title, description, isPublished, content})
            }
        );

        const result = await response.json();
        if (!result.success) {
            console.log(result.message);
            return;
        }
        console.log(result.message);
        navigate("/");
    }

    return (
        <div className={styles.form}>
            <div className={styles.input}>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
            </div>
            <div className={styles.input}>
                <label htmlFor="description">Description:</label>
                <textarea
                    name="description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                ></textarea>
            </div>
            <div className={styles.input}>
                <label htmlFor="published">Publish? :</label>
                <div>
                    <input
                        type="radio"
                        name="published"
                        value="1"
                        onChange={e => setIsPublished(+e.target.value)}
                    />
                    Yes
                    <input
                        type="radio"
                        name="published"
                        value="0"
                        onChange={e => setIsPublished(+e.target.value)}
                    />
                    No
                </div>
            </div>
            <BlogEditor initialValue={"Start blogging..."} setContent={setContent} />
            <button onClick={savePost}>Create Post</button>
        </div>
    );
}

export default PostForm;