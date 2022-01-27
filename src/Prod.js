import React, { useContext } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import ProdContext from "./prodContext";


function Prod(){
    const prodContext = useContext(ProdContext);
    
    let handleDelete = (index) => {
        let confirm = window.confirm("Do you want to delete");
        if(confirm)
        {
            prodContext.prodList.splice(index,1);
            prodContext.setProdList([...prodContext.prodList]);
        }
    }
    return(
        <div>
            <h1 className="h3 mb-2 text-gray-800">Products</h1>
                    <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                        For more information about DataTables, please visit the <a target="_blank"
                            href="https://datatables.net">official DataTables documentation</a>.</p>
            <Link to="/create-prod" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-download fa-sm text-white-50"></i>Create Product</Link>
            <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Prod Name</th>
                                            <th>Price</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    {/*<tfoot>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                        </tr>
                                    </tfoot>*/}
                                    <tbody>
                                        {
                                            prodContext.prodList.map((obj,index) => {
                                                return(
                                                     <tr>
                                            <td>{index+1}</td>
                                            <td>{obj.prodName}</td>
                                            <td>{obj.price}</td>
                                            <td>
                                                <Link to={`/prod/edit/${index+1}`} className="btn btn-sm btn-primary">Edit</Link>
                                                <button onClick={() => {handleDelete(index)}} className="btn btn-sm btn-danger">Delete</button>
                                            </td>
                                        </tr>
                                                )
                                            })
                                        }
                                       
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default Prod