import React, { Fragment, useState } from "react";

const Client = () => {
  const [clientId, setClientId] = useState();
  const [client, setClient] = useState();

  console.log("Rerendering");

  const getClientData = async (e) => {
    try {
      console.log("client = ", client);

      e.preventDefault();

      const response = await fetch(`http://localhost:4000/clients/${clientId}`);
      const jsonData = await response.json();

      console.log("jsonData = ", jsonData);
      setClient(jsonData);
    } catch (err) {
      console.log(err);
      console.error(err.message);
    }
  };

  const deleteClient = async () => {
    try {
      console.log(`http://localhost:4000/clients/${clientId}`);

      await fetch(`http://localhost:4000/clients/${clientId}`, {
        method: "DELETE",
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  const saveClient = async () => {
    console.log("Within updateClient");
    console.log("Attempting to update client with id = ", clientId);
    console.log("Updated client = ", client);

    try {
      console.log(`http://localhost:4000/clients/${clientId}`);

      await fetch(`http://localhost:4000/clients/${clientId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(client),
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  const updateClientData = async (e) => {
    if (e.nativeEvent.submitter.name === "saveChanges") {
      await saveClient();
    } else await deleteClient();
  };

  return (
    <Fragment>
      <form class="d-flex mt-5" onSubmit={getClientData}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter client_id"
          value={clientId}
          onChange={(e) => setClientId(e.target.value)}
        ></input>

        <button type="submit" class="btn btn-success">
          Search
        </button>
      </form>

      <form onSubmit={updateClientData}>
        <div class="form-group mt-4">
          <label htmlFor="clientId">Client ID</label>
          <input
            id="clientId"
            type="text"
            class="form-control"
            value={client?.client_id}
          ></input>
        </div>

        <div class="form-group mt-4">
          <label htmlFor="year">Year</label>
          <input
            id="year"
            type="text"
            class="form-control"
            value={client?.year}
            onChange={(e) => setClient({ ...client, year: e.target.value })}
          ></input>
        </div>

        <div class="form-group mt-4">
          <label htmlFor="active">Active</label>
          <input
            id="active"
            type="text"
            class="form-control"
            value={client?.active}
            onChange={(e) => setClient({ ...client, active: e.target.value })}
          ></input>
        </div>

        <div class="form-group mt-4">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            class="form-control"
            value={client?.first_name}
            onChange={(e) =>
              setClient({ ...client, first_name: e.target.value })
            }
          ></input>
        </div>

        <div class="form-group mt-4">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            class="form-control"
            value={client?.last_name}
            onChange={(e) =>
              setClient({ ...client, last_name: e.target.value })
            }
          ></input>
        </div>

        <div class="form-group mt-4">
          <label htmlFor="gender">Gender</label>
          <input
            id="gender"
            type="text"
            class="form-control"
            value={client?.gender}
            onChange={(e) => setClient({ ...client, gender: e.target.value })}
          ></input>
        </div>

        <div class="form-group mt-4">
          <label htmlFor="dob">Date of Birth</label>
          <input
            id="dob"
            type="text"
            class="form-control"
            value={client?.date_of_birth}
            onChange={(e) =>
              setClient({ ...client, date_of_birth: e.target.value })
            }
          ></input>
        </div>

        <div class="form-group mt-4">
          <label htmlFor="city">City</label>
          <input
            id="city"
            type="text"
            class="form-control"
            value={client?.city}
            onChange={(e) => setClient({ ...client, city: e.target.value })}
          ></input>
        </div>

        <div class="form-group mt-4">
          <label htmlFor="indigenous">Indigenous</label>
          <input
            id="indigenous"
            type="text"
            class="form-control"
            value={client?.indigenous}
            onChange={(e) =>
              setClient({ ...client, indigenous: e.target.value })
            }
          ></input>
        </div>

        <div class="form-group mt-4">
          <label htmlFor="pwd">PWD</label>
          <input
            id="pwd"
            type="text"
            class="form-control"
            value={client?.pwd}
            onChange={(e) => setClient({ ...client, pwd: e.target.value })}
          ></input>
        </div>

        <div class="form-group mt-4">
          <label htmlFor="vet">Vet</label>
          <input
            id="vet"
            type="text"
            class="form-control"
            value={client?.vet}
            onChange={(e) => setClient({ ...client, vet: e.target.value })}
          ></input>
        </div>

        <div class="form-group mt-4">
          <label htmlFor="emergencySheltered">Emergency Sheltered</label>
          <input
            id="emergencySheltered"
            type="text"
            class="form-control"
            value={client?.emergency_sheltered}
            onChange={(e) =>
              setClient({ ...client, emergency_sheltered: e.target.value })
            }
          ></input>
        </div>

        <div class="form-group mt-4">
          <label htmlFor="busPass">Bus Pass</label>
          <input
            id="busPass"
            type="text"
            class="form-control"
            value={client?.bus_pass}
            onChange={(e) => setClient({ ...client, bus_pass: e.target.value })}
          ></input>
        </div>

        <div class="form-group mt-4">
          <label htmlFor="clothingSupplement">Clothing Supplement</label>
          <input
            id="clothingSupplement"
            type="text"
            class="form-control"
            value={client?.clothing_supplement}
            onChange={(e) =>
              setClient({ ...client, clothing_supplement: e.target.value })
            }
          ></input>
        </div>

        <div class="form-group mt-4">
          <label htmlFor="petDeposit">Pet Deposit</label>
          <input
            id="petDeposit"
            type="text"
            class="form-control"
            value={client?.pet_deposit}
            onChange={(e) =>
              setClient({ ...client, pet_deposit: e.target.value })
            }
          ></input>
        </div>

        <div class="form-group mt-4">
          <label htmlFor="pssg">PSSG</label>
          <input
            id="pssg"
            type="text"
            class="form-control"
            value={client?.pssg}
            onChange={(e) => setClient({ ...client, pssg: e.target.value })}
          ></input>
        </div>

        <div class="form-group mt-4">
          <label htmlFor="status">Status</label>
          <input
            id="status"
            type="text"
            class="form-control"
            value={client?.status}
            onChange={(e) => setClient({ ...client, status: e.target.value })}
          ></input>
        </div>

        <div class="form-group mt-4">
          <label htmlFor="deceased">Deceased</label>
          <input
            id="deceased"
            type="text"
            class="form-control"
            value={client?.deceased}
            onChange={(e) => setClient({ ...client, deceased: e.target.value })}
          ></input>
        </div>

        <div class="d-flex justify-content-between mt-4 mb-4">
          <button name="saveChanges" type="submit" class="btn btn-warning">
            Save Changes
          </button>

          <button name="delete" type="submit" class="btn btn-danger">
            Delete
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default Client;
