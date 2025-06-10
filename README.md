# binary-search-trees

# dsa-trees

Implementations of classic tree data-structures in JavaScript, built for practice and interview prep.

| Structure    &        Key Methods Implemented |
| ---------------- |                        ----------------------- |
| General *n-ary* `Tree` & `sumValues`, `countEvens`, `numGreater` |
| Binary Search-style `BinaryTree` &  `minDepth`, `maxDepth`, `maxSum`, `nextLarger`<br>`areCousins`, `serialize`, `deserialize`, `lowestCommonAncestor` |

> **All Jest tests pass** (`npm test`).

---

## Table of Contents
1. [Getting Started](#getting-started)
2. [Project Structure](#project-structure)
3. [Usage Examples](#usage-examples)
4. [Running Tests](#running-tests)
5. [Roadmap](#roadmap)
6. [License](#license)

---

## Getting Started

```bash
git clone git@github.com:stolenwise/dsa-trees.git
cd dsa-trees
npm install     # installs Jest (dev) + any future deps
npm test        # watch all specs turn green
Project Structure
php
Copy
Edit
dsa-trees/
├── tree.js               # n-ary Tree & TreeNode
├── binary-tree.js        # BinaryTree & BinaryTreeNode
├── __tests__/            # Jest test suites
│   ├── tree.test.js
│   └── binary-tree.test.js
├── package.json
└── README.md

Usage Examples
General Tree
js
Copy
Edit
const { Tree, TreeNode } = require("./tree");

// Build:        3
//             / | \
//            1  4  5
const root = new TreeNode(3, [
  new TreeNode(1),
  new TreeNode(4),
  new TreeNode(5)
]);

const t = new Tree(root);
console.log(t.sumValues());    // → 13
console.log(t.countEvens());   // → 1
console.log(t.numGreater(3));  // → 2
Binary Tree
js
Copy
Edit
const { BinaryTree, BinaryTreeNode } = require("./binary-tree");

const root   = new BinaryTreeNode(6);
root.left    = new BinaryTreeNode(5);
root.right   = new BinaryTreeNode(5);
const btree  = new BinaryTree(root);

console.log(btree.maxDepth());       // → 2
console.log(btree.nextLarger(4));    // → 5
console.log(btree.minDepth());       // → 2
Running Tests
bash
Copy
Edit
npm test              # run entire suite
npm test -- tree      # run only tree.test.js
npm test -- -t maxSum # pattern-match specific test name
--watch is enabled by default so Jest re-runs on every save.



License
MIT © 2025 Lewis Stone

pgsql
Copy
Edit

### How to customize quickly
- Swap the MIT notice for whatever license you want.
- If you eventually publish to npm or add CI, sprinkle in status badges.
- Keep the **Roadmap** current – future you (and any collaborators) will thank you.

Drop this in, commit, push, and your repo will look polished to anyone who lands on it.
