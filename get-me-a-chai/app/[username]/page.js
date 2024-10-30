"use client"
import React from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
const Username = ({params}) => {
  const { data: session } = useSession()



  if (!session) {
      const router = useRouter();
      router.push("/login");
  }


  return (
    <div className='text-white'>{params.username}</div>
  )
}

export default Username