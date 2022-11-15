import { auth, provider } from "../config/Firebase"
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from "react-router-dom"

export const SignIn = () => {

    const navigate = useNavigate()

    const signInWithGoogle = async () => {
        await signInWithPopup(auth, provider)
        navigate('/')
    }

    return (
        <div>
            <button className="btn-g" onClick={signInWithGoogle}>
                <img src="https://raw.githubusercontent.com/dependabot-pr/Static-Files/main/Assets/Logo/Google.svg" alt="google logo" />
                <p>Sign in with Google</p>
            </button>
        </div>
    )
}