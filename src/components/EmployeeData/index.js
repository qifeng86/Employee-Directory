import React from "react";
import "./style.css";


function EmployeeData(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>First Name</th>
                    <th className="sort-by" onClick={props.sortByLastName}>Last Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                </tr>
            </thead>

            <tbody>
                {props.results.map(result => (
                    <tr>
                        <td> <img src={result.picture.medium} alt="" /></td>
                        <td>{result.name.first}</td>
                        <td>{result.name.last} </td>
                        <td>{result.phone}</td>
                        <td>{result.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )

}

export default EmployeeData