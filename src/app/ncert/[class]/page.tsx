'use client'
import authFetch from "@/lib/auth/authFetch";
import { get, METHODS } from "http";
import { use, useEffect, useState } from "react";

export default function page() {
  const [user, setUser] = useState<any>()
  const [subs, setSubs] = useState(null)
  const [chapter, setChapters]= useState(null)
  const getUser = async()=>{
   const url = '/api/user/getUser'
   const options = {
    method: 'GET'
   }
    const user = await authFetch({url, options })
    setUser(user)
  }

  const call = async()=>(
    await getUser())
  
  useEffect(()=>{
    call()
  }, [])

  console.log(user)
  

  return <div className="bg-background min-h-screen p-8">
    <div>
      <p className="text-[12px] text-primary/70 font-semibold">ACADEMIC YEAR 2024-25</p>
      <p className="text-3xl font-bold">Subject Catalog</p>
      <p className="mt-2 pl-4 pr-4 bg-primary w-max text-white font-medium text-[12px] uppercase">{`class 
        ${user?.user?.class || ''}`}
      </p>


    </div>
  </div>;
}
