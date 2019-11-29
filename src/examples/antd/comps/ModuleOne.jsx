import React from 'react';
import { Form, Input } from 'antd';

export default (props) => {
  // console.log('---ModuleOne', props);
  const { form, useJson = {} } = props;
  const { getFieldDecorator } = form;
  return (
    <>
      ModuleOne
      <Form.Item>
        {getFieldDecorator('pages[0].modules[0].attrs.value', {
          initialValue: useJson.get('pages[0].modules[0].attrs.value'),
        })(<Input />)}
      </Form.Item>
    </>
  )
}