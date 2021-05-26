import React from "react";
import { Row, Col, Form, Button, Input, Select, message, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

import "./dashboard.scss";

const { Option } = Select;

const key = "updatable";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

function SalaryAdvance() {
  const onFinish = (values) => {
    console.log("Success:", values);
    if (values) {
      message.loading({ content: "Loading...", key });
      setTimeout(() => {
        message.success({
          content: "Request successfully sent !!!!",
          key,
          duration: 4,
        });
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
          <h2 className="text-center">Apply for a Salary Advance</h2>
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
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input employer names",
                    },
                  ]}
                >
                  <Input placeholder="Employer" />
                </Form.Item>

                <Form.Item name="gender">
                  <Select
                    className="select-style"
                    placeholder="Employment Period"
                    allowClear
                  >
                    <Option value="Male">Year</Option>
                    <Option value="Female">Month</Option>
                  </Select>
                </Form.Item>

                <Form.Item name="typeContract">
                  <Select
                    className="select-style"
                    placeholder="Type of Contract"
                    allowClear
                  >
                    <Option value="Male">Lorem</Option>
                    <Option value="lorem1">Lorem</Option>
                    <Option value="lorem2">Lorem</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  name="number"
                  rules={[
                    {
                      required: true,
                      message: "Please input your position!",
                    },
                  ]}
                >
                  <Input placeholder="Position" />
                </Form.Item>
              </Col>
              <Col span={12}>
                {" "}
                <Form.Item
                  name="year"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Gros Salary!",
                    },
                  ]}
                >
                  <Input placeholder="Gros Salary" />
                </Form.Item>
                <Form.Item
                  name="amountRequested"
                  rules={[
                    {
                      required: true,
                      message: "Please input the amount requested",
                    },
                  ]}
                >
                  <Input placeholder="Amount Requested" />
                </Form.Item>
                <Form.Item
                  name="payment"
                  rules={[
                    {
                      required: true,
                      message: "Please input the reason for request",
                    },
                  ]}
                >
                  <Input placeholder="Reason for Request" />
                </Form.Item>
                <Upload {...props}>
                  <Button icon={<UploadOutlined />}>Supporting document</Button>
                </Upload>
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

export default SalaryAdvance;
