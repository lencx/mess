/* eslint-disable react-hooks/exhaustive-deps */
import React, { cloneElement, Children, useContext, useMemo } from 'react';
import Form from 'antd/lib/form';
import _get from 'lodash/get';
import { objToDot } from 'utils/tools';
import { store } from 'store';

export default ({ children, ...otherProps }) => {
  const [, dispatch] = useContext(store);

  const filteredChildren = Children.toArray(children).filter(c => !!c);

  const FormControls = useMemo(() => {
    return Form.create({
      onValuesChange(props, changedValues) {
        const dotStr = objToDot(changedValues);
        const value = _get(changedValues, dotStr);
        // console.log(changedValues, dotStr)
        // if using redux, write value to store
        dispatch({
          type: 'setState',
          payload: {
            form: [dotStr, value],
          }
        });
      }
    })((props) => {
      return (
        <Form>
          {Children.map(filteredChildren, (child, index) => {
            if (!child) {
              return null;
            }
            const childProps = {
              ...otherProps,
              ...props,
              ...child.props,
            };
            return cloneElement(child, childProps);
          })}
        </Form>
      );
    })
  }, [])

  return <FormControls />;
}
