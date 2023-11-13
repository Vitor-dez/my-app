
import styled from 'styled-components'
import Backgraund from '../../assets/bg image.svg';




export const Container = styled.div`
height: 100vh;
background: url("${Backgraund}");
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;
`;

export const Image = styled.img`
margin-top:30px ;
`;


export const ContainerItens = styled.div`
height: 100vh;
padding: 50px 36px;
backdrop-filter: blur(45px);
display: flex;
flex-direction: column;

border-radius: 61px 61px 0px 0px;
background: linear-gradient(157deg, rgba(255, 255, 255, 0.60) 0.84%,
 rgba(255, 255, 255, 0.60) 0.85%, rgba(255, 255, 255, 0.15) 100%);
`;

export const H1 = styled.h1`

color: #FFF;

text-align: center;
font-size: 34px;
font-style: normal;
font-weight: 700;


`;



export const Button = styled.button`
width: 342px;
height: 74px;
margin-top: 120px;
border-radius: 14px;
background: transparent;


color: #FFF;
font-size: 17px;
font-style: normal;
font-weight: 700;
line-height: 28px;
cursor: pointer;

display: flex;
align-items: center;
justify-content: center;
gap: 20px;
border: 0.5px solid #FFF;

&:hover{
    opacity: 0.8;
}

&:active{
    opacity: 0.4;
}


img{
    transform: rotateY(180deg);
}

`;


export const User = styled.li`
display: flex;
justify-content: space-around;
align-items: center;

width: 342px;
height: 58px;
border: none;
outline: none;
padding: 25px;
border-radius: 14px;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
margin-top: 20px;

p{
    font-style:normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    color: #ffff;
}

button{
background: none;
border: none;
cursor: pointer;

}






`;
