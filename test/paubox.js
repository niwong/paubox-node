"use strict";

const expect = require("chai").expect;
const assert = require("chai").assert;
const paubox = require("../lib/paubox.js");
const config = require("./data/config.js");

let messageDefaults = {
  from: "renee@undefeatedgames.com",
  to: "jonathan@paubox.com",
  subject: "Test Runner",
  text: "Text content"
};

describe("Paubox.options", () => {
  it("should return options object", () => {
    let result = paubox(config);

    expect(result.options.apiKey).to.equal(config.apiKey);
  });

  it("should raise an error when apiKey is missing", () => {
    function missingKey() {
      return paubox({});
    }
    assert.throws(missingKey, Error, "apiKey is missing.");
  });

  it("should raise an error when endpointUsername is missing", () => {
    function missingUsername() {
      return paubox({ apiKey: "test" });
    }
    assert.throws(missingUsername, Error, "endpointUsername is missing.");
  });

  // it('creates a new message instance', function() {
  //   let pb = paubox(config);
  //   let message = pb.message(messageDefaults)
  //
  // });
});