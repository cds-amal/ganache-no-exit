const SimpleStorage = artifacts.require("SimpleStorage");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("SimpleStorage", function (/* accounts */) {
  let subject; 
  before(async () => {
    subject = await SimpleStorage.new();
  });

  it("should have initial value of 1", async function () {
    const expectedValue = 1;
    const value = await subject.data();
    return assert.equal(expectedValue, value);
  });

  it("can set the value", async function () {
    const expectedValue = 15;
    await subject.setData(expectedValue);

    const value = await subject.data();
    return assert.equal(expectedValue, value);
  });
});
