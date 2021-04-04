import React from "react";
import styled from "styled-components";
import Compose from "../buttons/Compose";
// import {SidebarButtons} from "../data/SidebarButtons";
import { useHistory } from 'react-router';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import WatchLaterIcon from '@material-ui/icons/WatchLater';


const MailBoxList = () => {
    const history = useHistory();
    return (
        <BoxWrapper>
        <ComposeWrapper>
        
           <Compose/>
          
        </ComposeWrapper>

        <MailBoxWrapper >
            {/* {
             SidebarButtons.map(item =>(
                <IconItems>
                  {item.icon} {item.text}
                </IconItems> 
             ))
            } */}


    <IconItems onClick={() => history.push("/emailsview")}> 
          <InboxIcon />
              Inbox
        </IconItems> 

        <IconItems onClick={() => history.push("/starredmail")}> 
        <StarIcon/>
        Starred
        </IconItems>
        <IconItems onClick={() => history.push("/snoozemail")}>
       <WatchLaterIcon/>
        Snoozed
       </IconItems>
       <IconItems onClick={() => history.push("/sentmail")}>
       <SendIcon/>
        Sent
      </IconItems>
      <IconItems onClick={() => history.push("/draft")}>
         <InsertDriveFileIcon/>
        Drafts
        </IconItems>
    

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

:visited { 
    color: purple; 
} 
:hover{
    background-color: #dddddd;
}
:active{
    background-color: red;
    color: #ffff
}

`
