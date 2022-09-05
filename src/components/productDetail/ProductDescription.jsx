import React from 'react'
import styled from 'styled-components'

const ProductDescription = ({ product }) => {
    return (
        <ProductDescriptionContainer>
            <h1>{product.title}</h1>
            <BodyProductDescription>
                <p>{product.description}</p>
                <PurchaseSection>
                    <PurchaseDiv>
                        <PriceDiv>
                            <label>Price</label>
                            <p>$ {product.price}</p>
                        </PriceDiv>
                        <AddButtonsDiv>
                            <button>-</button>
                            <p>1</p>
                            <button>+</button>
                        </AddButtonsDiv>
                    </PurchaseDiv>
                    <button>Add to cart <i className="fa-solid fa-cart-arrow-down"></i></button>
                </PurchaseSection>
            </BodyProductDescription>
        </ProductDescriptionContainer>
    )
}
const ProductDescriptionContainer = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    &>h1{
        width: 90%;
        padding-left: 15px;
        margin: 15px 0;
        font-size: 1.5rem;
        color: rgba(0, 0, 0, .6);
        filter: drop-shadow(2px 2px 1px rgba(0, 0, 0, .6));
    }
`

const BodyProductDescription = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 15px 0 ;
    &>p{
        margin: 15px 0;
        width: 90%;
        text-align: justify;
        font-size: 1rem;
        color: rgba(0, 0, 0, .6)
    }

    @media (max-width: 768px){
        flex-direction: column-reverse;
    }
`

const PurchaseSection = styled.section`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    &>button{
        width: 100%;
        padding: 12px 0;
        border: none;
        background: rgba(248, 85, 85, 1);
        color: white;
        font-size: 1rem;
        margin: 15px 0;
    }
`

const PurchaseDiv = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const PriceDiv = styled.div`
    margin: 0 15px;

    &>label{
        color: rgba(0, 0, 0, .3);
        font-size: 1rem;
        font-weight: bold;
    }

    &>p{
        font-size: 1.2rem;
        font-weight: bold;
        color: rgba(0, 0, 0, .6);
        margin: 5px 0 0 5px;
    }
`

const AddButtonsDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    &>button{
        width: 30px;
        height: 25px;
        font-size: 1.5rem;
        text-align: center;
        line-height: 90%;
        background: transparent;
        color: rgba(0, 0, 0, .6);
        border: 1px solid rgba(0, 0, 0, .6);
        cursor: pointer;
    }

    &>p{
        font-size: .9rem;
        border: 1px solid rgba(0, 0, 0, .6);
        padding: 2px 15px;
    }
`

export default ProductDescription