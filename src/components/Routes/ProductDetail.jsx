import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import ProductDescription from '../productDetail/ProductDescription'
import ProductImagen from '../productDetail/ProductImagen'

const ProductDetail = () => {
    const [product, setProduct] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
        axios.get(URL)
            .then(res => setProduct(res.data.data.product))
            .catch(err => console.log(err))
    }, [])
 console.log(product)
    return (
        <ProductContainer> 
            {product && <ProductImagen producto={product}/>}
            {product && <ProductDescription product={product} />}
        </ProductContainer>
    )
}

const ProductContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    gap: 60px;
    @media (max-width: 768px){
        flex-direction: column;
    }
`

export default ProductDetail