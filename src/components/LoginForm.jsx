import { useContext, useState } from "react";
import styles from "../styles/Form.module.css"
import { useNavigate} from "react-router-dom";
import { AppContext } from "../AppContext.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function LoginForm() {

    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [error, setError] = useState("");
    let {saveJwtToken, setLoggedIn } = useContext(AppContext);

    let navigate = useNavigate();

    function handleUsernameChange(e) {
        setUsername(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (!username || !password) {
            setError("All fields are required.");
        }
        else {
            setError("")
            let response = await fetch("http://localhost:8080/login", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })
            });

            let result = await response.json();

            if (result.success) {
                saveJwtToken(result.token);
                setLoggedIn(true);
                navigate("/");
            }
            else {
                setError(result.message);
            }
        };
    }

    return (
        <>
        <Header />
        <div className={styles.form}>
            <h2>Log in to your Blog In Author Account</h2>
            <form action="" method="post">
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        name="username"
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        name="password"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <button onClick={handleSubmit}>Log In</button>
                {
                    error &&
                    <div className={styles.error}>{error}</div>
                }
            </form>
        </div>
        <Footer />
        </>
    );
}

export default LoginForm;