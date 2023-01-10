import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Signup from './component/Signup';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import AddEmployee from './component/AddEmployee';
import Edit from './component/Edit';
import View from './component/View';
import Upload from './component/Upload';
import Chart from "./component/Chart"
import "../src/App.css";


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path="/" element={<Login/>} />
        <Route path="/addemployee" element={<AddEmployee/>} />
        <Route path="/edit/:id" element={<Edit/>} />
        <Route path="/view/:id" element={<View/>} />
        <Route path="/upload" element={<Upload/>} />
        <Route path="/chart" element={<Chart/>} />

      </Routes>
    </Router>
    </>
  );
}

export default App;
