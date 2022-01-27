import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ProdContext from "./prodContext";


function EditProd(props){
    const [prodName, setProd] = useState("");
    const [price, setPrice] = useState("");
    const prodContext = useContext(ProdContext);
    let history = useHistory();

    useEffect(() => {
        let data = prodContext.prodList[props.match.params.id - 1];
        setProd(data.prodName);
        setPrice(data.price);
    },[])
    
    let handleSubmit = (e) => {
        e.preventDefault();
        let data = {prodName,price};
        console.log(data);
        prodContext.prodList[props.match.params.id - 1] = data;
        prodContext.setProdList([...prodContext.prodList]);
        history.push("/prod");
    }
    return(
        <div>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Edit Product</h1>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-lg-6">
                            <label>Product Name</label>
                            <input type="text" value={prodName} onChange={(e) => {setProd(e.target.value)}} className="form-control"/>
                        </div>
                        <div className="col-lg-6">
                            <label>Price</label>
                            <input type="text" value={price} onChange={(e) => {setPrice(e.target.value)}} className="form-control"/>
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

export default EditProd