class BinaryTreeNode {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.par = parent;
        this.val = value;
    }

    get height() {
        let leftHeight = this.left ? this.left.height + 1 : 0;
        let rightHeight = this.right ? this.right.height + 1 : 0;
        return Math.min(leftHeight, rightHeight);
    }
}

function travDFRecursive(node, callback) {
    callback(node);

    if (node.left) {
        travDFRecursive(node.left, callback);
    }

    if (node.right) {
        travDFRecursive(node.right, callback);
    }
}

function traverseDF(root, callback) {
    travDFRecursive(root, callback);
}
