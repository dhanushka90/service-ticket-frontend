//not in use. Aggrigated using the CreateUpdateTicketComponent
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import TicketService from '../services/TicketService';

const CreateTicketComponent = () => {
  const [state, setState] = useState({
    title: '',
    description: '',
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    resolution: '',
  });

  const navigate = useNavigate();

  const saveTicket = (e) => {
    e.preventDefault();
    let ticket = { ...state };
    console.log('ticket => ' + JSON.stringify(ticket));

    TicketService.createTicket(ticket).then(res=>{
        navigate('/ticket');
    });

  };

  const changeHandler = (event, field) => {
    setState({ ...state, [field]: event.target.value });
  };

  const cancelTicket = () => {
    navigate('/ticket');
  };

  return (
    <div>
      <div className="container margin-tb-2">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center margin-tb-1">Add Service Ticket</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>Title: </label>
                  <input
                    placeholder="Type your issue title"
                    name="title"
                    className="form-control"
                    value={state.title}
                    onChange={(event) => changeHandler(event, 'title')}
                  />
                </div>

                <div className="form-group margin-tb-1">
                  <label>Description: </label>
                  <input
                    placeholder="Type your issue description"
                    name="description"
                    className="form-control"
                    value={state.description}
                    onChange={(event) => changeHandler(event, 'description')}
                  />
                </div>

                <div className="form-group margin-tb-1">
                  <label>First Name: </label>
                  <input
                    placeholder="Type your first name"
                    name="firstName"
                    className="form-control"
                    value={state.firstName}
                    onChange={(event) => changeHandler(event, 'firstName')}
                  />
                </div>

                <div className="form-group margin-tb-1">
                  <label>Last Name: </label>
                  <input
                    placeholder="Type your last name"
                    name="lastName"
                    className="form-control"
                    value={state.lastName}
                    onChange={(event) => changeHandler(event, 'lastName')}
                  />
                </div>

                <div className="form-group margin-tb-1">
                  <label>Email: </label>
                  <input
                    placeholder="Type your email address"
                    name="email"
                    className="form-control"
                    value={state.email}
                    onChange={(event) => changeHandler(event, 'email')}
                  />
                </div>

                <div className="form-group margin-tb-1">
                  <label>Mobile: </label>
                  <input
                    placeholder="Type your mobile number"
                    name="mobile"
                    className="form-control"
                    value={state.mobile}
                    onChange={(event) => changeHandler(event, 'mobile')}
                  />
                </div>

                <div className="form-group">
                  <label>Resolution: </label>
                  <input
                    placeholder="Type the issue resolution"
                    name="resolution"
                    className="form-control"
                    value={state.resolution}
                    onChange={(event) => changeHandler(event, 'resolution')}
                  />
                </div>

                <button className="btn btn-success margin-tb" onClick={saveTicket}>
                  Save
                </button>
                <button className="btn btn-danger margin-tb" onClick={cancelTicket}>
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTicketComponent;
