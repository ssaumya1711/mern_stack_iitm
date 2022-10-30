import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import EmpContext from "./Employeecontext";

function EditEmp(props){
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setContact] = useState();
    const empContext = useContext(EmpContext);
    let history = useHistory();

    useEffect(() => {
        let data = empContext.empList[props.match.params.id - 1];
        setFname(data.fname);
        setLname(data.lname);
        setEmail(data.email);
        setContact(data.phone);
    },[])
    
    let handleSubmit = (e) => {
        e.preventDefault();
        let data = {fname,lname,email,phone};
        console.log(data);
        empContext.empList[props.match.params.id - 1] = data;
        empContext.setEmpList([...empContext.empList]);
        history.push("/emp");
    }
    return(
        <div>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Edit User</h1>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-lg-6">
                            <label>First Name</label>
                            <input type="text" value={fname} onChange={(e) => {setFname(e.target.value)}} className="form-control"/>
                        </div>
                        <div className="col-lg-6">
                            <label>Last Name</label>
                            <input type="text" value={lname} onChange={(e) => {setLname(e.target.value)}} className="form-control"/>
                        </div>
                        <div className="col-lg-6">
                            <label>Email</label>
                            <input type="text" value={email} onChange={(e) => {setEmail(e.target.value)}} className="form-control"/>
                        </div>
                        <div className="col-lg-6">
                            <label>Phone</label>
                            <input type="text" value={phone} onChange={(e) => {setContact(e.target.value)}} className="form-control"/>
                        </div>
                        <div className="col-lg-12">
                            <input type="submit" value="Update" className="btn btn-primary mt-3"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditEmp