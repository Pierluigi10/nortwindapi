import React from "react";
import { useState, useEffect } from "react";

function EmployeeList() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    (async () => {
      let response = await fetch("http://localhost:3047/employee-list");
      response = await response.json();
      setRecords(response.employees);
    })();
  }, []);

  return (
    <div>
      <table>
        <tr>
          <th>LAST NAME</th>
          <th>FIRST NAME</th>
        </tr>
        {records.map((record, index) => (
          <tr key={index}>
            <td>{record.last_name}</td>
            <td>{record.first_name}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default EmployeeList;
