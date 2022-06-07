/*
Implementation for hash map using JavaScript Map.
Varies from a hash table because there are no buckets.
Keys and values are stored directly in the hash map.

*/

class CredentialsMap {
  values: Map<string, string>

  constructor() {
    this.values = new Map()
  }

  signup(username: string, password: string) {
    if (!username || !password) return

    if (this.values.get(username)) return

    this.values.set(username, password)
  }

  authenticate(username: string, password: string): boolean {
    const actualPassword = this.values.get(username)

    return password === actualPassword
  }
}

module.exports = CredentialsMap

export {}
