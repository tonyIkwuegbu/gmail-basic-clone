import React, {useState, useEffect} from "react";
import styled from "styled-components";
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import { Link} from "react-router-dom";
import { Spinner, Table } from 'react-bootstrap';
import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from 'react-router';
import {useDispatch} from "react-redux";
import {setPersonDetails} from "../../store/Actions";
import TablePagination from '@material-ui/core/TablePagination';


function Beneficiary() {
    
const dispatch = useDispatch();
const history = useHistory();
const [person, setPerson] = useState([]);
const [loading, setLoading] = useState(true);
const [search, setSearch] = useState("");
const [page, setPage] = React.useState(2);
const [rowsPerPage, setRowsPerPage] = React.useState(10);

const handleChangePage = (event, newPage) => {
  setPage(newPage);
};

const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(parseInt(event.target.value, 10));
  setPage(0);
};


useEffect(()=> {

getData();
}, []);

const getData = async() => {
        const response = await fetch('https://pshs3.herokuapp.com/bhcpf?query={}&limit=500&skip=0');
        const result = await response.json();
        const item = result.data;
        
        setTimeout (()=> {
            setPerson(item);
           
            setLoading(false);
        }, 2000);
    }
    



return(
<Wrapper>
<TopWrapper>
                    
                    <IconButton onClick={() => history.goBack()}>
                    <ArrowBackIcon/>
                   </IconButton>
                    <IconButton>
                        <RefreshIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </TopWrapper>
                

<MiddleWrapper>
    <h1>BHCPF Beneficiaries: </h1>
    
    <SearchWrapper>
                <SearchBarWrapper>
             <SearchIcon/>
<input type= "text" placeholder= "Filter Records by LGA, Ward & Gender..." value= {search} onChange={(e) => 
 {setSearch(e.target.value)}} />
                      
                </SearchBarWrapper>
            </SearchWrapper>

</MiddleWrapper>



<BottomWrapper>
    {loading ? <h3>beneficiaries list loading...<Spinner animation="border" size="sm" variant="success" /></h3> :
    
    
    <Table cellSpacing="40" cellPadding="20" striped bordered hover  responsive  >
            <thead>
                <tr>
                <th>Enrollment ID</th>
                <th>Name</th>
                <th>Gender</th>
                <th>LGA</th>
                <th>WARD</th>
                </tr>
            </thead>
            <tbody>
        {person.filter((e) => ['lga', 'gender', 'ward']
       .some((property)=> e[property].toLowerCase()
       .includes(search.toLowerCase())))
       .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
       .map(record => (
            <tr key={record.id}>
            <td >{record.enrollment_id}</td>
            
            <td> <Link onClick={() => dispatch(setPersonDetails(record))}>

             {record.full_name}</Link></td>
             <td>{record.gender}</td>
             <td>{record.lga}</td>
             <td> {record.ward} </td>
            </tr>   
              
        ))}
        
</tbody>




</Table>

}


</BottomWrapper>
{ loading ? null : 
<div className= "paginate">

<TablePagination
  component="div"
  count={person.length}
  page={page}
  onChangePage={handleChangePage}
  rowsPerPage={rowsPerPage}
  onChangeRowsPerPage={handleChangeRowsPerPage}
/>
</div>}
</Wrapper>
)}

 export default Beneficiary;

 const Wrapper = styled.div `
 padding :2px;
 border-top: 2px solid whitesmoke;
overflow-y: auto;
 height: 80vh;
 width:  100%;
 h1{
     font-size: 1.5rem;
    margin: 1.5rem;
    text-align: center;
    font-weight: bold;
    font-family: "Ubuntu";
 }
 h3{
     font-size: 1rem;
     padding: 1rem;
     font-style: italic;
 }

 `
 const TopWrapper = styled.div `
 padding-left :20px;
 height:40px;
 `
 const SearchWrapper = styled.div`
margin-left: 50px;
margin-bottom: 20px;
border: 1px solid grey;
border-radius: 6px;
width: 70%;
`
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
    border: none;
    font-size: 15px;
    text-align: center;
    padding: 1rem;

    :focus{
        outline: none;
    }
}

`
const MiddleWrapper = styled.div ``
const BottomWrapper = styled.div `
 background-color: #f3f4ed;
 nav{
     cursor: pointer;
 }
 div{ 
     cursor: pointer;
    
 }
 
 `









