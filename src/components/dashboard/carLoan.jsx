import React from "react";
import { Row, Col, Form, Button, Input, Select, message, Upload } from "antd";
import { UploadOutlined } from '@ant-design/icons';


import "./dashboard.scss";

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const key = 'updatable';

function CarLoan() {
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
    name: 'file',

    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div className="dashboard">
      <Row>
        <Col span={16} offset={4}>
          <h2 className="text-center">Apply for Car Loan</h2>
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
                      message: "Please input your Customer Name!",
                    },
                  ]}
                >
                  <Input placeholder="Customer Name" />
                </Form.Item>

                <Form.Item
                  name="number"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Account Number!",
                    },
                  ]}
                >
                  <Input placeholder="Account Number" />
                </Form.Item>

                <Form.Item name="gender">
                     <Select
                      className="select-style"
                      placeholder="Branch"
                      allowClear
                     >
                       <Option value="Male">Giporosso</Option>
                       <Option value="Female">Kimironko</Option>
                     </Select>
                   </Form.Item>

                   <Form.Item
                  name="brand"
                  rules={[
                    {
                      required: true,
                      message: "Please input brand!",
                    },
                  ]}
                >
                  <Input placeholder="Brand" />
                </Form.Item>

                <Form.Item
                  name="model"
                  rules={[
                    {
                      required: true,
                      message: "Please enter the model",
                    },
                  ]}
                >
                  <Input placeholder="Model" />
                </Form.Item>
              </Col>
              <Col span={12}>
                {" "}
                <Form.Item
                  name="year"
                  rules={[
                    {
                      required: true,
                      message: "Please input the Manufactured year!",
                    },
                  ]}
                >
                  <Input placeholder="Manufactured year" />
                </Form.Item>
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
                  name="payment"
                  rules={[
                    {
                      required: true,
                      message: "Please input the payment",
                    },
                  ]}
                >
                  <Input placeholder="Payment" />
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

export default CarLoan;
