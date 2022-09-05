import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductDescription from '../productDetail/ProductDescription'

const ProductDetail = () => {
    const [product, setProduct] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
        axios.get(URL)
            .then(res => setProduct(res.data.data.product))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            {product && <ProductDescription product={product} />}
        </div>
    )
}

export default ProductDetail