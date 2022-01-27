import { useFormik } from "formik";
import React from "react";

function MyForm(){
    const formik = useFormik({
        initialValues: {
            username: "",
            age: ""
        },
        validate : (values) => {
            const errors = {};
            if(!values.username)
            {
                errors.username = "Required";
            }
            if(!values.age)
            {
                errors.age = "Required";
            }
            else if(values.age > 60)
            {
                errors.age = "Please enter between 18 to 60";
            }
            return errors;
        },
        onSubmit : (values) => {
            console.log(values)
        }
    })
    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label>Name</label>
                <input name="username" value={formik.values.username} onChange={formik.handleChange}/>
                {
                    formik.errors.username ? <span style={{color:'red'}}>Required</span> : null
                }
                <br/>
                <label>Age</label>
                <input name="age" value={formik.values.age} onChange={formik.handleChange}/>
                {
                    formik.errors.age ? <span style={{color:'red'}}>{formik.errors.age}</span> : null
                }
                <button type="submit">Submit</button>
            </form>      
        </div>
    )
}

export default MyForm