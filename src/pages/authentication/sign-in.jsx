import React, { PureComponent } from 'react';
import { Row, Col, Form, Input, Alert } from 'antd';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import CustomButton from '../../components/common/button/button.jsx';
import './authentication.scss';

class Signin extends PureComponent {
  state = {
    form: {
      email: '',
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
    const { loading, profile } = this.props;
    const { form, errors } = this.state;

    const onFinish = (values) => {
      const { login } = this.props;
      login(values);
    };

    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
    return (
      <div className="authentication">
        {!loading && Object.keys(profile).length ? <Redirect to={'/merchants-faqs'} /> : ''}
        <Row>
          <Col span={24}>
            <Row>
              <Col xs={9} xl={8} span={8} offset={8}>
                <div className="sign-container">
                  <p className="text-centered-signin">Sign In</p>
                  {errors?.length ? (
                    <Alert
                      className="alert-padding"
                      description={errors}
                      type="error"
                      closable
                      showIcon
                    />
                  ) : (
                    ''
                  )}
                  <Form
                    ref={this.wrapper}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}>
                    <Form.Item name="email" rules={[{ required: true }]}>
                      <Input
                        name="email"
                        placeholder="Email"
                        className="input-style"
                        onChange={this.handleChange}
                        value={form.email || ''}
                      />
                    </Form.Item>

                    <Form.Item name="password" rules={[{ required: true }]}>
                      <Input.Password
                        name="password"
                        placeholder="Password"
                        className="input-style"
                        onChange={this.handleChange}
                        value={form.password || ''}
                      />
                    </Form.Item>

                    <Form.Item>
                      <CustomButton htmlType="submit" className="width-btn" loading={loading}>
                        SIGN IN
                      </CustomButton>
                      <p className="text-footer">
                        <Link className="color-link" to="/forgot-password">
                          Forgot password
                        </Link>{' '}
                        <span className="dot-style">.</span>{' '}
                        <Link className="color-link" to="/register">
                          Sign up
                        </Link>
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
    login: { errors, message, loading },
    profile
  }
}) => ({
  errors,
  message,
  loading,
  profile
});



export default Signin;
