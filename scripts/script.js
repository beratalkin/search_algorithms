class Node {
    constructor(value, parentNode = null) {
        this.value = value;
        this.children = [];
        this.parent = parentNode;
    }
}

class BinaryTree {

    constructor(root) {
        this.root = new Node(root);
        this.nodes = [this.root];
    }


    addChild(value, parentNode) {
        const newChild = new Node(value, parentNode);
        this.nodes.push(newChild);
        parentNode.children.push(newChild);
    }
}

var tree = new BinaryTree(0);
var index = 1;
tree.addChild(index++, tree.nodes[0]);
tree.addChild(index++, tree.nodes[0]);
tree.addChild(index++, tree.nodes[0]);
tree.addChild(index++, tree.nodes[2]);
tree.addChild(index++, tree.nodes[2]);
tree.addChild(index++, tree.nodes[2]);
tree.addChild(index++, tree.nodes[4]);
tree.addChild(index++, tree.nodes[4]);

var addTextField = document.getElementById("addText");
var goalTextField = document.getElementById("goalText");
var depthTextField = document.getElementById("depthIndex");

document.getElementById("addBtn").onclick = function () { addNode(parseInt(addTextField.value, 10)) }
document.getElementById("bfsButton").onclick = function () { animate(0) };
document.getElementById("idsButton").onclick = function () { animate(1) };
document.getElementById("bidButton").onclick = function () { animate(2) };

var id = null;

function addNode(value) {
    console.log(value);
    var element = document.getElementById(value).parentNode;
    if (tree.nodes[value].children.length == 0) {
        var newElement = document.createElement("ul");
        newElement.innerHTML = '<li> <a href="#" id = "' + index + '"><span>' + index + '</span></a> </li>'
        element.append(newElement);
    } else {
        var newElement = document.createElement("li");
        newElement.innerHTML = '<a href = "#" id= "' + index + '"><span>' + index + '</span></a> </li>'
        element.children[1].append(newElement);
    }
    tree.addChild(index++, tree.nodes[value]);
}

function animate(value) {
    if (value == 0) {
        var result = bfs(tree.nodes[0], parseInt(goalTextField.value, 10));
    } else if (value == 1) {
        var depth = depthTextField.value;
        var result = ids(tree.nodes[0], parseInt(goalTextField.value, 10), depth);
    } else {
        var result = bidirectional(tree.nodes[0], tree.nodes[parseInt(goalTextField.value, 10)]);
    }
    console.log(result);
    clearInterval(id);
    id = setInterval(frame, 2000);
    var index = 0;
    var length = result.length;
    function frame() {
        let element = document.getElementById(result[index++].toString());
        if (index == length) {
            if ((result[result.length - 1] == goalTextField.value) || value == 2) {
                element.style.backgroundColor = "green";
            }else{
                element.style.backgroundColor = "red";
            }
            clearInterval(id);
        } else {
            element.style.backgroundColor = "red";
        }
    }

}




/*
var tree = new BinaryTree(0);
var index = 1;
tree.addNode(index++, tree.nodes.find(node => node.value === 0), true);
tree.addNode(index++, tree.nodes.find(node => node.value === 0), false);
tree.addNode(index++, tree.nodes.find(node => node.value === 1), true);
tree.addNode(index++, tree.nodes.find(node => node.value === 1), false);

console.log(bfs(tree.nodes[0], 2));
console.log(ids(tree.nodes[0],4));
*/