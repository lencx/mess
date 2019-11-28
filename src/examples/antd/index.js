import React from 'react';
import { Form } from 'antd';
import ModuleOne from './comps/MdouleOne';

export default () => {
  const FormControls = Form.create({
    onValuesChange(props, changedValues) {
      console.log(changedValues)
    }
  })((props) => {
    console.log(props)
    return <ModuleOne {...props} />;
  })

  return <FormControls />
}

// // Demo
// export default () => {
//   const [config, { add, remove, get, sort }] = useList({ dataSource: {
//     a: 1,
//     b: 2,
//     c: [1,3,4,5],
//     d: {
//       e: { a: 1, b: [1,3,4,5,5,6,7]},
//       f: '123'
//     },
//     ff: [
//       { a: 1, b: 2},
//       { c: 1, d: 2},
//       { e: 1, f: 2},
//     ]
//   }})
//   const [getData, setData] = useState(null);
//   return (
//     <>
//       <button onClick={() => {
//         // get('d.e')
//         // add('d.e', {...get('d.e'), aaaa: 1}, false);
//         add('ggg', {...get('d.e'), aaaa: 1});
//       }}>add</button>
//       <button onClick={() => {
//         remove('d.e.b[0]');
//       }}>remove</button>
//       <button onClick={() => {
//         console.log(get('d.b'))
//         setData(get('d.e.b'));
//       }}>get</button>
//       <button onClick={() => {
//         sort('ff', 1, 2);
//       }}>sort</button>
//       <hr />
//       <pre>{JSON.stringify(config, null, 2)}</pre>
//       <p>{JSON.stringify(getData)}</p>
//     </>
//   );
// }