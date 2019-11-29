import React from 'react';
import { Form, Select } from 'antd';

export default (props) => {
  // console.log('---ModuleTwo', props);
  const { form, useJson } = props;
  const { getFieldDecorator } = form;

  return (
    <div>
      ModuleTwo
      <Form.Item>
        {getFieldDecorator(`pages[0].modules[1].attrs.value`, {
          initialValue: useJson.get('pages[0].modules[1].attrs.value'),
        })(<Select>
          {useJson.get('pages[0].modules[1].attrs.options').map(item => (
            <Select.Option key={item.value}>{item.label}</Select.Option>
          ))}
        </Select>)}
      </Form.Item>
    </div>
  )
}