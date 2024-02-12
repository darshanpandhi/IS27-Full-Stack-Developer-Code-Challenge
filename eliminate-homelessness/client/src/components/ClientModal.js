import React, { Fragment, useState } from "react";
import ClientData from "./ClientData";

const ClientModal = () => {
  const [client, setClient] = useState("Enter clientId");

  const getClientData = async (e) => {
    try {
      console.log(
        "In ClientModal, in getClientData(), clientId = ",
        e.target.value
      );

      const response = await fetch(
        `http://localhost:4000/clients/${e.target.elements.clientId.value}`
      );
      const jsonData = await response.json();
      console.log("In SearchClient, onSubmitForm");

      setClient(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  console.log("In clientModal component", client);
  return (
    <Fragment>
      <input
        type="text"
        value={client.client_id}
        onChange={(e) => setClient(e.target.value)}
      ></input>

      <button
        type="button"
        class="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#myModal"
        onClick={(e) => getClientData(e)}
      >
        Search
      </button>

      <div class="modal" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Client</h4>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div class="modal-body">
              <ClientData></ClientData>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-bs-dismiss="modal"
              >
                Save Changes
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ClientModal;
