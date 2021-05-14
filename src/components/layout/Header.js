import React from "react";
import styled from 'styled-components'
// import MenuIcon from '@material-ui/icons/Menu';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton'
import Img from "../../img/img.jpg"




function Header(){
    return (
        <Wrapper>
            <LogoWrapper>
        
            <Menu>
           
            <h3>Plateau State BHCPF Portal</h3>
            </Menu>
            <Logo>
             <img src= {Img} alt="logo"/> 
            
            </Logo>
            </LogoWrapper>

            
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
grid-template-columns: auto  350px;
border-bottom: 1px solid lightgray;
height: 100px;
align-items:center;


`

const LogoWrapper = styled.div`
height: 100px;
display: grid;
grid-template-columns: 30% auto  ;

img{
    
    height: 200%;
    padding-top: 1rem;
    padding-right: 20rem;
    
}
`
const Menu = styled.div `
   display:grid;
   place-items:center;

   h3{
       font-size: 1.3rem;
       font-family: 'Ubuntu', "san-serif";
       font-weight: bold;
       padding-right: 1rem;
       padding-top: 1rem;
   }
`
const Logo = styled.div `
     display: flex;
     height: 48px;

`



const IconsWrapper = styled.div`
 
 display: grid;
 grid-template-columns: repeat(4, auto);

 .MuiSvgIcon-root{
     color: #5F6368;
 }
`
