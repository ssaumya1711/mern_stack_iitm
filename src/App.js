import './App.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import Users from './Users';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProductList from './Prod';
//import CreateUser from './CreateUser'; {no validation}
//import Edituser from './EditUser'; {no validation}
import { UserProvider } from './userContext';
import Createprod from './create-prod';
import Editprod from './edit-prod';
import MyForm from './Myform';
import { ProdProvider } from './prodContext';
import Userform from './create-user';
import EditUser from './edit-user';
import CreateProdF from './CreateProd';
import EditProdF from './EditProd';


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
                  <ProdProvider>
                   <Route path="/prod" component={ProductList} exact={true}/>
                   <Route path="/create-prod" component={CreateProdF} exact={true}/>
                   <Route path="/myForm" component={MyForm} exact={true}/>
                   <Route path="/prod/edit/:id" component={EditProdF} exact={true}/>
                <UserProvider>
                  <Route path="/users" component={Users} exact={true}/>
                  <Route path="/create-user" component={Userform} exact={true}/>
                  <Route path="/users/edit/:id" component={EditUser} exact={true}/>
                </UserProvider>
                </ProdProvider> 
              </Switch>
          </div>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
