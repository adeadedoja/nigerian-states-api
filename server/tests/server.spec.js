import server from '../start';
import chai from 'chai';

import fs from 'fs';

import chaiHttp from 'chai-http';


const should = chai.should();
const expect = chai.expect();

chai.use(chaiHttp);

// Parent Block
describe('Test for the Index Route. Acts as the health check', () => {
  before(() => {
  });

  after(() => {
  });
  describe('Index Route', () => {
    // Unauthenticated Route to get all users
    it('it should respond with welcome message ', (done) => {
      chai.request(server)
        .get('/')
        .end((err, res) => {
          res.body.should.have.status(200);
          res.body.should.have.property('message');
          done();
        });
    });
  });
});
