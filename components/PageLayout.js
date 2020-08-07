import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar/Navbar'

const PageLayout = ({children}) =>{
    return (
        <div>
            <Head>
                <title>Logax</title>
                <link rel="icon" href="/Sback.png" />
            </Head>
            <Navbar/>
            
            {children}
        </div>
    )
}

export default PageLayout