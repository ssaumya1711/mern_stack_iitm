import './App.css';
import Employee from './Employees';
import Addemp from './Addemployee';
import { EmpProvider } from './Employeecontext';

import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import EditEmp from './EditEmp';
import ViewEmp from './Viewemp';


function App() {
  return (
    <Router>
    <div id="wrapper">
      <Sidebar></Sidebar>
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Topbar></Topbar>
          <div class="container-fluid">
              <Switch>
                  <Route path="/" component={Dashboard} exact={true}/>
                <EmpProvider>
                  <Route path="/emp" component={Employee} exact={true}/>
                  <Route path="/add-emp" component={Addemp} exact={true}/>
                  <Route path="/users/edit/:id" component={EditEmp} exact={true}/>
                  <Route path="/users/view/:id" component={ViewEmp} exact={true}/>
                </EmpProvider>
              </Switch>
          </div>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
