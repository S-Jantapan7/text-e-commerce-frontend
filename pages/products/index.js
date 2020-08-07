import React from 'react'
import Link from 'next/link'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import apolloClient from '../../apollo/apolloClient'
import styles from '../../styles/Products.module.css'

const QUERY_PRODUCTS = gql`
query{
    products {
      id
      description
      price
      imageUrl
    }
  }
  `

function Products() {
  //const result = useQuery(QUERY_PRODUCTS)
  // console.log(result)
  const { data, loading, error } = useQuery(QUERY_PRODUCTS, {
    pollInterval: 3000
  })
  if (error) return <p>Ooobs...something went wrong, please try again later.</p>
  if (loading) return <p>Loading</p>

  return (
    <>
      <section className={styles.products}>
        <p>Products</p>
        <div className={styles.grid}>
          {data.products.map(prod => (
            <a className={styles.card}>
              <Link href='/products/[productId]' as={`/products/${prod.id}`}>
                <img src={prod.imageUrl} alt={prod.description} className={styles.imgproducts}/>
              </Link>
              <h3>{prod.description}</h3>
              <h4>{prod.price}.฿</h4>
              <button>Add to Cart</button>
              <img src="/Icon simple-react.png" className={styles.imgproductsicon} />
              <img src="/Icon simple-next-js.png" className={styles.imgproductsicon}/>
              <img src="/node-js.png" className={styles.imgproductsicon} />
            </a>
          ))}
        </div>
      </section>
      
    </>
  )
}

export default apolloClient(Products)
