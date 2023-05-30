class BinaryTreeNode {
    constructor(value) {
        this.l = null;
        this.r = null;
        this.parent = parent;
        this.value = value;
    }

    get height() {
        let leftHeight = this.l ? this.l.height + 1 : 0;
        let rightHeight = this.r ? this.r.height + 1 : 0;
        return Math.max(leftHeight, rightHeight);
    }
}

function traverseDFRecursivity(node, callback) {
    callback(node);

    if (node.l) {
        traverseDFRecursivity(node.l, callback);
    }

    if (node.r) {
        traverseDFRecursivity(node.r, callback);
    }
}

function traverseDF(root, callback) {
    traverseDFRecursivity(root, callback);
}
