import request  from "supertest";
import { app } from "../server";
import { expect } from "chai";
import { mockCaegoryPostBody } from "../mockData/mockpostbody";
import { Category } from "../models/category";


    describe("Category Controller", () => {
      it("GET / Get Category List ", (done) => {
        request(app)
          .get("/api/category")
          .expect(200)
          .end((err: any, response: { body: any; }) => {
            let category = response.body[0];
            expect(category).to.have.property('categoryName').to.equal('Electronics');
            expect(category).to.have.property('categoryDescription').to.equal('Category containing electronic products');
            done(err); 
          });
      });
  
      it('POST / Category', (done) => {
        request(app)
          .post('/api/category')
          .send(mockCaegoryPostBody)
          .expect(200)
          .end((err: any, response: { body: any; }) => {
            let categoryList  : Category [] = response.body;
           expect(categoryList.length).to.equal(4);
           done(err);
          });
      });
  
    });
