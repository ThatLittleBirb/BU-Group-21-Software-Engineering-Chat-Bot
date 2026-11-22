import { Link } from "react-router";

export default function Home() {
    return (
        <div>
            <h1>Welcome to Group 21's Chat App</h1>
            <Link to="/chat">Go to Chat</Link>
        </div>
    );
}