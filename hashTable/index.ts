const deepLog = require('../utils/deepLog')
// Hash Tables

// Hash tables allow for storing values and accessing them in constant time
// Hash tables are similar to Maps in JavaScript
// Hash tables and Maps have a benefit over Objects in that
// - keep the insertion order of key/value pairs
// - can store any value as the key in the key/value pair
// - perform better for frequent additions and removals


// Time complexity of hash table
// Search, inserting, deleting items
// Average - O(1) - we can find the item directly at the hash, no need to loop through values.
// Worst - O(n) - If key value pairs are stored in list within each bucket, and all the key/value pairs get stored in the same bucket, then we need to loop through the items.

interface ValuesType {
  [key: number]: { [key: string]: string }
}

class HashTable {
  values: ValuesType // stores key/value pairs
  // length: number // max num of items in a bucket
  size: number // number of buckets in hash table

  constructor() {
    this.values = {}
    // this.length = 0
    this.size = 10
  }


  calculateHash(key: any) {
    return (key.toString().length * 7) % this.size
  }


  add(key: string, value: string) {
    const hash = this.calculateHash(key)

    if (!this.values.hasOwnProperty(hash)) {
      this.values[hash] = {}
    }

  this.values[hash][key] = value    
  }


  search(key: string) {
    const hash = this.calculateHash(key)

    if (this.values[hash] && this.values[hash][key]) {
      return this.values[hash][key]
    } else {
      return null
    }
  }
}


const hashTable = new HashTable()

hashTable.add('Sam', 'tomatos')
hashTable.add('Julie', 'salads')
hashTable.add('Jon', 'pizza')

const jonsVal = hashTable.search('Jon')

deepLog(hashTable)
console.log(jonsVal)

