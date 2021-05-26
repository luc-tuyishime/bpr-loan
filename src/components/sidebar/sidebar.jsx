import React, { Component } from 'react';
import { Layout, Menu, Image } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import PNG from '../../assets/logo2.png'

import './sidebar.scss';

const { Sider } = Layout;

class Sidebar extends Component {
  state = { openKeys: [] };

  static propTypes = { location: PropTypes.object.isRequired };

  render() {
    const { location } = this.props;

    return (
      <div className="slider">
        <Sider
          width={172}
          className="sider-class"
          style={{
            height: '100vh',
            position: 'fixed',
            zIndex: 1
          }}>
          <div className="text-dashboard">
            <div className="image-logo">
              <Image
                width={220}
                height={80}
                src={PNG}
              />
            </div>
          </div>
          <Menu
            className="menu-icons"
            mode="inline"
            defaultSelectedKeys={['/merchants-faqs']}
            selectedKeys={[location.pathname]}>
            <Menu.Item key="/" className="text-side">
              <Link to="/">
                <span className="text-sider">Car Loan</span>
              </Link>
            </Menu.Item>
    
            <Menu.Item key="/home-loan" className="text-side">
              <Link to="/home-loan">
                <span className="text-sider">Home Loan</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/personal-loan" className="text-side">
              <Link to="/personal-loan">
                <span className="text-sider">Personal Loan</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/salary-advance" className="text-side">
              <Link to="/salary-advance">
                <span className="text-sider">Salary Advance</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
      </div>
    );
  }
}

export default withRouter(Sidebar);
