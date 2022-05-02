const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');


class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  root() {
    return this.root
  }

  add(data) {
    this.root = addNewEl(this.root, data);

    function addNewEl(node, data) {
      if (!node) {
        return new Node(data);

      }

      if (node.data === data) {
        return node.data;
      }

      if (data < node.data) {
        node.left = addNewEl(node.left, data);
      } else {
        node.right = addNewEl(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    console.log('dddddddddddddddd')

    return hasEl(this.root, data);

    function hasEl(node, data) {
      if (node === null) {
        return false;
      }
      if (node.data === data) {
        return true;
      } else {
        return data < node.data ? hasEl(node.left, data) : hasEl(node.right, data);

      }
    }
  }
  find(data) {
    let cur = this.root;
    if (!cur) {
      return null;
    }
    while (cur.data !== data) {
      if (data < cur.data) {
        cur = cur.left;
      } else {
        cur = cur.right;
      }
      if (!cur) {
        return null;
      }
    }
    return cur;
  }

  remove(data) {
    this.root = removeEl(this.root, data);

    function removeEl(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeEl(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeEl(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;

        node.right = removeEl(node.right, minRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.root) {
      return null;
    }

    let node = this.root;
    while (node.left) {
      node = node.left;
    }

    return node.data
  }

  max() {
    if (!this.root) {
      return null;
    }

    let node = this.root;
    while (node.right) {
      node = node.right;
    }

    return node.data
  }
}

module.exports = {
  BinarySearchTree
};