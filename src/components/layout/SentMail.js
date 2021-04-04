import React from 'react'
import styled from "styled-components"
import CheckBox from '@material-ui/core/CheckBox';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import {sentData} from "../../temp/SentData"
import EmailItem from "../emailitem/EmailItem"



const SentMail = () => {
    
    return (
            <Wrapper>
                <TopWrapper>
                    <CheckBox/>

                    <IconButton>
                        <RefreshIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </TopWrapper>



                 <EmailsContainer>
                { 
                    sentData.map(({id, starred, from, subject, message, received, read})=>(
                       <EmailItem
                           id = {id}
                           starred = {starred}
                           from = {from}
                           subject = {subject}
                           message = {message}
                           received = {received}
                           read = {read}
                       />
                            
                       
                    ))
                } 
                
   
        </EmailsContainer>
</Wrapper>
        )
    
}

export default SentMail;

 const Wrapper = styled.div `
 
 `
 const TopWrapper = styled.div `
 padding-left :20px;
 height:48px;
 `
 const EmailsContainer = styled.div `
 border-top: 1px solid whitesmoke;
 box-shadow: 0px 4px 4px -2px rgba(0, 0, 0, 0.24);

 `