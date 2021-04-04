import React from "react";
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton'



function Header(){
    return (
        <Wrapper>
            <LogoWrapper>
            <Menu>
            <IconButton>
                 <MenuIcon/>
            </IconButton>
            </Menu>
            <Logo>
              
            <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png" alt= "logoImg" />
            </Logo>
            </LogoWrapper>

            <SearchWrapper>
                <SearchBarWrapper>
                     <SearchIcon/>
                     <input type='text' placeholder='search mail'/>
                      <ExpandMoreIcon/>
                </SearchBarWrapper>
            </SearchWrapper>

          <IconsWrapper>
             <IconButton>
              <HelpOutlineIcon/>
              </IconButton>
              <IconButton>
               <SettingsIcon/>
               </IconButton>
               <IconButton>
               <AppsIcon/>
               </IconButton>
               <IconButton>
               <AccountCircleIcon/>
               </IconButton>
          
               
          </IconsWrapper>

        </Wrapper>
    )
}

export default Header;

const Wrapper = styled.div `
display: grid;
grid-template-columns: 270px auto 190px;
border-bottom: 1px solid lightgray;
height: 70px;
align-items:center;
`

const LogoWrapper = styled.div`
height: 45px;
display: grid;
grid-template-columns:  25% auto;
`
const Menu = styled.div `
   display:grid;
   place-items:center;
`
const Logo = styled.div `
     display: flex;
     height: 45px;

`

const SearchWrapper = styled.div``

const SearchBarWrapper = styled.div`
 background-color: #F1F3F4;
 width: 100%;
 max-width: 750px;
 display: grid;
 grid-template-columns: 10% auto 7%;
 place-items:center;
 border-radius: 6px;
 
.MuiSvgIcon-root{
    color:#5f6368;
}
input {
    width:100%;
    height:30px;
    background:transparent;
    border:none;
    font-size:18px;

    :focus{
        outline: none;
    }
}
`

const IconsWrapper = styled.div`
 margin-left: 2px;
 display: grid;
 grid-template-columns: repeat(4, auto);

 .MuiSvgIcon-root{
     color: #5F6368;
 }
`
