import djs from './d.js';

export default function djsfy(node) {
  if (!node) return null;

  node.find = (string) => djs.find(string, node);
  node.findAll = (string) => djs.findAll(string, node);
  node.create = (string) => {
    let element = djs.create(string);

    node.appendChild(element);

    return element;
  };

  node.remove = (nodeToRemove=node) => {
    let oldNode = djs.remove(nodeToRemove);
    node = null;

    return oldNode;
  };

  return node;
}