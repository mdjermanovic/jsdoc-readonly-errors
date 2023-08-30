// run `npm run lint` to reproduce

/**
 * Get visitor keys of a given node.
 * @param {object} node The AST node to get keys.
 * @returns {readonly string[]} Visitor keys of the node.
 */
export function getKeys(node) {
    return Object.keys(node).filter(filterKey);
}

/**
 * @typedef {{ readonly [type: string]: ReadonlyArray<string> }} VisitorKeys
 */
