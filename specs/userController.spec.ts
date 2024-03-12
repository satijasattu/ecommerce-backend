import request  from "supertest";
import { app } from "../server";
import { expect, use } from "chai";
import { mockUserPostBody } from "../mockData/mockpostbody";
import { User } from "../models/user";


    describe("Product Controller", () => {
      it("GET / Get user List ", (done) => {
        request(app)
          .get("/api/user")
          .expect(200)
          .end((err: any, response: { body: any; }) => {
            let user = response.body[0];
            expect(user).to.have.property('userName').to.equal('Rahul Satija');
            done(err); 
          });
      });
  
      it('POST / user', (done) => {
        request(app)
          .post('/api/user')
          .send(mockUserPostBody)
          .expect(200)
          .end((err: any, response: { body: any; }) => {
            let userList  : User [] = response.body;
           expect(userList.length).to.equal(3);
           done(err);
          });
      });
  
    });
