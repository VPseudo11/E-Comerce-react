import React from 'react'
import styled from 'styled-components'

import ArrowLefth from './../../assets/arrow-left.svg'
import ArrowRigth from './../../assets/arrow-rigth.svg'


const ProductImagen = ({ producto }) => {
    return (
        <ImagenContainer>
            <SlideContainer>
                <ArrowButton>
                    <img src={ArrowLefth} alt="" />
                </ArrowButton>
                <img src={producto.productImgs[0]} alt="" />
                <ArrowButton>
                    <img src={ArrowRigth} alt="" />
                </ArrowButton>
            </SlideContainer>

            <ImgsContainer>
                {
                    producto.productImgs.map(item => (
                        <ImgCont key={item}>
                            <img src={item} alt="" />
                        </ImgCont>
                    ))
                }
            </ImgsContainer>
        </ImagenContainer>
    )
}
const ArrowButton = styled.button`
    width: 40px;
    height: 40px;
    background: transparent;
    border-radius: 50%;
    cursor: pointer;
    border: none;
    &:hover{
        transform: scale(1.1);
        transition: all .3s ease;
        
    }
`
const ImagenContainer = styled.div`
width: 600px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const SlideContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    &>img{
    width:300px;
    height: 350px;
    object-fit: contain;
    transition: all .3s ease;
    }
    &:hover{
        transform: scale(1.1);
        transition: all .3s ease;
    }
`

const ImgsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
`

const ImgCont = styled.div`
    border:2px solid rgba(0,0,0,.3);
    padding: 5px;
    transition: all .3s ease;
    &:hover{
            transform: scale(1.1);
        transition: all .3s ease;
        }
    &>img{
        width: 75px;
        height: 75px;
        object-fit: contain;
 
    }
`
export default ProductImagen
