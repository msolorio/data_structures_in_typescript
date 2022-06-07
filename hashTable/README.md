# Uses for a Hash Table

Hash tables allow for performing insertion, deletion, and search in constant time - O(1).

Recommended for algorithms that prioritize search and data retrieval operations.

## Common uses
- database indexing
- caches
- data lookup in an unsorted array

## Hash Tables vs Trees
Trees useful for storing sorted / ordered data.
- Average and Worse Case - O(log(n))

Hash tables useful for storing randomly sorted data.
- Average - O(1)
- Worse case - O(n) - when all values stored at the same hash


## Hash Function
- Takes items key and returns a hash
- determines where to store the data in the hash table.
- Limits the storage of the data to the boundaries of the hash table

## Handling Hash table collisions
Hash function can generate same hash for more than 1 key.

### Linear Probing
If a hash is already filled search for an empty space at the next hash or a defined offset value.

### Chaining
Each hash stores multiple key/value pairs.
- Each hash points to another data structure such as a linked list or a tree for storing multiple key/value pairs.
- Every entry at that hash will be inserted into the data structure.

Allows for constant time hashing

Greatly increases performance but costly in terms of space.

### Resizing Table Array
When a threshold number of items are inserted, double the size of the table, reducing the chance of collisions.

Function to resize table is costly.

Common convention - 0.6 threshold - when 60% of table is filled, resize table.

### Double Hashing


## Further Reading
https://www.educative.io/blog/data-strucutres-hash-table-javascript
