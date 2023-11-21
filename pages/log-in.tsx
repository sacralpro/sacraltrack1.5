import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from '../components/footer';
import SacralTrackMenu from '../components/sacral-track-menu';
import LogRegForm from '../components/log-reg-form';
import styles from './log-in.module.css';
// import { FirebaseAuthProvider, FirebaseAuthConsumer } from '@react-firebase/auth';
// import { FirebaseUIAuth } from 'react-firebaseui';



const LogIn: NextPage = () => {
  const router = useRouter();
  // ...

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className={styles.sacralTrack}>
        <SacralTrackMenu />
        <div className={styles.logRegForm}>
          <LogRegForm />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LogIn;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};