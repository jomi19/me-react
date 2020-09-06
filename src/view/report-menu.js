
import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

const Reports = ({ match }) => {
  const kmom = match.params.kmom;


  return (
    <nav class="nav-bar sub-menu">
      <Link to="reports/week1">Kmom01</Link>
    </nav>
  );
};

export default Reports;