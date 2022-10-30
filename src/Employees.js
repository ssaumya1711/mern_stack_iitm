import React, { useContext } from "react";
import { Link } from "react-router-dom";
import EmpContext from "./Employeecontext";

function Employee(){
     const empContext = useContext(EmpContext);
    let handleDelete = (index) => {
        let confirm = window.confirm("Do you want to delete");
        if(confirm)
        {
            empContext.empList.splice(index,1);
            empContext.setEmpList([...empContext.empList]);
        }
    }
    return(
        <div>
            <h1>Employees</h1>
            <Link onClick={() => {window.location.href="/add-emp"}}  className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">Add Employee</Link>
            <div className="table-responsive">
                <table className="table table-bordered table-striped" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Phone</th>
                            <th>Employee Email ID</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            empContext.empList.map((obj,index) => {
                                return(
                                        <tr>
                                            <td>{index+10000}</td>
                                            <td>{obj.fname}</td>
                                            <td>{obj.lname}</td>
                                            <td>{obj.phone}</td>
                                            <td>{obj.email}</td>
                                            <td>
                                                <Link to={`/users/edit/${index+1}`} type="button" className="btn btn-sm btn-primary" style={{marginRight: "2%"}}>Update</Link>
                                                <button onClick={() => {handleDelete(index)}} className="btn btn-sm btn-danger" style={{marginRight: "2%"}}>Delete</button>
                                                <Link to={`/users/view/${index+1}`} className="btn btn-sm btn-primary">View</Link>
                                            </td>
                                        </tr>
                                        )
                            })
                        }
                                       
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Employee