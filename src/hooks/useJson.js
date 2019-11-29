import { useReducer } from 'react';
import uuid from 'uuid/v4';
import * as _ from 'lodash';
import arrayMove from 'array-move';

export default (props) => {
  const [state, setState] = useReducer((o, n) => ({ ...o, ...n }), {
    dataSource: props.dataSource,
  });

  // const get = path => _.flatten(_.get(state.dataSource, path));
  const get = path => _.get(state.dataSource, path);

  const add = (path, initValue, hasKey = true) => {
    let data = _.cloneDeep(state.dataSource);
    let getTmp = _.get(data, path);

    let tmp = initValue;
    // hasKey: object has property `$$key`
    if (_.isPlainObject(initValue) && hasKey) {
      tmp = {
        ...initValue,
        $$key: uuid(),
      };
    }
    if (_.isArray(getTmp)) {
      tmp = [...getTmp, tmp];
    }

    _.set(data, path, tmp);
    setState({ dataSource: data });
    return data;
  };

  const remove = path => {
    let data = _.cloneDeep(state.dataSource);
    // is an array
    if (/\[\d+\]$/.test(path)) {
      // 1: path, 2: index
      const reg = path.match(/(.*.)(\[\d+\])/);
      // path data
      let tmp = _.get(data, reg[1]);
      // _.remove(tmp, Number(reg[2].replace(/\[|\]/g, '')));
      // console.log('---tmp', tmp)
      _.remove(tmp, (_, idx) => idx === Number(reg[2].replace(/\[|\]/g, '')));
      // console.log('---tmp', tmp)
      _.set(data, reg[1], tmp);
    } else {
      _.unset(data, path);
    }
    setState({ dataSource: data });
    return data;
  };

  const sort = (path, from, to) => {
    let data = _.cloneDeep(state.dataSource);
    const getData = _.get(data, path);
    let moveData = arrayMove(getData, from, to);
    _.set(data, path, moveData);
    setState({ dataSource: data });
    return data;
  };

  const set = (path, value) => {
    let data = _.cloneDeep(state.dataSource);
    _.set(data, path, value);
    setState({ dataSource: data });
    return data;
  }

  return {
    get,
    add,
    set,
    sort,
    remove,
  };
};
