//binay
const BinaryTree = require('./fp/binarytree')

const a = BinaryTree.of(5)


console.log(
    JSON.stringify(
        a.insert(7).insert(12).insert(2).insert(3).insert(10).insert(4).insert(3).insert(16)
        , null, 4
    )
)

console.log(a.extract())