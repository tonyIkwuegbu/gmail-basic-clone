import React from "react";
import styled from "styled-components";
import AddIcon from '@material-ui/icons/Add';

const Compose = () => {
    return (
      <Wrapper>
          <AddIcon fontSize = 'large'/>
          <p>Compose</p>
      </Wrapper>

    )
}

export default Compose;

const Wrapper = styled.div `
display: inline-flex;
grid-template-columns: 35% auto;
width: auto;
align-items: center;
padding: 6px 20px 6px 8px;
border-radius: 30px;
box-shadow: 0 2px 5px -2px rgba(0, 0, 0, 0.75); 
cursor: pointer;
color: #3c4043;
font-weight: 500;
font-size: 0.875rem;


  :hover{
      box-shawdow: 0 5px 8px -5px rgba(60 64 67 / 30%);
  }
`