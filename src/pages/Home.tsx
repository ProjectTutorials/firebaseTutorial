import { auth } from "../config/Firebase";
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from "react-router-dom";

export const Home = () => {

    // USER
    const [user] = useAuthState(auth);

    return (
        <div className="d-flex justify-content-center pushDown200">
            {user ? <h1>Welcome, {user?.displayName}</h1> : <h1>Sign in from  <Link to={'/signinpage'}>here</Link></h1>}
        </div>
    )
}
