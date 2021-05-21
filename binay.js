//binay
const BinaryTree = require('./fp/binarytree')

const a = BinaryTree.of(1,1, 1)
const b = BinaryTree.of(2, a, 2)
const f = x => x + 3;

console.log(b.map(f))
console.log(b.root())


