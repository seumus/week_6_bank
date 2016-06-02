var Bank = function(name){
  this.name = name;
  this.accounts = [];
}

Bank.prototype = {
  add: function(account) {
    this.accounts.push(account);
  },
  findAccountName: function(name) {
    for (var i = 0; i < this.accounts.length; i++) {
      if (this.accounts[i].name === name) {
        return this.accounts[i];
      }
    }
  },
  findLargestAccount: function() {
    largestAccount = this.accounts[0]
    for (var i = 0; i < this.accounts.length; i++) {
      if (this.accounts[i].balance > largestAccount.balance) {
        largestAccount = this.accounts[i]
      }
    }
    return largestAccount
  },
  totalValue: function(type) {
    total = 0
    if(type === undefined) {
      accounts = this.accounts;
    }
    else {
      accounts = this.groupAccountbyType(type)
    }
    for (var i = 0; i < accounts.length; i++) {
      total += accounts[i].balance;
    }
    return total;
  },
  average: function() {
    i = this.totalValue() / this.accounts.length;
    return i.toFixed(2)
  },
  groupAccountbyType: function(type) {
    typeArray = [];
    for (var i = 0; i < this.accounts.length; i++) {
      if (this.accounts[i].type === type) {
        typeArray.push(this.accounts[i])
      }
    }
  return typeArray;
  }

}

module.exports = Bank;
