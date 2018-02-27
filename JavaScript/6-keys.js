'use strict';

const data = { name: 'Marcus Aurelius', city: 'Rome', _born: 121 };

const person = new Proxy(data, {
  ownKeys(obj) {
    return Object.keys(obj).filter(name => !name.startsWith('_'));
  }
});

console.dir(Object.keys(person));
