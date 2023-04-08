import React, { useState, useEffect } from 'react';
import TicketService from '../services/TicketService';
import { useParams, useNavigate } from 'react-router-dom';

const ViewTicketComponent = () => {
  const [ticket, setTicket] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    TicketService.getTicketById(id).then((res) => {
      setTicket(res.data);
    });
  }, [id]);

  const viewTicket = () => {
    navigate('/ticket');
  };

  return (
    <div>
      <br />
      <div className="card col-md-6 offset-md-3">
        <h3 className="text-center">View Ticket Details</h3>
        <div className="card-body">

        <div className="label-data-row">
            <label style={{ fontWeight: 'bold' }}>Title: </label>
            <span style={{ marginLeft: '5px' }}>{ticket.title}</span>
          </div>

          <div className="label-data-row margin-tb-1">
            <label style={{ fontWeight: 'bold' }}>Description: </label>
            <span style={{ marginLeft: '5px' }}>{ticket.description}</span>
          </div>

          <div className="label-data-row margin-tb-1">
            <label style={{ fontWeight: 'bold' }}>First Name: </label>
            <span style={{ marginLeft: '5px' }}>{ticket.firstName}</span>
          </div>

          <div className="label-data-row margin-tb-1">
            <label style={{ fontWeight: 'bold' }}>Last Name: </label>
            <span style={{ marginLeft: '5px' }}>{ticket.lastName}</span>
          </div>

          <div className="label-data-row margin-tb-1">
            <label style={{ fontWeight: 'bold' }}>Email: </label>
            <span style={{ marginLeft: '5px' }}>{ticket.email}</span>
          </div>

          <div className="label-data-row margin-tb-1">
            <label style={{ fontWeight: 'bold' }}>Mobile: </label>
            <span style={{ marginLeft: '5px' }}>{ticket.mobile}</span>
          </div>

          <div className="label-data-row margin-tb-1">
            <label style={{ fontWeight: 'bold' }}>Resolution: </label>
            <span style={{ marginLeft: '5px' }}>{ticket.resolution}</span>
          </div>


          <div className="label-data-row margin-tb-1">
            <label style={{ fontWeight: 'bold' }}>Title: </label>
            <span style={{ marginLeft: '5px' }}>{ticket.title}</span>
          </div>

        </div>
      </div>
      <button style={{marginLeft:"910px", marginTop:"10px"}}  className="btn btn-success "  onClick={() => viewTicket(ticket)}>Back</button>  
    </div>
  );
};

export default ViewTicketComponent;
