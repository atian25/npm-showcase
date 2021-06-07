'use strict';

const request = require('supertest');
const app = require('..');

describe('test/index.test.js', () => {
  it('should work', () => {
    return request(app.callback())
      .get('/')
      .expect(200, 'hi, anonymous');
  });

  it('should work with name', () => {
    return request(app.callback())
      .get('/')
      .query('name=tz')
      .expect(200, 'hi, tz');
  });
});
