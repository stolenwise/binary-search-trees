class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {

    if (!this.root) {
      this.root = new Node(val);
      return this;
    }
    let current = this.root;

    while (true) {
      /* ----- LEFT side (already correct) ----- */
      if (val < current.val) {
        if (current.left === null) {
          current.left = new Node(val);
          return this;                 // <— attach & exit
        } else {
          current = current.left;      // <— keep walking left
        }
  
      /* ----- RIGHT side (add / verify this block) ----- */
      } else if (val > current.val) {          // <— this test line
        if (current.right === null) {          // landing zone?
          current.right = new Node(val);       // attach new node
          return this;                         // important: exit!
        } else {
          current = current.right;             // keep descending right
        }
  
      /* ----- Duplicate guard (optional) ----- */
      } else {                                 // val === current.val
        return this;                           // ignore duplicates
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {

    if (!this.root) {
      this.root = new Node(val);
      return this;
    }
    
    let traverse = (current) => {
      if (val < current.val) {
        if (current.left === null) {
          current.left = new Node(val);
          return;
        } else {
          traverse(current.left);
        }
      } else if (val > current.val) {
        if (current.right === null) {
          current.right = new Node(val);
          return;
        } 
          traverse(current.right);
        } else {
          return;
        }
     
      };
      traverse(this.root)
      return this;
     
    }

  

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {

    if (!this.root) return undefined;
    let current = this.root;

    while (current) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        return current;
      }
    }
    return undefined;


  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {

    if (!this.root) return undefined;
    
    let traverse = (current) => {
      if (val < current.val) {
        if (current.left === null) {
          return undefined;
        } else {
          return traverse(current.left);
        }
      } else if (val > current.val) {
        if (current.right === null) {
          return undefined;
        } else {
          return traverse(current.right);
        }
      } else {
        return current;
      }
      

    }
    return traverse(this.root);

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    /* Goal: return an array of values in pre-order:
       Node ➜ Left ➜ Right                              */
  
    const visited = [];        // ← where you collect results
  
    const traverse = (current) => {
      if (current === null) return;   // base case (empty branch)

      
      
      visited.push(current.val);           // record THIS node
      traverse(current.left);              // then step left
      traverse(current.right);             // then step right
    };
  
    traverse(this.root);
    return visited;

  
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {

    const visited = [];        // ← where you collect results
    const traverse = (current) => {
      if (current === null) return;   // base case (empty branch)

      traverse(current.left);              // then step left
      visited.push(current.val);           // record THIS node
      traverse(current.right);             // then step right

      };
      traverse(this.root);
      return visited;
  }

  

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const visited = [];        // ← where you collect results
    const traverse = (current) => {
      if (current === null) return;   // base case (empty branch)
      traverse(current.left);              // then step left
      traverse(current.right);             // then step right
      visited.push(current.val);           // record THIS node
      
    };
      traverse(this.root);
      return visited;

  
    }


  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {

    const visited = [];        // ← where you collect results
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      let current = queue.shift();
      visited.push(current.val);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return visited;

  }

//   /** Further Study!
//    * remove(val): Removes a node in the BST with the value val.
//    * Returns the removed node. */

//   remove(val) {

//   }

//   /** Further Study!
//    * isBalanced(): Returns true if the BST is balanced, false otherwise. */

//   isBalanced() {

//   }

//   /** Further Study!
//    * findSecondHighest(): Find the second highest value in the BST, if it exists.
//    * Otherwise return undefined. */

//   findSecondHighest() {
    
//   }
  }


module.exports = BinarySearchTree;
