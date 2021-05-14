import React from "react";
import styled from "styled-components";
import MailBoxList from './MailBoxList';
import { Route, Switch} from 'react-router-dom';
import Mail from "./Mail"
import Claims from "./Claims";
import Referrals from "./Referrals";
import Prescription from "./Prescription";
import Encounters from "./Encounters";
import Home from "./Home";
import Beneficiary from "./Beneficiary";
import Persondetail from "./Persondetail";



function Main(){
     return(
        
         <Wrapper>
         
        <MailBoxList/>
        
<Switch>
<Route exact path="/"  component={Home}/>
<Route exact path="/claims/mail"  component = {Mail}/>  
 <Route exact path="/claims"  component = {Claims}/>  

 <Route exact path="/referrals"  component= {Referrals}/>
 <Route exact path="/referrals/mail"  component= {Mail}/>

 <Route exact path="/prescription"  component= {Prescription}/> 
 <Route exact path="/prescription/mail"  component= {Mail}/>  

 <Route exact path="/encounters"  component = {Encounters}/>
 <Route exact path="/encounters/mail"  component = {Mail}/>

 
 <Route exact path="/beneficiary"  component={ Beneficiary }/>

</Switch>

<Persondetail/>

</Wrapper>
 
    )
}


export default Main;

const Wrapper = styled.div`
display: grid;
grid-template-columns: 230px 650px 300px;
position : fixed;    

`
