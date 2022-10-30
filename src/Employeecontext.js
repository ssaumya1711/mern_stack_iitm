import React, { useState } from "react";

let EmpContext = React.createContext();

export default EmpContext;

export const EmpProvider = ({children}) => {
   let data = [
	{
		fname: "Murphy",
		lname: "Drake",
		phone: 9542115889,
		email: "a.auctor@aol.edu",
	},
	{
		fname: "Shelly",
		lname: "Fields",
		phone: 2315554133,
		email: "nec@icloud.org",
	},
	{
		fname: "Audra",
		lname: "Sweeney",
		phone: 4545626744,
		email: "consectetuer.adipiscing.elit@google.ca",
	},
	{
		fname: "Emi",
		lname: "Hubbard",
		phone: 3991511309,
		email: "ac@icloud.ca",
	},
	{
		fname: "Ivor",
		lname: "Duffy",
		phone: 4279516106,
		email: "ipsum@outlook.com",
	}
];
    const [empList,setEmpList] = useState([...data]);
    return <EmpContext.Provider value={{empList,setEmpList}}>
        {children}
    </EmpContext.Provider>
}