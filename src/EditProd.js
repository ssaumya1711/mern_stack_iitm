import { useFormik } from "formik";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ProdContext from "./prodContext";

function EditProdF(props){
    const prodContext = useContext(ProdContext);
    let history = useHistory();
    let data = prodContext.prodList[props.match.params.id - 1];
    const formik = useFormik({
        initialValues: {
            prodName: data.prodName,
            price: data.price
        },
        validate : (values) => {
            const errors = {};
            if(!values.prodName)
            {
                errors.prodName = "Required";
            }
            else if(values.prodName.length >= 25)
            {
                errors.userName = "Upto 25 characters can only be entered";
            }
            if(!values.price)
            {
                errors.price = "Required";
            }
            return errors;
        },
        onSubmit : (values) => {
            prodContext.prodList[props.match.params.id - 1] = values;
            prodContext.setProdList([...prodContext.prodList]);
            history.push("/prod");
        }
    })
    return(
        <div>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Create Product</h1>
            </div>
            <div className="container">
                <form onSubmit={formik.handleSubmit}>
                    <div className="row">
                        <div className="col-lg-6">
                            <label>Prod Name</label>
                            <input type="text" name="prodName" value={formik.values.prodName} onChange={formik.handleChange} className="form-control"/>
                            {
                                formik.errors.prodName ? <span style={{color:'red'}}>{formik.errors.prodName}</span> : null
                            }
                        </div>
                        <div className="col-lg-6">
                            <label>Price</label>
                            <input type="text" pattern="[0-9]*" name="price" value={formik.values.price} onChange={formik.handleChange} className="form-control"/>
                            {
                                formik.errors.price ? <span style={{color:'red'}}>{formik.errors.price}</span> : null
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

export default EditProdF