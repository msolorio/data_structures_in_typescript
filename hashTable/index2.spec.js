const { expect } = require('chai');
const CredentialsMap = require('./index2.js')

describe('HashTable/index2 - CredentialsMap', () => {
  it('0 - should create a hash table', () => {
    const credentialsMap = new CredentialsMap()
    expect(credentialsMap.values).to.be.a('Map')
  });
});

describe('HashTable/index2 - CredentialsMap.signup', () => {
  it('0 - should add a username and password record', () => {
    const credentialsMap = new CredentialsMap()
    const testuser = {
      username: 'testuser',
      password: '1234'
    }

    credentialsMap.signup(testuser.username, testuser.password)

    const password = credentialsMap.values.get(testuser.username)

    expect(password).to.equal(testuser.password)
  });


  it('1 - should not overwrite record if username already exists', () => {
    const credentialsMap = new CredentialsMap()
    const testuser = {
      username: 'testuser',
      password: '1234'
    }

    credentialsMap.signup(testuser.username, testuser.password)
    credentialsMap.signup(testuser.username, '5555')

    const password = credentialsMap.values.get(testuser.username)

    expect(password).to.equal(testuser.password)
  });

  it('2 - should not create user if username is empty', () => {
    const credentialsMap = new CredentialsMap()
    const testuser = {
      username: '',
      password: '1234'
    }

    credentialsMap.signup(testuser.username, testuser.password)

    const password = credentialsMap.values.get(testuser.username)

    expect(password).to.equal(undefined)
  });

  it('3 - should not create user if password is empty', () => {
    const credentialsMap = new CredentialsMap()
    const testuser = {
      username: 'testuser',
      password: ''
    }

    credentialsMap.signup(testuser.username, testuser.password)

    const password = credentialsMap.values.get(testuser.username)

    expect(password).to.equal(undefined)
  });
});

describe('HashTable/index2 - CredentialsMap.authenticate', () => {
  it('0 - should return true if credentials are correct', () => {
    const credentialsMap = new CredentialsMap()
    const testuser = {
      username: 'testuser',
      password: '1234'
    }
    
    credentialsMap.values.set(testuser.username, testuser.password)

    const response = credentialsMap.authenticate(testuser.username, testuser.password)

    expect(response).to.equal(true)
  });

  it('1 - should return false if username is incorrect', () => {
    const credentialsMap = new CredentialsMap()
    const testuser = {
      username: 'testuser',
      password: '1234'
    }
    
    credentialsMap.values.set(testuser.username, testuser.password)

    const response = credentialsMap.authenticate('codecrusher', testuser.password)

    expect(response).to.equal(false)
  });

  it('2 - should return false if password is incorrect', () => {
    const credentialsMap = new CredentialsMap()
    const testuser = {
      username: 'testuser',
      password: '1234'
    }
    
    credentialsMap.values.set(testuser.username, testuser.password)

    const response = credentialsMap.authenticate(testuser.username, '5555')

    expect(response).to.equal(false)
  });
});
