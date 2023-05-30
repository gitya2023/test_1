class BinaryTreeNode {
    constructor(value) {
        this.le = null;
        this.ri = null;
        this.parent = parent;
        this.value = value;
    }

    get height() {
        let leftHeight = this.le ? this.le.height + 1 : 0;
        let rightHeight = this.ri ? this.ri.height + 1 : 0;
        return Math.max(leftHeight, rightHeight);
    }
}

function traverseDFR(node, callback) {
    callback(node);

    if (node.le) {
        traverseDFR(node.le, callback);
    }

    if (node.ri) {
        traverseDFR(node.ri, callback);
    }
}

function traverseDF(root, callback) {
    traverseDFR(root, callback);
}
