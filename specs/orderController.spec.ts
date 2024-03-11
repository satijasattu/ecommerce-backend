import { expect } from "chai";
import request  from "supertest";
import { app } from "../server";


    describe("Order Controller", () => {
      it("GET / Get Order List ", (done) => {
        request(app)
          .get("")
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
  
    //   it('POST / should successfully create a new item', (done) => {
    //     request(app)
    //       .post('/item/')
    //       .send(sampleItemVal)
    //       .expect(200)
    //       .end((err: any, response: { body: any; }) => {
    //         expect(response.body).to.have.property('message').to.equal('Item created successfully!');
    //         expect(response.body)
    //           .to.have.property('item')
    //           .to.have.property('name')
    //           .to.equal('sample item');
    //         expect(response.body).to.have.property('item').to.have.property('price').to.equal(10);
    //         expect(response.body).to.have.property('item').to.have.property('rating').to.equal('5');
    //         expect(response.body).to.have.property('item').to.have.property('hash').to.equal(hash);
    //         done(err);
    //       });
    //   });
  
    // //   it('PUT / should successfully update hash for a given item', (done) => {
    // //     request(app)
    // //       .put('/item')
    // //       .send(hash)
    // //       .expect(200)
    // //       .end((err: any, response: { body: any; }) => {
    // //         expect(response.body).to.have.property('message').to.equal('Item updated successfully!');
    // //         expect(response.body)
    // //           .to.have.property('item')
    // //           .to.have.property('name')
    // //           .to.equal('sample item');
    // //         expect(response.body).to.have.property('item').to.have.property('price').to.equal(10);
    // //         expect(response.body).to.have.property('item').to.have.property('rating').to.equal('5');
    // //         expect(response.body).to.have.property('item').to.have.property('hash').to.equal(hash);
    // //         done(err);
    // //       });
    //   });
    });
