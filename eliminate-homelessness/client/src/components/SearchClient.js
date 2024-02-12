import React, { Fragment, useState } from "react";
import ClientModal from "./ClientModal";

const SearchClient = () => {
  const [client, setClient] = useState("clientId");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
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

  return (
    <Fragment>
      <form class="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          name="clientId"
          value={client.client_id}
          onChange={(e) => setClient(e.target.value)}
        ></input>
        <ClientModal client={client}></ClientModal>
      </form>
    </Fragment>
  );
};

export default SearchClient;
