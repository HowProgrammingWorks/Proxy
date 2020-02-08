'use strict';

class Config {
  constructor(fileName) {
    this.data = require(fileName);
  }

  read(key) {
    let { data } = this;
    const steps = key.split('.');
    for (const step of steps) {
      const next = data[step];
      if (!next) return;
      data = next;
    }
    return data;
  }
}

class ProxyConfig {
  constructor(fileName) {
    this.fileName = fileName;
  }

  read(key) {
    const config = new Config(this.fileName);
    return config.read(key);
  }
}

// Usage

const config = new ProxyConfig('./9-config.json');
const value = config.read('timeouts.keepAlive');
console.dir({ value });
