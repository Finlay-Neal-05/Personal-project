import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

export default function Login() {
    const { user, logout, loginWithRedirect } = useAuth0()
    const nickname = user?.nickname

    const handleSignOut = () => {
        logout()
    }

    const handleSignIn = () => {
        loginWithRedirect()
    }

    return (
        <>
        <div className="loginButton">
            <IfAuthenticated>
                <button onClick={handleSignOut} className="loginButton">Sign Out</button>
                {user && <p>Signed in as: {nickname}</p>}
            </IfAuthenticated>
            <IfNotAuthenticated>
                <button onClick={handleSignIn} className="loginButton">Sign In</button>
            </IfNotAuthenticated>
        </div>
        </>
    )
}