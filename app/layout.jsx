import React from 'react';
import'@/styles/global.scss';
import Nav from '@/components/modules/Nav/Nav';

const RootLayout = ({children}) => {
  return (
    <html>
      <body>
        <Nav screen={'mobile'}/> 
        <main className='wrapper'>
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout