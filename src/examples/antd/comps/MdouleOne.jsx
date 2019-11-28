import React from 'react';
import { Form, Input } from 'antd';

export default (props) => {
  console.log('---ModuleOne', props);
  const { form } = props;
  const { getFieldDecorator } = form;
  return (
    <>
      ModuleOne
      <Form.Item>
        {getFieldDecorator('xx.f[2].c', {
        })(<Input />)}
      </Form.Item>
    </>
  )
}