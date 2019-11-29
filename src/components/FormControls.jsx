import React, { cloneElement, Children } from 'react';
import Form from 'antd/lib/form';
import _get from 'lodash/get';
import useJson from 'hooks/useJson';
import { objToDot } from 'utils/tools';

export default ({ children }) => {
  const filteredChildren = Children.toArray(children).filter(c => !!c);

  // TODO:
  const [config, { }] = useJson({ dataSource: {} });

  const FormControls = Form.create({
    onValuesChange(props, changedValues) {
      const dotStr = objToDot(changedValues);
      const value = _get(changedValues, dotStr);
      console.log(changedValues, dotStr, value);
    }
  })((props) => {
    return (
      <Form>
        {Children.map(filteredChildren, (child, index) => {
          if (!child) {
            return null;
          }
          const childProps = {
            ...child.props,
            ...props,
          };
          return cloneElement(child, childProps);
        })}
      </Form>
    );
  })

  return <FormControls />;
}
