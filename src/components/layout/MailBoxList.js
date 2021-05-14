import React from "react";
import styled from "styled-components";

// import {SidebarButtons} from "../data/SidebarButtons";
import { useHistory } from 'react-router';
import PeopleIcon from '@material-ui/icons/People';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import WcIcon from '@material-ui/icons/Wc';





function MailBoxList() {
    const history = useHistory();
    return (
        <BoxWrapper>
             <MailBoxWrapper >
                {/* {
             SidebarButtons.map(item =>(
                <IconItems>
                  {item.icon} {item.text}
                </IconItems> 
             ))
            } */}
    

                <IconItems onClick={() => history.push("/beneficiary")}>
                    <PeopleIcon />
                    <h3>Beneficiaries</h3>
                   
                </IconItems>

                <IconItems onClick={() => history.push("/prescription")}>
                
                    <LocalHospitalIcon />
                    <h3>Prescriptions</h3>
                   
                </IconItems>
                
                <IconItems onClick={() => history.push("/referrals")}>
                    <WcIcon />
                    <h3>Referrals</h3>
                </IconItems>
                <IconItems onClick={() => history.push("/claims")}>
                    <HowToRegIcon />
                    <h3>Claims</h3>
                </IconItems>
                <IconItems onClick={() => history.push("/encounters")}>
                    <RecordVoiceOverIcon />
                    <h3>Encounters</h3>
                </IconItems>


            </MailBoxWrapper>



        </BoxWrapper>

    )
}
export default MailBoxList;

const BoxWrapper = styled.div`
border-right: 1px solid lightgray;
height: 100vh;

`

const MailBoxWrapper = styled.div`
margin-top: 30px;

height: 50vh;


 
`

const IconItems = styled.div`
display:flex;
align-items: center;
color: gray;
padding: 5px 25px;
border-radius: 0 100px 100px 0;
cursor: pointer;
margin-right: 8px;
h3{
    font-weight:300;
    padding-left: 1rem;
    font-size: 1rem;
    :hover{
        font-weight:900;
        color: #c04b37;
    }    
}
 
:hover{
    background-color: #fcecec;
    color: #c04b37;
    
}
`
