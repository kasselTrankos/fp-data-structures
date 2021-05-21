// binary tree
function BinaryTree(left, parent, right) {
    this.left = left
    this.root = this.root || parent
    this.right = right
}

// applicative :: of -> f -> a  -> f a
BinaryTree.of = function(left, parent, right) {
    return new BinaryTree(left, parent, right)
}

BinaryTree.prototype.map = function(f) {
    return new BinaryTree.of(
        f(this.left), 
        this.root instanceof BinaryTree ? this.root.map(f) : f(this.root), 
        f(this.right)
    )
}




module.exports = BinaryTree