import React from 'react';
import { Layout, Row, Col, Avatar, Menu, Dropdown } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { DownOutlined } from '@ant-design/icons';
import './header.scss';

const { Header } = Layout;

const Navbar = () => {


  const menu = (
    <Menu>
      <Menu.Item>Logout</Menu.Item>
    </Menu>
  );

  return (
    <div className="header">
      <Header style={{ padding: 0, backgroundColor: '#fff' }}>
        <Row>
          <Col span={8} />
          <Col span={8} offset={8}>
            <div className="profile-float">
              <Avatar
              size={35}
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
              <Dropdown overlay={menu}>
                <button className="profile-container" onClick={(e) => e.preventDefault()}>
                  <span className="profile_name">
                    Jean Luc
                  </span>{' '}
                  <DownOutlined className="outline-color" />
                </button>
              </Dropdown>
            </div>
          </Col>
        </Row>
      </Header>
    </div>
  );
};



export default Navbar;
