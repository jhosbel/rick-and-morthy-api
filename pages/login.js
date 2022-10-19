import styles from "../styles/Home.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function LoginPage() {

    const {data: session, status} = useSession()
    const router = useRouter()

    if(status !== 'loading' && status === 'authenticated') {
        router.push('/')
    }

  return (
    <div className={styles.container}>
        <div className="inicio">
          <div className="containerInicio">
            <img src="Rick-And-Morty-Logo.png" width="900px" alt="logo"></img>
            <button className="btn btn-primary" onClick={() => signIn('google')}>
                SignIn with Google
            </button>
          </div>
        </div>
    </div>
  )
}