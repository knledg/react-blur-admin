require('babel-register')();

if (!global.document) { // to make mocha's watch mode work
  const jsdom = require('jsdom').jsdom;
  global.document = jsdom('<!doctype html><html><body></body></html>');
  global.window = document.defaultView;
  global.navigator = global.window.navigator;
  global.self = document.defaultView;
}
