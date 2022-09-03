import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../store/slices/products.slice'

const Home = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.productsSlice)
    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

console.log(products);
    return (
        <div>
            {
                products?.map(item => (
                    <img key={item.productImgs[0]} src={item.productImgs[0]} alt="" />
                ))
            }
        </div>
    )
}

export default Home