'use strict';

const data = { name: 'Marcus Aurelius', city: 'Rome', born: 121 };

const person = new Proxy(data, {
  get(obj, key) {
    console.log('get', key);
    return obj[key];
  },
  set(obj, key, val) {
    console.log('set', key, val);
    obj[key] = val;
    return true;
  }
});

console.dir({ 'person.born': person.born });
console.dir({ 'person.year': person.year });

for (const key in person) {
  console.dir({ key: person[key] });
}

person.name = 'Marcus';
