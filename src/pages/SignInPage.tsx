import { SignIn } from "../security/SignIn"

export const SignInPage = () => {
    return (
        <div className="mainSection">
            <div className="anchor pushDown100"></div>
            <div className="subSection">
                <SignIn />
            </div>
        </div>
    )
}