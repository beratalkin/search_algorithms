function bfs(root, goal) {
    const queue = [];
    const result = [];
    queue.push(root);

    while (queue.length > 0) {
        const tempNode = queue.shift();
        result.push(tempNode.value);

        if (tempNode.value === goal) {
            break;
        }

        // Enqueue all children instead of left and right
        for (const child of tempNode.children) {
            queue.push(child);
        }
    }

    return result;
}