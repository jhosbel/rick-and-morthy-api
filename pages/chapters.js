import Chapters from "../components/Chapters";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import { getSession } from "next-auth/react";

export default function chapters({session}) {
  return (
    <div>
      {session ? (
        <div className={styles.container}>
          <Navbar />
          <Chapters />
        </div>
      ) : (
        <p>Session not found</p>
      )}
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session)
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };

  return {
    props: {
      session,
    },
  };
};
