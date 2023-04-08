import React, { useState, useEffect } from 'react';
import '../App.css';
import TicketService from '../services/TicketService';
import { useNavigate } from 'react-router-dom';

const ListTicketComponent = () => {
  const [tickets, setTickets] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    TicketService.getTickets().then((res) => {
      setTickets(res.data);
    });
  }, []);

  const addTicket = () => {
    navigate('/add-ticket');
  };

  const editTicket = (id) => {
    navigate(`/update-ticket/${id}`);
  };

  const deleteTicket = (id) => {
    TicketService.deleteTicket(id).then((res) => {
      setTickets(tickets.filter((ticket) => ticket.id !== id));
    });
  };
  
  const viewTicket = (id) => {
    navigate(`/view-ticket/${id}`);
  };


  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <button className="btn btn-primary margin-tb" onClick={addTicket}>
            Add Ticket
          </button>
          <h2 className="text-center ml-3">Service Tickets List</h2>
        </div>
      </div>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Resolution</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id}>
                <td>{ticket.title}</td>
                <td>{ticket.description}</td>
                <td>{ticket.firstName}</td>
                <td>{ticket.lastName}</td>
                <td>{ticket.email}</td>
                <td>{ticket.mobile}</td>
                <td>{ticket.resolution}</td>
                <td>
                  <button className="btn btn-info" onClick={() => editTicket(ticket.id)}>Update</button>
                  <button style={{marginLeft:"10px"}} className="btn btn-danger "  onClick={() => deleteTicket(ticket.id)}>Delete</button>
                  <button style={{marginLeft:"10px"}}  className="btn btn-success "  onClick={() => viewTicket(ticket.id)}>View</button>                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListTicketComponent;
