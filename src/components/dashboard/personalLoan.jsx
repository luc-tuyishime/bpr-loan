import React from "react";
import { Row, Col, Form, Button, Input, message } from "antd";

import "./dashboard.scss";

const key = 'updatable';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

function PersonalLoan() {
  const onFinish = (values) => {
    console.log("Success:", values);

    if(values){
        message.loading({ content: 'Loading...', key });
        setTimeout(() => {
          message.success({ content: 'Request successfully sent !!!!', key, duration: 4 });
        }, 3000);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);  
  };

  return (
    <div className="dashboard">
      <Row>
        <Col span={16} offset={4}>
          <h2 className="text-center">Apply for a Personal Loan</h2>
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Row gutter={[8, 8]}>
              <Col span={16}>
                <Form.Item
                  name="amount"
                  rules={[
                    {
                      required: true,
                      message: "Please input the amount!",
                    },
                  ]}
                >
                  <Input placeholder="Amount" />
                </Form.Item>

                <Form.Item
                  name="payment"
                  rules={[
                    {
                      required: true,
                      message: "Please input the payment!",
                    },
                  ]}
                >
                  <Input placeholder="Payment" />
                </Form.Item>

                <Form.Item
                  name="reason"
                  rules={[
                    {
                      required: true,
                      message: "Please input the reason for request!",
                    },
                  ]}
                >
                  <Input placeholder="Reason for request" />
                </Form.Item>
              </Col>
     
            </Row>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default PersonalLoan;
