import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { auth } from "../config/Firebase"

export const SignOut = () => {

    const navigate = useNavigate()

    const signOutWithGoogle = async () => {
        await signOut(auth)
        navigate('/')
    }

    return (
        <div>
            <button className="btn-accent btn-red" onClick={signOutWithGoogle}>
                Sign Out
            </button>
        </div>
    )
}