'use strict';

class Class1 {
  method(par1, par2) {
    return { par1, par2 };
  }
}

class ProxyClass {
  constructor(instance) {
    this.instance = instance;
  }

  method(par1, par2) {
    return this.instance.method(par1, par2);
  }
}

// Usage

const proxy = new ProxyClass(new Class1());
const res = proxy.method('value1', 'value2');
console.dir(res);
