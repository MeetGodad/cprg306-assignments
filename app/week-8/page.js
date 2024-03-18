"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  


  return (
    <div>
      {user  
      ? (
        <>
          <h1>Welcome, {user?.displayName}</h1>
          <p>Your email is {user?.email}</p>
          <button onClick={firebaseSignOut}>Sign Out</button>
          <Link href="./week-8/shoping-list" className="flex">Go to Shopping List</Link>
        </>
      ) : (
        <button className="text-xl m-8" onClick={gitHubSignIn}>Sign In with GitHub</button>
      )}
    </div>
  );
}