import React from "react";
import { useState } from "react/cjs/react.development";

let UserContext = React.createContext();

export default UserContext;

export const UserProvider = ({children}) => {
    let data = [{
        userName: "Tiger Nixon",
        position: "System Architect",
        office: "Edinburgh",
        age: 61,
        startDate: "2011/04/25",
        salary: 320800
        },
        {
            userName: "Garrett Winters",
            position: "Accountant",
            office: "Tokyo",
            age: 63,
            startDate: "2011/07/25",
            salary: 170750
        },
        {
            userName: "Ashton Cox",
            position: "Junior Technical Author",
            office: "San Francisco",
            age: 66,
            startDate: "2009/01/12",
            salary: 86000
        },
        {
            userName: "Cedric Kelly",
            position: "Senior Javascript Developer",
            office: "Edinburgh",
            age: 22,
            startDate: "2012/03/29",
            salary: 433060
        },
        {
            userName: "Airi Satou",
            position: "Accountant",
            office: "Tokyo",
            age: 33,
            startDate: "2008/11/28",
            salary: 162700
    }]
    const [userList,setUserList] = useState([...data]);
    return <UserContext.Provider value={{userList,setUserList}}>
        {children}
    </UserContext.Provider>
}