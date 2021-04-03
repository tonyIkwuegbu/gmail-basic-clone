import React from "react";
import styled from "styled-components";
import Compose from "../buttons/Compose";
import {SidebarButtons} from "../data/SidebarButtons";
import { useHistory } from 'react-router';


const MailBoxList = () => {
    const history = useHistory();
    return (
        <BoxWrapper>
        <ComposeWrapper>
        
           <Compose/>
          
        </ComposeWrapper>

        <MailBoxWrapper onClick={() => history.push("/emailsview")}>
            {
             SidebarButtons.map(item =>(
                <IconItems>
                  {item.icon} {item.text}
                </IconItems> 
             ))
            }
        </MailBoxWrapper>



        </BoxWrapper>

    )
}
export default MailBoxList;

const BoxWrapper = styled.div `
border-right: 1px solid lightgray;
height: 100vh;
`
const ComposeWrapper = styled.div `
display:grid;
place-items: start;
padding: 10px 20px;
`
const MailBoxWrapper = styled.div ``

const IconItems = styled.div `
display:flex;
align-items: center;
color: gray;
padding: 5px 25px;
border-radius: 0 100px 100px 0;
cursor: pointer;
margin-right: 8px;

:hover{
    background-color: #dddddd;
}
`
