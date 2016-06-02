var assert = require('chai').assert;
var Bank = require('../bank');
var BankAccount = require('../bank_account');


describe("Bank", function(){

  beforeEach(function(){
    bank1 = new Bank("hsbc");

    account1 = new BankAccount("Beryl", 5656, "personal");
    account2 = new BankAccount("Seumus", 55555, "personal");
    account3 = new BankAccount("Bex", 6, "personal");
    account4 = new BankAccount("Bob", 87999, "business");
    account5 = new BankAccount("Jim", 57373, "business");
  });

  it("should add account", function(){
    bank1.add(account1);
    assert.equal(1,bank1.accounts.length);
  });

  it("should find account by name", function(){
    bank1.add(account1);
    assert.equal(account1,bank1.findAccountName("Beryl"));
  });

  it("should find largest account", function(){
    bank1.add(account1);
    bank1.add(account2);
    bank1.add(account3);
    assert.equal(account2,bank1.findLargestAccount());
  });

  it("should find bank total", function(){
    bank1.add(account1);
    bank1.add(account2);
    bank1.add(account3);
    bank1.add(account4);
    bank1.add(account5);
    assert.equal(206589,bank1.totalValue());
  });

  it("should find bank total", function(){
    bank1.add(account1);
    bank1.add(account2);
    bank1.add(account3);
    assert.equal(20405.67,bank1.average());
  });

  it("should find personal total", function(){
    bank1.add(account1);
    bank1.add(account2);
    bank1.add(account3);
    bank1.add(account4);
    bank1.add(account5);
    assert.equal(61217,bank1.totalValue('personal'));
  });


})
