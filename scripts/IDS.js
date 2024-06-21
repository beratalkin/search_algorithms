function ids(root, goal, depth) {

    while (true) {
        const result = dls(root, goal, depth, []);
        if (result !== null) {
            return result;
        }
    }
}

function dls(node, goal, depth, result) {
    const stack = [];
    stack.push({ node, depth });

    while (stack.length > 0) {
        const { node, depth } = stack.pop();

        result.push(node.value);

        if (node.value === goal) {
            return result;
        }

        if (depth > 0) {
            for (const child of node.children) {
                stack.push({ node: child, depth: depth - 1 });
            }
        }
    }

    return result;
}