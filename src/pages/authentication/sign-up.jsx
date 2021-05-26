import React, { PureComponent } from 'react';
import { Row, Col, Form, Input, Alert } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CustomButton from '../../components/common/button/button.jsx';
import './authentication.scss';

class Signup extends PureComponent {
  state = {
    form: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      phone: '',
      password: ''
    },
    errors: [],
    loading: false,
    message: ''
  };

  handleChange = (e) => {
    const { form, errors } = this.state;

    this.setState({
      form: { ...form, [e.target.name]: e.target.value },
      errors: { ...errors, [e.target.name]: null },
      loading: false,
      message: ''
    });
  };

  static getDerivedStateFromProps = (props) => {
    return {
      message: props?.message,
      errors: props?.errors
    };
  };

  render() {
    const { loading } = this.props;
    const { form, message, errors } = this.state;

    // const getErrors = Object.entries(errors).map((e) => ({ [e[0]]: e[1] }));

    const onFinish = (values) => {
      const { signup } = this.props;
      signup(values);
    };

    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
    return (
      <div className="authentication">
        <Row>
          <Col span={24}>
            <Row>
              <Col span={8} offset={8}>
                <div className="sign-container">
                  <p className="text-centered">Sign Up</p>

                  {Object.keys(errors).length ? (
                    errors.map((err) => (
                      <Alert
                        className="alert-padding"
                        key={err.type}
                        description={err.message}
                        type="error"
                        closable
                        showIcon
                      />
                    ))
                  ) : message?.includes('check your email to activate your account') ? (
                    <Alert
                      className="alert-padding"
                      description={message}
                      type="success"
                      closable
                      showIcon
                    />
                  ) : (
                    ''
                  )}

                  <Form
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    ref={this.wrapper}
                    name="complex-form">
                    <Form.Item style={{ marginBottom: 0 }}>
                      <Form.Item
                        name="firstName"
                        rules={[{ required: true }]}
                        style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}>
                        <Input
                          name="firstName"
                          className="input-style"
                          onChange={this.handleChange}
                          value={form.firstName || ''}
                          error={errors.firstName}
                          placeholder="First Name"
                        />
                      </Form.Item>
                      <Form.Item
                        name="lastName"
                        rules={[{ required: true }]}
                        style={{
                          display: 'inline-block',
                          width: 'calc(50% - 8px)',
                          margin: '0 8px'
                        }}>
                        <Input
                          name="lastName"
                          className="input-style"
                          onChange={this.handleChange}
                          value={form.lastName || ''}
                          error={errors.lastName}
                          placeholder="Last Name"
                        />
                      </Form.Item>
                    </Form.Item>

                    <Form.Item style={{ marginBottom: 0 }}>
                      <Form.Item
                        name="username"
                        rules={[{ required: true }]}
                        style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}>
                        <Input
                          name="username"
                          className="input-style"
                          onChange={this.handleChange}
                          value={form.username || ''}
                          error={errors.username}
                          placeholder="Username"
                        />
                      </Form.Item>
                      <Form.Item
                        name="email"
                        rules={[{ required: true }]}
                        style={{
                          display: 'inline-block',
                          width: 'calc(50% - 8px)',
                          margin: '0 8px'
                        }}>
                        <Input
                          name="email"
                          className="input-style"
                          onChange={this.handleChange}
                          value={form.email || ''}
                          error={errors.email}
                          placeholder="Email"
                        />
                      </Form.Item>
                    </Form.Item>

                    <Form.Item style={{ marginBottom: 0 }}>
                      <Form.Item
                        name="phone"
                        rules={[{ required: true }]}
                        style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}>
                        <Input
                          name="phone"
                          className="input-style"
                          onChange={this.handleChange}
                          value={form.phone || ''}
                          error={errors.phone}
                          placeholder="Phone"
                        />
                      </Form.Item>
                      <Form.Item
                        name="password"
                        rules={[{ required: true }]}
                        style={{
                          display: 'inline-block',
                          width: 'calc(50% - 8px)',
                          margin: '0 8px'
                        }}>
                        <Input.Password
                          name="password"
                          className="input-style"
                          placeholder="Password"
                          onChange={this.handleChange}
                          value={form.password || ''}
                          error={errors.password}
                        />
                      </Form.Item>
                    </Form.Item>

                    <Form.Item className="center-btn">
                      <CustomButton htmlType="submit" className="width-btn-" loading={loading}>
                        SIGN UP
                      </CustomButton>
                      <p className="text-footer color-link-register">
                        Already have an account?{' '}
                        <Link className="color-link" to="/">
                          Sign in
                        </Link>{' '}
                      </p>
                    </Form.Item>
                  </Form>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = ({
  user: {
    signup: { loading, message, errors }
  }
}) => ({
  loading,
  message,
  errors
});



export default Signup;
