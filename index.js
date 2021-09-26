export function getType(data) {
  const type = Object.prototype.toString.call(data);
  switch (type) {
    case '[object Undefined]': return 'undefined';
    case '[object Null]': return 'null';
    case '[object Boolean]': return 'boolean';
    case '[object Function]': return 'function';
    case '[object Object]': return 'object';
    case '[object Array]': return 'array';
    case '[object String]': return 'string';
    case '[object Number]': return 'number';
    case '[object Promise]': return 'Promise'
    case '[object RegExp]': return 'RegExp';
    case '[object Symbol]': return 'Symbol';
    case '[object Date]': return 'Date';
    case '[object Map]': return 'Map';
    case '[object Set]': return 'Set';
    case '[object WeakMap]': return 'WeakMap';
    case '[object WeakSet]': return 'WeakSet';
    default: return type;
  }
}

export function getQuery() {
  const query = {};
  const list = location.search ? location.search.split('?')[1].split('&') : [];
  for(let i of list) {
    if(!i) continue;
    const key = i.split('=')[0];
    const value = i.split('=')[1];
    query[key] = value;
  }
  return query;
}
