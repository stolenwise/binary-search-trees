Binary Search Trees
An educational JavaScript implementation of an un-balanced Binary Search Tree (BST).
The codebase is test-driven (Jest) and illustrates both iterative and recursive patterns for common BST operations.

Features
Category	Methods
Insertion	insert(val) • insertRecursively(val)
Search	find(val) • findRecursively(val)
Traversals	dfsPreOrder() • dfsInOrder() • dfsPostOrder() • bfs()
Helpers	Node class, duplicate-value guard, chainable API

All public methods return this where it makes sense so calls can be chained.

Installation
bash
Copy
Edit
git clone https://github.com/<your-handle>/binary-search-trees.git
cd binary-search-trees
npm install
Running Tests
bash
Copy
Edit
npm test
You should see all suites green:

sql
Copy
Edit
PASS  ./binary-search-tree.test.js
  insert
  insertRecursively
  find
  findRecursively
  dfsPreOrder
  dfsInOrder
  dfsPostOrder
  BFS
Quick Start
js
Copy
Edit
const { BinarySearchTree } = require("./binary-search-tree");

const bst = new BinarySearchTree();
bst.insert(15)
   .insert(20)
   .insert(10)
   .insert(12)
   .insert(1)
   .insert(5)
   .insert(50);

console.log(bst.dfsPreOrder());  // [15, 10, 1, 5, 12, 20, 50]
console.log(bst.dfsInOrder());   // [1, 5, 10, 12, 15, 20, 50]  <- sorted
console.log(bst.bfs());          // [15, 10, 20, 1, 12, 50, 5]
API Reference
Method	Description	Time <br>(average case)
insert(val)	Iterative insert; returns tree	O(h)
insertRecursively(val)	Recursive insert	O(h)
find(val)	Iterative search; returns node or undefined	O(h)
findRecursively(val)	Recursive search	O(h)
dfsPreOrder()	Node → Left → Right traversal	O(n)
dfsInOrder()	Left → Node → Right (sorted order)	O(n)
dfsPostOrder()	Left → Right → Node	O(n)
bfs()	Level-order traversal	O(n)

h = tree height; n = number of nodes.
Because the tree is not self-balancing, the worst-case height is n.

Project Structure
sql
Copy
Edit
.
├── binary-search-tree.js   # BST & Node classes
├── binary-search-tree.test.js
├── package.json
└── README.md
Future Work
Self-balancing variants (AVL, Red-Black, Splay).

Delete operation (remove(val)) with full test coverage.

TypeScript port for richer typings.

Benchmark harness comparing iterative vs. recursive performance.

License
MIT — see LICENSE for details.








