import React, { useState } from 'react';
import Table from 'react-bootstrap/Table'

const EmployeeRows = (props) => {
    const { headers, data } = props;

    const [empList, setEmpList] = useState(data);
    const [sortObj, setsortObj] = useState({direction: 'asc', key: 'f_name'})

    const resetTableSort = () => {
        let sortedTable = [...empList]
        sortedTable.sort((a, b) => {
            if (a[sortObj.key] < b[sortObj.key]) {
                return sortObj.direction === 'asc' ? -1 : 1;
            }
            if (a[sortObj.key] > b[sortObj.key]) {
                return sortObj.direction === 'asc' ? 1 : -1;
            }
            return 0
        })
        setEmpList(sortedTable)
    }

    const sortByColumn = key => {
        let direction = 'asc';
        if (sortObj.key === key && sortObj.direction === 'asc') {
            direction = 'dsc'
        }
        setsortObj({ key, direction });
        resetTableSort(sortObj.key)
    }

  return (
        <Table striped bordered hover size="sm">
        <caption>Penn LPS Web Development Roster</caption>
        <thead>
            <tr>
            {headers.map((head) => (
                <th onClick={() => {sortByColumn(head[1])}}>{head[0]}</th>
            ))}
            </tr>
        </thead>
        <tbody>
            {empList.map((emp, index) => (
                <tr key={index}>
                    <td>{emp.f_name}</td>
                    <td>{emp.l_name}</td>
                    <td>{emp.phone}</td>
                    <td>{emp.email}</td>
                    <td>{emp.role}</td>
                    <td>{emp.online}</td>
                </tr>
            ))}
        </tbody>
        </Table>
    )
}

export default EmployeeRows;