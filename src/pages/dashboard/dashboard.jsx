import React from 'react';
import { Row, Col } from 'antd';
import Sidebar from '../../components/sidebar/sidebar.jsx';
import Navbar from '../../components/common/header/header.jsx';

import CarLoan from '../../components/dashboard/carLoan.jsx';
import HomeLoan from '../../components/dashboard/homeLoan.jsx';
import PersonalLoan from '../../components/dashboard/personalLoan.jsx';
import SalaryAdvance from '../../components/dashboard/salaryAdvance.jsx';

import './dashboard.scss';

const Dashboard = ({ location }) => {
  const { pathname } = location;
  return (
    <div className="dashboard">
      <Navbar title="Dashboard" />

      <div className="bg-color">
        <Row>
          <Col span={3}>
            <Sidebar />
          </Col>
          <Col span={21}>
            {pathname === '/' ? (
              <CarLoan />
            ) : pathname === '/home-loan' ? (
              <HomeLoan />
            ) : pathname === '/personal-loan' ? (
              <PersonalLoan />
            ) : pathname === '/salary-advance' ? (
              <SalaryAdvance />
            ) : (
              ''
            )}
          </Col>
        </Row>
      </div>
      <div className="profile-container"></div>
    </div>
  );
};

export default Dashboard;
