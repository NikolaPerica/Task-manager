"use client";
import { useAuth } from "@clerk/nextjs";
import Tasks from "./Components/Tasks/Tasks";
import { useGlobalState } from "./context/globalProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  
  const { tasks } = useGlobalState();
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isSignedIn) {
      router.push("/signin");  // Redirect to Clerk's login page
    }
  }, [isSignedIn, router]);
  return (
      <Tasks title="All tasks" tasks={tasks}/>
  );
}
