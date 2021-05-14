import React from 'react'
import styled from "styled-components"
import CheckBox from '@material-ui/core/CheckBox';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import {emailData} from "../../temp/EmailData"
import EmailItem from "../emailitem/EmailItem"



const Home = () => {
    
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
                    emailData.map(({id, starred, from, subject, message, received, read})=>(
                       <EmailItem
                           key = {id}
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

export default Home;

 const Wrapper = styled.div `
 height: 50vh;
 
 `
 const TopWrapper = styled.div `
 padding-left :20px;
 height:48px;
 `
 const EmailsContainer = styled.div `
 border-top: 1px solid whitesmoke;
 box-shadow: 0px 4px 4px -2px rgba(0, 0, 0, 0.24);

 `