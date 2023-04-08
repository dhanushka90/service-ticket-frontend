import axios from 'axios';

const Ticket_API_BASE_URL = "http://localhost:8080/api/v1/tickets";

class TicketService {

  getTickets(){
    return axios.get(Ticket_API_BASE_URL);
  }

  createTicket(ticket){
    return axios.post(Ticket_API_BASE_URL, ticket);
  }
    
  getTicketById(ticketId){
    return axios.get(Ticket_API_BASE_URL + '/' + ticketId);
  }

  updateTicket(ticket, ticketId) {
    return axios.put(Ticket_API_BASE_URL + '/' + ticketId, ticket);
}

  deleteTicket(ticketId){
    return axios.delete(Ticket_API_BASE_URL + '/' + ticketId);
  }

}

export default new TicketService()