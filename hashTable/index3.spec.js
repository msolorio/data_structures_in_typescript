const deepLog = require('../utils/deepLog')
const { expect } = require('chai');
const {
  BucketEntry,
  CredentialsHashTable
} = require('./index3.js')

describe('HashTable/index3 - CrentialsHashTable.addEntry()', () => {
  it('0 - should add a user to the hash table', () => {
    const ht = new CredentialsHashTable()
    const testuser = {
      username: 'testuser1',
      password: '1234'
    }

    const entryList = ht.addEntry(testuser.username, testuser.password)
    expect(ht.length).to.equal(1)
    expect(entryList.length).to.equal(1)
    expect(entryList[0]).to.deep.equal({
      username: testuser.username,
      password: testuser.password
    })
  });
});

describe('HashTable/index3 - CrentialsHashTable.authenticate()', () => {
  it('0 - should add a user to the hash table', () => {
    const ht = new CredentialsHashTable()
    const testuser = {
      username: 'testuser1',
      password: '1234'
    }

    ht.addEntry(testuser.username, testuser.password)
    
    const result = ht.authenticate(testuser.username, testuser.password)

    expect(result).to.equal(true)
  });
});
