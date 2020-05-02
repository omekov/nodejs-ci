"use strict";

const request = require("supertest");
 
const { app } = require("./server");
 
it("should return Hello Gitlab", function(done){
     
    request(app)
        .get("/")
        .expect("Hello Gitlab")
        .end(done);
});