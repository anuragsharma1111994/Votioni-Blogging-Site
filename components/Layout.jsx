import React from 'react'
import { Headers } from '.'

const Layout = ({children}) => {
    return (
        <>
            <Headers/>
            {children}   
        </>
    )
}

export default Layout
