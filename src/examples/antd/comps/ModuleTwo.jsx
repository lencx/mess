import React from 'react';
import { Form, Select } from 'antd';

const options = [
  { label: 'JavaScript', value: 'js' },
  { label: 'HTML', value: 'html' },
  { label: 'CSS', value: 'css' },
];

export default (props) => {
  console.log('---ModuleTwo', props);
  const { form } = props;
  const { getFieldDecorator } = form;

  return (
    <div>
      ModuleTwo
      <Form.Item>
        {getFieldDecorator('a.b.c[2]', {
        })(<Select>
          {options.map(item => (
            <Select.Option key={item.value}>{item.label}</Select.Option>
          ))}
        </Select>)}
      </Form.Item>
    </div>
  )
}