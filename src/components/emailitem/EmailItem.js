import React, { useState } from 'react'
import styled from "styled-components"
import Checkbox from '@material-ui/core/Checkbox'
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import IconButton from '@material-ui/core/IconButton'

import { Link, Route, Switch, useRouteMatch} from "react-router-dom";
import Mail from "../layout/Mail";

const EmailItem = ({starred, from, subject, message, received, read}) => {
   
   const [star, setStar] = useState(starred);
  const {path, url } = useRouteMatch();
   
    return (
    
        <Wrapper>
        
             <Checkbox/>
             
             <IconButton onClick = {() => star ? setStar(false): setStar(true)}>
                 { star ? <StarIcon htmlColor = "#f7cb69"/> : <StarBorderIcon/>}
             </IconButton>

            
             
             <p className = {!read && 'unread'} >{from}</p>
        <Link to={`${url}/mail`}>
         <div>
            <p className = {!read && 'unread'}>{subject}</p> - <span>{message}</span>
        </div>
        </Link>
             <p className = {!read && 'unread'}>{received}</p>
     
             
<Switch>
    <Route path ={`${path}/mail`} component = {Mail} />
</Switch>


    </Wrapper>

    )
}

export default EmailItem;

const Wrapper = styled.div `
padding-left: 20px;
 border-top: 1px solid lightgray;
 border-right: 1px solid lightgray;
 display: grid;
 grid-template-columns: min-content min-content 90px auto 100px;
 align-items: center;
 cursor: pointer;
 p{
    font-size: 15px;
    padding-top: 12px;
    
}
 div{
display: flex;
align-items: center;
font-size: 15px;
text-overflow: ellipsis;
width: 400px;
 p{
    padding-right: 10px;
    padding-top: 14px;
}
span{
    color: darkgray;
    padding-left: 10px;
    
}
.unread{
    color:black;
    font-weight:bolder;
}
 }
`