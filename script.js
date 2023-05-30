class BinaryTreeNode {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.parent = parent;
        this.value = value;
    }

    get height() {
        let leftHeight = this.left ? this.left.height + 1 : 0;
        let rightHeight = this.right ? this.right.height + 1 : 0;
        return Math.max(leftHeight, rightHeight);
    }
}

function traverseDFRecursive(node, callback) {
    callback(node);

    if (node.left) {
        traverseDFRecursive(node.left, callback);
    }

    if (node.right) {
        traverseDFRecursive(node.right, callback);
    }
}

function traverseDF(root, callback) {
    traverseDFRecursive(root, callback);
}
