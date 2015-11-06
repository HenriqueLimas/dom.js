import djs from './d.js';

export default function djsfy(node) {
  node.find = (string) => djs.find(string, node);
  node.findAll = (string) => djs.findAll(string, node);
  node.create = (string) => {
    let element = djs.create(string);

    node.appendChild(element);

    return element;
  };

  return node;
}