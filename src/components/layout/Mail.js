import React from "react";
import styled from "styled-components"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox"
import ErrorIcon from "@material-ui/icons/Error"
import DeleteIcon from "@material-ui/icons/Delete"
import WatchLaterIcon from "@material-ui/icons/WatchLater"
import CheckCirleIcon from "@material-ui/icons/CheckCircle"
import LabelImportantIcon from "@material-ui/icons/LabelImportant"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import EmailIcon from "@material-ui/icons/Email"
import IconButton from '@material-ui/core/IconButton'
import { useHistory } from 'react-router';


function Mail(){
    const history = useHistory();
    return (
        <Wrapper>
        <TopWrapper>
        <IconButton onClick={() => history.push("/")}>
            <ArrowBackIcon/>
        </IconButton>
        <IconButton>
            <MoveToInboxIcon/>
        </IconButton>
        <IconButton>
            <ErrorIcon/>
        </IconButton>
        <IconButton>
            <DeleteIcon/>
        </IconButton>
        <IconButton>
            <EmailIcon/>
        </IconButton>
        <IconButton>
            <WatchLaterIcon/>
        </IconButton>
        <IconButton>
            <CheckCirleIcon/>
        </IconButton>
        <IconButton>
            <LabelImportantIcon/>
        </IconButton>
        <IconButton>
            <MoreVertIcon/>
        </IconButton>
        </TopWrapper>


<MiddleWrapper>
<h2>Subject <span></span></h2>
<LabelImportantIcon htmlColor = "#ffb037"/>
<p>Title: Reminder</p>

<p>
 Hi Dave,
</p>

<img src="https://image.freepik.com/free-photo/back-view-young-woman-hat-girl-enjoying-beautiful-nature-with-sunset_34168-669.jpg" alt="nature"/>
</MiddleWrapper>
</Wrapper>
    )
}
export default Mail;

const Wrapper = styled.div `

`
const TopWrapper = styled.div `
padding-left :20px;
 height:48px;
`
const MiddleWrapper = styled.div `
 display: flex;
 flex-direction: column;
 margin:30px;
 background-color: #FFFF;
 padding: 20px;
 height: 100vh;
 box-shadow: 0 5px 7px 0 rgba(0, 0, 0, 0.24);
 
 h2 {
     font-weight: 400;
     margin-right: 20px;
 }
 
 p{
     padding:5px;
 }
 img{
     width: 60%;
     margin: auto;
 }
`