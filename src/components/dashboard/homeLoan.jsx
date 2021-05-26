import React from "react";
import { Row, Col, Form, Button, Input, Select, message, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

import "./dashboard.scss";

const { Option } = Select;

const key = 'updatable';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

function HomeLoan() {
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

  const props = {
    name: "file",

    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div className="dashboard">
      <Row>
        <Col span={16} offset={4}>
          <h2 className="text-center">Apply for a Home Loan</h2>
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Row gutter={[8, 8]}>
              <Col span={12}>
                <Form.Item
                  name="UPInumber"
                  rules={[
                    {
                      required: true,
                      message: "Please input your UPI number!",
                    },
                  ]}
                >
                  <Input placeholder="UPI number" />
                </Form.Item>

                <Form.Item name="calateralType">
                  <Select
                    className="select-style"
                    placeholder="Collateral Type"
                    allowClear
                  >
                    <Option value="Male">Lorem 1</Option>
                    <Option value="Female">Lorem 2</Option>
                  </Select>
                </Form.Item>

                <Form.Item>
                  <Upload {...props}>
                    <Button icon={<UploadOutlined />}>
                      Supporting document
                    </Button>
                  </Upload>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="amount"
                  rules={[
                    {
                      required: true,
                      message: "Please input the amount",
                    },
                  ]}
                >
                  <Input placeholder="Amount" />
                </Form.Item>

                <Form.Item
                  name="paymentPeriod"
                  rules={[
                    {
                      required: true,
                      message: "Please input the payment period",
                    },
                  ]}
                >
                  <Input placeholder="Payment Period" />
                </Form.Item>
              </Col>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default HomeLoan;
