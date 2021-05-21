// binary tree
function BinaryTree(value, right, left) {
    this.left = left
    this.value = value
    this.right = right
}

// applicative :: of -> f -> a  -> f a
BinaryTree.of = function(value) {
    return new BinaryTree(value)
}

BinaryTree.prototype.map = function(f) {
    return new BinaryTree.of(
        f(this.left), 
        this.value instanceof BinaryTree ? this.value.map(f) : f(this.value), 
        f(this.right)
    )
}
BinaryTree.prototype.insert = function(value) {

    if(value >= this.value ) {
       if(this.right instanceof BinaryTree) this.right.insert(value)
       else this.right = BinaryTree.of(value)
    }
    if(value < this.value) {
        if(this.left instanceof BinaryTree) this.left.insert(value)
        else this.left = BinaryTree.of(value)
    }
    
    return this
}




// f => f a ~> (a -> Boolean) -> f a
BinaryTree.prototype.filter = function (f) {

}


BinaryTree.prototype.extract = function() {
    return this.value
}



module.exports = BinaryTree