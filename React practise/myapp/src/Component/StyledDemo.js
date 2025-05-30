import React from "react";
import styled from "styled-components";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const StyledDiv=styled.div`
background-color: lightblue;
padding:20px;
border-radius:5px;
text-align:center;
`;

const StyledButton=styled.button`
background-color:blue;
color:white;
padding:10px 20px;
border:none;
border-radius:3px;
cursor:pointer;


&:hover {
background-color:darkblue;
}
`;

const StyledButton2=styled(Button)`
  background-color: #ff6347 !important;  // Tomato color with !important
  color: white !important;
  border-radius: 5px !important;

  &:hover {
    background-color: #e5533d !important; // Darker tomato on hover
  }
`;



const StyleDemo=()=>{

    return(
    <StyledDiv>
        <h2>we are practising styled component</h2>
        <StyledButton>Click me</StyledButton>
        <StyledButton2>Another click me</StyledButton2>
    </StyledDiv>

    )
}

export default StyleDemo