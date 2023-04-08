import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListTicketComponent from './components/ListTicketComponent';
// import CreateTicketComponent from './components/CreateTicketComponent';
// import UpdateTicketComponent from './components/UpdateTicketComponent';
import CreateUpdateTicketComponent from './components/CreateUpdateTicketComponent';
import ViewTicketComponent from './components/ViewTicketComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
          <div className="container">
            <Routes>
            <Route path="/" exact element={<ListTicketComponent />} />
              <Route path="/ticket" element={<ListTicketComponent />} />
              {/* <Route path="/add-ticket" element={<CreateTicketComponent />} />
              <Route path="/update-ticket/:id" element={<UpdateTicketComponent />} />   */}
            <Route path="/add-ticket" element={<CreateUpdateTicketComponent />} />
            <Route path="/update-ticket/:id" element={<CreateUpdateTicketComponent />} />
            <Route path="/view-ticket/:id" element={<ViewTicketComponent />} />
            </Routes>
          </div>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
