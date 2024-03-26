"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, googleSignIn  ,  gitHubSignIn, firebaseSignOut } = useUserAuth();

  


  return (
    <div>
      {user  
      ? (
        <>
          <h1>Welcome, {user?.displayName}</h1>
          <p>Your email is {user?.email}</p>
          <button onClick={firebaseSignOut}>Sign Out</button>
          <Link href="./week-10/shoping-list" className="flex">Go to Shopping List</Link>
        </>
      ) : (
        <div>
          <button className=" flex-row text-xl m-8" onClick={googleSignIn}>Sign In with Google</button>
          <button className=" flex-row text-xl m-8" onClick={gitHubSignIn}>Sign In with GitHub</button>
        </div>
      )}
    </div>
  );
}