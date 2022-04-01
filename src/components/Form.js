import React, { useState, useEffect, useRef } from "react";
import {
  Form,
  Input,
  InputNumber,
  Modal,
  Button,
  Typography,
  Space,
} from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
// reset form fields when modal is form, closed
const useResetFormOnCloseModal = ({ form, visible }) => {
  const prevVisibleRef = useRef();
  useEffect(() => {
    prevVisibleRef.current = visible;
  }, [visible]);
  const prevVisible = prevVisibleRef.current;
  useEffect(() => {
    if (!visible && prevVisible) {
      form.resetFields();
    }
  }, [visible]);
};

const ModalForm = ({ visible, onCancel }) => {
  const [form] = Form.useForm();
  useResetFormOnCloseModal({
    form,
    visible,
  });

  const onOk = () => {
    form.submit();
    
    
  };

  return (
    <Modal title="Form-field" visible={visible} onOk={onOk} onCancel={onCancel}>
      <Form form={form} layout="vertical" name="FieldForm">
        <Form.Item
          name="textz"
          label="Text"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="numberz"
          label="Numbers"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
      </Form>
    </Modal>
  );
};
//
export const FormList = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  const showUserModal = () => {
    setVisible(true);
  };

  const hideUserModal = () => {
    setVisible(false);
  };

  const onFinish = (values) => {
    navigate('/dashboard');
  };

  return (
    <Form.Provider
      onFormFinish={(name, { values, forms }) => {
        if (name === "FieldForm") {
          const { basicForm } = forms;
          const fields = basicForm.getFieldValue("fields") || [];
          basicForm.setFieldsValue({
            fields: [...fields, values],  
          });
          setVisible(false);
          
        }
      }}
    >
      <Form {...layout} name="basicForm" onFinish={onFinish}>
        <Form.Item
          name="Form Title"
          label="Form Title"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Fields List"
          shouldUpdate={(prevValues, curValues) =>
            prevValues.fields !== curValues.fields
          }
        >
          {({ getFieldValue }) => {
            const fields = getFieldValue("fields") || [];
            return fields.length ? (
              <ul>
                {fields.map((field, index) => (
                  <li key={index} className="field">
                    <Space>Text : {field.textz} - </Space>
                    <Space> Numbers : {field.numberz} </Space>
                  </li>
                ))}
              </ul>
            ) : (
              <Typography.Text className="ant-form-text" type="secondary">
                ( <SmileOutlined /> Active form before )
              </Typography.Text>
            );
          }}
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
          <Button
            htmlType="button"
            style={{
              margin: "0 8px",
            }}
            onClick={showUserModal}
          >
            Add Fields
          </Button>
        </Form.Item>
      </Form>

      <ModalForm visible={visible} onCancel={hideUserModal} />
    </Form.Provider>
  );
};
