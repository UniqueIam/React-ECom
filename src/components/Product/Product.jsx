import React from 'react'
import { useParams } from 'react-router-dom'

function Product() {
  const {productid } = useParams();
  return (
    <>
        Product:{productid}
    </>
  )
}

export default Product
