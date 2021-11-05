import React from "react";
import { useState, useEffect } from "react";

function InvitationList() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    (async () => {
      let response = await fetch("http://localhost:3047/invitation-list");
      response = await response.json();
      setRecords(response.guests);
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

export default InvitationList;
