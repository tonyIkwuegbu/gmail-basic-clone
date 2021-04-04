import React from "react";
import styled from "styled-components";
import EmailsView from './EmailsView';
import MailBoxList from './MailBoxList';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Mail from "./Mail"
import Draft from "../layout/Draft";
import StarredMail from "./StarredMail";
import SnoozeMail from "./SnoozeMail"
import SentMail from "./SentMail"

function Main(){
    return(<Router>
        <Wrapper>
        <MailBoxList/>
          
<Switch>
<Route path="/sentmail">
    <SentMail />
    
    </Route>
<Route path="/snoozemail">
    <SnoozeMail />
    
    </Route>
<Route path="/starredmail">
    <StarredMail />
    
    </Route>
<Route path="/draft">
    <Draft />
    
    </Route>
    <Route path="/mail">
    <Mail/>

    </Route>
    <Route path="/">
    <EmailsView/>
    
    </Route>
    
</Switch>
    
        </Wrapper>
 </Router>
    )
}

export default Main;

const Wrapper = styled.div`
        display: grid;
        grid-template-columns: 270px auto 50px; 

`
