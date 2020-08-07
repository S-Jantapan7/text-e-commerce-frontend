import React from "react"
import { useQuery } from '@apollo/react-hooks'
import { useRouter } from "next/router"
import gql from 'graphql-tag'

import apolloClient from '../../apollo/apolloClient'


const QUERY_PRODUCT = gql`
  query QUERY_PRODUCT($id: ID!) {
    product(id: $id) {
      description
      price
      imageUrl
    }
  }
  `
const product = () => {
  const route = useRouter()

  const { data, loading, error } = useQuery(QUERY_PRODUCT, {
    variables: { id: route.query.productId }
  })
  if (error) return <p>Something went wrong, please try again.</p>

  if (loading) return <p>Loading ...</p>
  return (
    <div className="grid">
      <a className="card" >
        <img
          src={data.product.imageUrl}
          alt={data.product.description}
          width="350"
        />
        <h1>{data.product.description}</h1>
        <h3>{data.product.price}</h3>
        <button> Add to Cart </button>
      </a>
    </div>
  )
}

export default apolloClient(product)