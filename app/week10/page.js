import React from 'react';
import { useUserAuth } from './_utils/auth-context';
import Layout from './layout'; 

const Page = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

 
  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error signing in with GitHub: ", error);
    }
  };


  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <Layout>
      <div>
        {user ? (
          <div>
            <p>Welcome, {user.displayName} ({user.email})</p>
            <button onClick={handleSignOut}>Logout</button>
          </div>
        ) : (
          <button onClick={handleSignIn}>Login with GitHub</button>
        )}
      </div>
    </Layout>
  );
};

export default Page;