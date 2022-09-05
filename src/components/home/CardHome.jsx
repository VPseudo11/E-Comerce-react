import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const CardHome = ({ product }) => {
    const navigate = useNavigate()

    const handleClick = () =>{
        navigate(`/product/${product.id}`)
    }
    return (
        <CardContainer onClick={handleClick}>
            <HeaderProduct>
                <img src={product.productImgs[0]} alt="" />
            </HeaderProduct>
            <h1>{product.title}</h1>
            <ProductDetails>
                <PriceDetails>
                    <label>Price:</label>
                    <p>$ {product.price}</p>
                </PriceDetails>
                <button><i className="fa-solid fa-cart-plus"></i></button>
            </ProductDetails>
        </CardContainer>
    )
}

const CardContainer = styled.article`
    border: 1px solid rgba(0, 0, 0, .1);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 350px;
    transition: all .5s ease;

    &>h1 {
        width: 90%;
        font-size: 1rem;
        margin-top: 5px;
    }
    &:hover{
        transform: scale(1.1);
        transition: all .5s ease;
    }
`

const HeaderProduct = styled.header`
    border-bottom: 1px solid rgba(0, 0, 0, .3);
    &>img{
        width: 275px;
        height: 200px;
        object-fit: contain;
    }
`
const ProductDetails = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 15px 0 25px 0;
    &>button{
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 1.2rem;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: rgba(244, 112, 83, 1);
        border: none;
        filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, .3));
        cursor: pointer;
    }
`

const PriceDetails = styled.div`
    &>label{
        font-size: 1rem;
        font-weight: 600;
        color: rgba(0, 0, 0, .3)
    }

    &>p{
        font-size: 1.2rem;
        font-weight: 600;
        padding-left: 5px;
    }
`
export default CardHome