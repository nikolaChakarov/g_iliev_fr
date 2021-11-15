function domElFactory(type, node, attributes) {
    const domElement = document.createElement(type);

    if (attributes !== undefined) {
        Object.assign(domElement, attributes);
    }

    if (Array.isArray(node)) {
        node.forEach(el => appendEl(el));
    } else {
        appendEl(node);
    }

    function appendEl(currentNode) {
        if (typeof currentNode === 'string' || typeof currentNode === 'number') {
            domElement.innerText = currentNode;
            return;
        }
        domElement.appendChild(currentNode);
    }
    return domElement;
}