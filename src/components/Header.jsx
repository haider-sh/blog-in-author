import { useContext } from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import { AppContext } from "../AppContext";

function Header() {

    let { isLoggedIn, logUserOut, loggedIn } = useContext(AppContext);

    return (
        <div className="header">
            <div className="name">
                <div className="icon">
                    <img src="/blogging.png" alt="App Icon" />
                </div>
                <h1>Blog In Authors</h1>
            </div>
            <div className="links">
                {
                    (isLoggedIn() || loggedIn) &&
                    <Link to="/posts/create" >Create Post</Link>
                }
                {
                    (isLoggedIn() || loggedIn) &&
                    <Link to="/">Blog</Link>
                }
                {
                    (!isLoggedIn() && !loggedIn) &&
                    <Link to="/login">Log In</Link>
                }
                {
                    (!isLoggedIn() && !loggedIn) &&
                    <Link to="/signup">Sign Up</Link>
                }
                {
                    (isLoggedIn() || loggedIn) &&
                    <Link onClick={logUserOut} >Logout</Link>
                }
            </div>
        </div>
    );
}

export default Header;