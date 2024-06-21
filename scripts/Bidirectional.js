function bidirectional(root, goal) {
    const queueStart = [];
    const queueGoal = [];
    const visitedStart = new Set();
    const visitedGoal = new Set();

    queueStart.push(root);
    queueGoal.push(goal);

    const result = [];

    while (queueStart.length > 0 || queueGoal.length > 0) {
        if (queueStart.length > 0) {
            const tempNodeStart = queueStart.shift();
            result.push(tempNodeStart.value);
            visitedStart.add(tempNodeStart);

            if (visitedGoal.has(tempNodeStart)) {
                break;  // Collision occurred
            }

            for (const child of tempNodeStart.children) {
                if (!visitedStart.has(child)) {
                    queueStart.push(child);
                }
            }
        }

        if (queueGoal.length > 0) {
            const tempNodeGoal = queueGoal.shift();
            result.push(tempNodeGoal.value);
            visitedGoal.add(tempNodeGoal);

            if (visitedStart.has(tempNodeGoal)) {
                break;  // Collision occurred
            }

            const parent = tempNodeGoal.parent;
            if (parent && !visitedGoal.has(parent)) {
                queueGoal.push(parent);
            }
        }
    }

    return result;
}