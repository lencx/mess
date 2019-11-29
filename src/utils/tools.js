export const is = (val, type) => Object.prototype.toString.call(val) === `[object ${type}]`;
export const isObj = val => is(val, 'Object');
export const isArray = val => is(val, 'Array');

/**
 * objToDot
 * @param {Object} obj
 * @return {String} dot notation
 * @example
 * objToDot({a: {b: {c: [null, null, 1]}}})
 * => a.b.c[2]
 *
 * objToDot({a: [, , , {d: {a: [{d: '111'}]}}]})
 * => a[3].d.a[0].d
 */
export const objToDot = obj => {
  let path = [];
  const getKey = o => {
    if (isObj(o)) {
      Object.keys(o).forEach((item, idx) => {
        if (typeof item === 'string' && idx === 0) {
          path.push(item);
        }
        if (isObj(o[item]) || isArray(o[item])) {
          getKey(o[item]);
        }
      })
    }
    if (isArray(o)) {
      o.forEach((item, idx) => {
        if (item) {
          path.push(`[${idx}]`);
        }
        if (isObj(item) || isArray(item)) {
          getKey(item);
        }
      });
    }
  }
  getKey(obj);
  return path.join('.').replace(/.\[/g, '[');
}
