import React, { Fragment, useState } from "react";
import ClientModal from "./ClientModal";

const ClientData = () => {
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
      <form class="d-flex mt-5" onSubmit={onSubmitForm}>
        <input type="text" className="form-control"></input>
      </form>
    </Fragment>
  );
};

export default ClientData;
