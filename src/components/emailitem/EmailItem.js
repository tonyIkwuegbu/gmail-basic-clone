import React, { useState } from 'react'
import styled from "styled-components"
import Checkbox from '@material-ui/core/Checkbox'
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import IconButton from '@material-ui/core/IconButton'
import { useHistory } from 'react-router';

const EmailItem = ({starred, from, subject, message, received, read}) => {
   
   const [star, setStar] = useState(starred);
   const history = useHistory();
    return (
    
        <Wrapper>
        
             <Checkbox/>
             
             <IconButton onClick = {() => star ? setStar(false): setStar(true)}>
                 { star ? <StarIcon htmlColor = '#f7cb69'/> : <StarBorderIcon/>}
             </IconButton>
             
             <p className = {!read && 'unread'} onClick ={() => history.push("/mail")}>{from}</p>
             <div onClick ={() => history.push("/mail")}>
                 <p className = {!read && 'unread'}>{subject}</p>  - <span>{message}</span>
             </div>
             <p className = {!read && 'unread'}>{received}</p>



        </Wrapper>

    )
}

export default EmailItem;

const Wrapper = styled.div `
padding-left: 20px;
 border-top: 1px solid lightgray;
 display: grid;
 grid-template-columns: min-content min-content 120px auto 50px;
 align-items: center;
 cursor: pointer;
 padding-right:20px;

 div{
display: flex;
align-items: center;
font-size: 18px;

text-overflow: ellipsis;
width: 400px;

span{
    color: darkgray;
}
.unread{
    color:black;
    font-weight:bolder;
}
 }
`
