/*
Implementation of a Hash Table with Bucket chaining for handling hash collisions.

Time Complexity
Accessing Items
Best case - O(1) - Item is only one stored at hash
Worst case - O(n) - every item gets stored at the same hash

*/

class BucketEntry {
  username: string
  password: string

  constructor(username: string, password: string) {
    this.username = username
    this.password = password
  }
}

class CredentialsHashTable {
  values: Map<number, BucketEntry[]>
  size: number
  length: number

  constructor() {
    this.values = new Map()
    this.size = 10
    this.length = 0
  }


  calculateHash(key: string): number {
    return key.length % this.size
  }


  addEntry(username: string, password: string): BucketEntry[] {
    
    const newEntry = new BucketEntry(username, password)
    
    const hash = this.calculateHash(username)
    
    let entryList: BucketEntry[] = this.values.get(hash)
    
    if (!entryList) {
      this.values.set(hash, [])
      entryList = this.values.get(hash)
    }
    
    entryList.push(newEntry)
    this.length += 1

    return entryList
  }

  authenticate(username: string, password: string) {
    const hash = this.calculateHash(username)

    const entryList = this.values.get(hash)

    if (!entryList) return false

    const user = entryList.find((entry) => entry.username === username)

    if (!user) return false

    return user.password === password
  }
}

module.exports = {
  BucketEntry,
  CredentialsHashTable
}

export {}