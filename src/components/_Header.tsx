import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../config/Firebase";
import { SignOut } from "../security/SignOut";

export const _Header = () => {
    const [user] = useAuthState(auth);
    return (
        <ul className="navbar-nav justify-content-end align-items-center">
            <li className='barItem'>
                <Link to={'/posts'} className='btn-accent'>Posts</Link>
            </li>
            <li className='barItem'>
                {user ? <SignOut /> : <Link to={'/signinpage'} className="btn-accent green blk" > Sign In </Link>}
            </li>
        </ul>
    )
}