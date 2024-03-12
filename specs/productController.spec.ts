import request  from "supertest";
import { app } from "../server";
import { expect } from "chai";
import { mockProductPostBody } from "../mockData/mockpostbody";
import { Product } from "../models/product";


    describe("Product Controller", () => {
      it("GET / Get Product List ", (done) => {
        request(app)
          .get("/api/product")
          .expect(200)
          .end((err: any, response: { body: any; }) => {
            let product = response.body[0];
            expect(product).to.have.property('productName').to.equal('Laptop');
            expect(product).to.have.property('productDescription').to.equal('Dell Laptop');
            done(err); 
          });
      });
  
      it('POST / product', (done) => {
        request(app)
          .post('/api/product')
          .send(mockProductPostBody)
          .expect(200)
          .end((err: any, response: { body: any; }) => {
            let productList  : Product [] = response.body;
           expect(productList.length).to.equal(4);
           done(err);
          });
      });
  
    });
