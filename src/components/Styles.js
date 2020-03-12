import styled from "styled-components";

export const InputAndResults = styled.div`
    display: flex; 
    flex-direction: column;
    width: 420px; 
    margin: 0 auto;
`

export const InputContainer = styled.div`
    display:flex;
    justify-content: center;
    margin-top: 60px;
`
export const Input = styled.input`
    width: 240px; 
    border: 1px solid lightgrey;
    border-radius: 5px; 
    height: 35px; 
    margin-right: 20px; 
    font-size: 16px; 
    color: darkgrey;

`

export const Button = styled.button`
    width: 75px; 
    background-color: darkblue; 
    color:lightgray;
    border-radius: 5px; 
    font-size: 15px; 
`

export const List = styled.ul`
    margin-top: 16px;
    width: 85%; 
    box-shadow: 2px 2px 16px -8px rgba(0,0,0,0.35);
    text-align: left;

    li{
        list-style: none;
        width: 85%;
        padding: 10px 12px; 
        margin: 5px;
        cursor: pointer;
        text-transform: capitalize;
        font-family: "Montserrat";

        /* &:first-of-type {
            background-color: #FEFBE6;
        } */
    }
    
`
export const Prediction = styled.span`
    font-weight: 700;
`


export const Category = styled.p`
    font-style: italic;
    color: purple;
    text-transform: capitalize;
    font-size: 13px; 

    span {
        text-transform: lowercase;
        font-weight: 500;
        color: black;
    }
`