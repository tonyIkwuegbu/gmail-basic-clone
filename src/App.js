import './App.css';
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./store/Store";
import {Provider} from "react-redux"; 

function App(){
    return (<BrowserRouter basename ="/bhcpf">
    <Provider store = {store} >

        <Header/>

        <Main/>
        

</Provider>
 </BrowserRouter>

    );
}
export default App;

