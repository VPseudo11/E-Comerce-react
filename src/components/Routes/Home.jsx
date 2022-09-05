import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getAllProducts } from '../../store/slices/products.slice'
import CardHome from '../home/CardHome'

const Home = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.productsSlice)
    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    return (
        <div>
            <CardsProductsContainer>
                {
                    products?.map(item => (
                        <CardHome
                            key={item.id}
                            product={item}
                        />
                    ))
                }
            </CardsProductsContainer>
        </div>
    )
}

const CardsProductsContainer = styled.section`
    border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    padding: 25px 0;
`
export default Home