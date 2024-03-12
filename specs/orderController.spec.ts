import request  from "supertest";
import { app } from "../server";
import { expect } from "chai";
import { mockOrderPostBody } from "../mockData/mockpostbody";
import { Order } from "../models/order";


    describe("Order Controller", () => {
      it("GET / Get Order List ", (done) => {
        request(app)
          .get("/api/order")
          .expect(200)
          .end((err: any, response: { body: any; }) => {
            expect(response.body).length.to.be.equal(2);
            let order = response.body[0];
            expect(order).to.have.property('orderSKU').to.equal('SKU987');
            expect(order).to.have.property('modeOfPayment').to.equal('CREDIT CARD');
            expect(order).to.have.property('userId').to.equal('USR123');
            done(err); 
          });
      });
  
      it('POST / Order', (done) => {
        request(app)
          .post('/api/order')
          .send(mockOrderPostBody)
          .expect(200)
          .end((err: any, response: { body: any; }) => {
            let orderList  : Order [] = response.body;
           expect(orderList.length).to.equal(3);
           done(err);
          });
      });
  
    });
