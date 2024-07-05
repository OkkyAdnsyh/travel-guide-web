import React from 'react';
import '@/styles/global.scss';

export const metadata = {
    title: 'Home - Wonderful Travel Guide',
    description: 'An Indonesian travel guide for travellers around the world'
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            {children}
        </body>
    </html>
  )
}

export default RootLayout