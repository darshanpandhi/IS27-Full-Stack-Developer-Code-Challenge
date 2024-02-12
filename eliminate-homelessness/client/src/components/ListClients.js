import React, { Fragment, useEffect, useState } from "react";

const ListClients = () => {
  const [clients, setClients] = useState([]);

  const deleteClient = async (clientId) => {
    try {
      const deleteToDo = await fetch(
        `http://localhost:4000/clients/${clientId}`,
        {
          method: "DELETE",
        }
      );

      setClients(clients.filter((client) => client.client_id !== clientId));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getClients = async () => {
    try {
      const response = await fetch("http://localhost:4000/clients");

      const jsonData = await response.json();

      setClients(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getClients();
  }, []);

  return (
    <Fragment>
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>View / Modify</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr>
              <td>{client.first_name}</td>
              <td>{client.last_name}</td>
              <td>View / Modify</td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListClients;
