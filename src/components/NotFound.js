import React from 'react'
import Layout from './shared/Layout'

const NotFound = () => {

    const style = {
        fontWeigth: 'bold',
        textAlign: 'center',
    }
    return (
        <div>
            <Layout>
                <p style={style}>Oops!! Unfortunately, we cant find that page!</p>
            </Layout>
            
        </div>
    )
}

export default NotFound
