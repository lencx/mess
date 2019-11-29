/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import 'antd/dist/antd.css';
import { store } from 'store';
import useJson from 'hooks/useJson';
import mockData from './mock-data';

import FormControls from 'components/FormControls';
import ModuleOne from './comps/ModuleOne';
import ModuleTwo from './comps/ModuleTwo';

const ShowData = () => {
  const [globalState] = useContext(store);
  return (
    <pre style={{ fontSize: 10 }}>{JSON.stringify(globalState.antdForm, null, 2)}</pre>
  )
}

export default () => {
  const [globalState, dispatch] = useContext(store);

  const uj = useJson({ dataSource: mockData })

  useEffect(() => {
    if (globalState.form) {
      const [key, value] = globalState.form;
      dispatch({ type: 'setState', payload: { antdForm: uj.set(key, value) }});
    }
  }, [globalState.form])

  useEffect(() => {
    dispatch({
      type: 'setState',
      payload: { antdForm: mockData },
    });
  }, [])
  return (
    <FormControls useJson={uj}>
      <ModuleOne />
      <ModuleTwo />
      <ShowData />
    </FormControls>
  );
}
