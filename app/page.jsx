import Nav from '@/component/modules/Nav/Nav'
import { cookies } from 'next/headers'
import React from 'react'

const Home = async () => {
  let username = cookies().get('username')?.value;
  return (
    <>
      <Nav dynamicLink={username}/>
    </>
  )
}

export default Home