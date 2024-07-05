import React from 'react'

const AuthLayout = ({children}) => {
  return (
    <>
        <nav></nav>
        <main>
            {children}
        </main>
    </>
  )
}

export default AuthLayout