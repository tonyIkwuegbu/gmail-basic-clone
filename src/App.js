import './App.css';
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import { BrowserRouter as Router} from 'react-router-dom';

function App(){
    return (<Router>
        <div>
        <Header/>

        <Main/>
        
    </div>

 </Router>

    )
}
export default App;