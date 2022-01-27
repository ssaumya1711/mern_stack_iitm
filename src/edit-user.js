import { useFormik } from "formik";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import UserContext from "./userContext";

function EditUser(props){
    const userContext = useContext(UserContext);
    let history = useHistory();
    let data = userContext.userList[props.match.params.id - 1];
    const formik = useFormik({
        initialValues: {
            userName: data.userName,
            position: data.position,
            office: data.office,
            age: data.age,
            startDate: data.startDate,
            salary: data.salary
        },
        validate : (values) => {
            const errors = {};
            if(!values.userName)
            {
                errors.userName = "Required";
            }
            else if(values.userName.length >= 25)
            {
                errors.userName = "Upto 25 characters can only be entered";
            }
            if(!values.position)
            {
                errors.position = "Required";
            }
            if(!values.office)
            {
                errors.office = "Required";
            }
            if(!values.salary)
            {
                errors.salary = "Required";
            }
            if(!values.age)
            {
                errors.age = "Required";
            }
            else if(!(values.age >= 18 && values.age <= 60))
            {
                errors.age = "Please enter between 18 to 60";
            }
            return errors;
        },
        onSubmit : (values) => {
            userContext.userList[props.match.params.id - 1] = values;
            userContext.setUserList([...userContext.userList]);
            history.push("/users");
        }
    })
    return(
        <div>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Create User</h1>
            </div>
            <div className="container">
                <form onSubmit={formik.handleSubmit}>
                    <div className="row">
                        <div className="col-lg-6">
                            <label>User Name</label>
                            <input type="text" name="userName" value={formik.values.userName} onChange={formik.handleChange} className="form-control"/>
                            {
                                formik.errors.userName ? <span style={{color:'red'}}>{formik.errors.userName}</span> : null
                            }
                        </div>
                        <div className="col-lg-6">
                            <label>Position</label>
                            <input type="text" name="position" value={formik.values.position} onChange={formik.handleChange} className="form-control"/>
                            {
                                formik.errors.position ? <span style={{color:'red'}}>{formik.errors.position}</span> : null
                            }
                        </div>
                        <div className="col-lg-6">
                            <label>Office</label>
                            <input type="text"  name="office" value={formik.values.office} onChange={formik.handleChange} className="form-control"/>
                            {
                                formik.errors.office ? <span style={{color:'red'}}>{formik.errors.office}</span> : null
                            }
                        </div>
                        <div className="col-lg-6">
                            <label>Age</label>
                            <input type="text"  name="age" value={formik.values.age} onChange={formik.handleChange} className="form-control"/>
                            {
                                formik.errors.age ? <span style={{color:'red'}}>{formik.errors.age}</span> : null
                            }
                        </div>
                        <div className="col-lg-6">
                            <label>StartDate</label>
                            <input type="date"  name="startDate" value={formik.values.startDate} onChange={formik.handleChange} className="form-control"/>
                        </div>
                        <div className="col-lg-6">
                            <label>Salary</label>
                            <input type="text" pattern="[0-9]*" name="salary" value={formik.values.salary} onChange={formik.handleChange} className="form-control"/>
                            {
                                formik.errors.salary ? <span style={{color:'red'}}>{formik.errors.salary}</span> : null
                            }
                        </div>
                        <div className="col-lg-12">
                            <button type="submit" className="btn btn-primary mt-3">Update</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditUser