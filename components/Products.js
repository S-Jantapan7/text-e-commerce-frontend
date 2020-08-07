import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
function Products() {

    return (
        <>
            <section className="products">
                <p>Products</p>
                <div className={styles.grid}>
                <a className={styles.card}>
                        <Link  href=''><img src="/Image 1.png" className="imgproducts"/></Link>
                    
                        <h3>Single Page </h3>
                        <img src="/Icon simple-react.png" className="imgproducts2"/>
                        <img src="/Icon simple-next-js.png" className="imgproducts2"/>
                        <img src="/node-js.png" className="imgproducts2"/>
                    </a>
                    <a className={styles.card}>
                        <Link  href=''><img src="/Image 2.png" className="imgproducts"/></Link>
                        <h3>E-commerce</h3>
                        <img src="/Icon simple-react.png" className="imgproducts2"/>
                        <img src="/Icon simple-next-js.png" className="imgproducts2"/>
                        <img src="/Icon simple-mongodb.png" className="imgproducts2" />
                        <img src="/Icon simple-graphql.png" className="imgproducts2"/>
                        <img src="/apollo.png" className="imgproducts2"/>
                        <img src="/node-js.png" className="imgproducts2"/>
                    </a>
                    <a className={styles.card}>
                        <Link  href=''>
                            <img src="/Image 4.png" className="imgproducts" /></Link>
                        <h3>E-commerce</h3>
                        <img src="/Icon simple-react.png" className="imgproducts2"/>
                        <img src="/Icon simple-next-js.png" className="imgproducts2"/>
                        <img src="/Icon simple-mongodb.png" className="imgproducts2" />
                        <img src="/Icon simple-graphql.png" className="imgproducts2"/>
                        <img src="/apollo.png" className="imgproducts2"/>
                        <img src="/node-js.png" className="imgproducts2"/>
                    </a>
                    <a className={styles.card}>
                        <Link  href=''>
                            <img src="/Image 3.png" className="imgproducts" /></Link>
                        <h3>E-commerce</h3>
                        <img src="/Icon simple-react.png" className="imgproducts2"/>
                        <img src="/Icon simple-next-js.png" className="imgproducts2"/>
                        <img src="/Icon simple-mongodb.png" className="imgproducts2" />
                        <img src="/Icon simple-graphql.png" className="imgproducts2"/>
                        <img src="/apollo.png" className="imgproducts2"/>
                        <img src="/node-js.png" className="imgproducts2"/>
                    </a>
                    <a className={styles.card}>
                        <Link  href=''>
                            <img src="/Image 3.png" className="imgproducts" /></Link>
                        <h3>E-commerce</h3>
                        <img src="/Icon simple-react.png" className="imgproducts2"/>
                        <img src="/Icon simple-next-js.png" className="imgproducts2"/>
                        <img src="/Icon simple-mongodb.png" className="imgproducts2" />
                        <img src="/Icon simple-graphql.png" className="imgproducts2"/>
                        <img src="/apollo.png" className="imgproducts2"/>
                        <img src="/node-js.png" className="imgproducts2"/>
                    </a>
                    <a className={styles.card}>
                        <Link  href=''>
                            <img src="/Image 3.png" className="imgproducts" /></Link>
                        <h3>E-commerce</h3>
                        <img src="/Icon simple-react.png" className="imgproducts2"/>
                        <img src="/Icon simple-next-js.png" className="imgproducts2"/>
                        <img src="/Icon simple-mongodb.png" className="imgproducts2" />
                        <img src="/Icon simple-graphql.png" className="imgproducts2"/>
                        <img src="/apollo.png" className="imgproducts2"/>
                        <img src="/node-js.png" className="imgproducts2"/>
                    </a>
                    
                </div>
            </section>
            <style jsx>{`
                .products{
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    max-width: 100%;
                    margin-top: 100px;    
                    margin-bottom: 100px;

                }
                .products p{
                    margin: 0px 0px 0px 100px;
                    font-family: myriad pro regular;
                    font-size: 30px;
                    line-height: 30px;
                    color:  #000;
                }
                .imgproducts{
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                    height: 10em;
                    width: 15em;
                }
                .imgproducts2{
                    margin: 4px
                }

            `}</style>
        </>
    )
}

export default Products
