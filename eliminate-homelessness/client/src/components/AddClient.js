import React, { Fragment, useState } from "react";
import ClientModal from "./ClientModal";

const AddClient = () => {
  const [year, setYear] = useState();

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { year };

      const response = await fetch("http://localhost:4000/clients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      console.log(response);
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 class="text-center mt-5">Eliminate Homelessness</h1>
      <form class="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        ></input>
        <button className="btn btn-success">Add New Client</button>
      </form>
      <ClientModal></ClientModal>
    </Fragment>
  );
};

export default AddClient;
