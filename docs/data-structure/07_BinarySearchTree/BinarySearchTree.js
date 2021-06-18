class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // insert(data): 데이터 추가
  insert(data) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // insertNode(node, data): 트리에 노드가 존재할 때 호출
  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) node.left = newNode;
      else this.insertNode(node.left, newNode);
    } else {
      if (node.right === null) node.right = newNode;
      else this.insertNode(node.right, newNode);
    }
  }

  // remove(data):  루트 노드에 데이터를 전달하여 removeNode를 호출
  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  // removeNode(node, key): 주어진 데이터가 있는 노드를 검색한 후 삭제
  removeNode(node, key) {
    if (node === null) {
      return null;
    } else if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      const aux = this.findMinNode(node.right);
      node.data = aux.data;
      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }

  // inorder(node): 중위순회
  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }

  // preorder(node): 전위순회
  preorder(node) {
    if (node !== null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  // postorder(node): 후위순회
  postorder(node) {
    if (node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }

  // findMinNode(node): 루트부터 시작해서 최소값 노드를 찾는 메서드
  findMinNode(node) {
    if (node.left === null) return node;
    else return this.findMinNode(node.left);
  }

  // getRootNode(): 루트 노드를 반환
  getRootNode() {
    return this.root;
  }

  // search(node, data): 전체 트리에서 데이터를 탐색
  search(node, data) {
    if (node === null) return null;
    else if (data < node.data) return this.search(node.left, data);
    else if (data > node.data) return this.search(node.right, data);
    else return node;
  }
}

const testBinarySearchTree = new BinarySearchTree();

testBinarySearchTree.insert(15);
testBinarySearchTree.insert(25);
testBinarySearchTree.insert(10);
testBinarySearchTree.insert(7);
testBinarySearchTree.insert(22);
testBinarySearchTree.insert(17);
testBinarySearchTree.insert(13);
testBinarySearchTree.insert(5);
testBinarySearchTree.insert(9);
testBinarySearchTree.insert(27);

//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  17

const root = testBinarySearchTree.getRootNode();

/*
  Node {
    data: 15,
    left: Node {
      data: 10,
      left: Node { data: 7, left: [Node], right: [Node] },
      right: Node { data: 13, left: null, right: null }
    },
    right: Node {
      data: 25,
      left: Node { data: 22, left: [Node], right: null },
      right: Node { data: 27, left: null, right: null }
    }
  }
*/

// testBinarySearchTree.inorder(root);
// 5 7 9 10 13 15 17 22 25 27

// testBinarySearchTree.preorder(root);
// 15 10 7 5 9 13 25 22 17 27

// testBinarySearchTree.postorder(root);
// 5 9 7 1 3 10 17 22 27 25 15

//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  17

testBinarySearchTree.remove(5);

//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//       \    /
//        9  17

testBinarySearchTree.remove(7);

//          15
//         /  \
//        10   25
//       / \   / \
//      9  13 22  27
//            /
//           17

// testBinarySearchTree.inorder(root);
// 9 10 13 15 17 22 25 27

testBinarySearchTree.remove(15);

testBinarySearchTree.inorder(root);
// 9 10 13 17 22 25 27

//          17
//         /  \
//        10   25
//       / \   / \
//      9  13 22  27
