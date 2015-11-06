import html from './util/html.js';

function djs(template, ...substs) {
  if (typeof template === 'string') {
    return djs.find(template);
  } else if(Array.isArray(template)) {
    return html(template, ...substs);
  }
}

djs.create = (string) => {
  let fragment = document.createDocumentFragment();
  let element = fragment.appendChild(document.createElement('div'));

  element.innerHTML = string.trim();

  if (element.childNodes.length === 1) {
    element = element.lastChild;
  }

  return djsfy(element.cloneNode(true));
};

djs.find = (string, rootElement=document) => {
  return djsfy(rootElement.querySelector(string));
};

djs.findAll = (string, rootElement=document) => {
  return rootElement.querySelectorAll(string);
};

function djsfy(node) {
  node.find = (string) => djs.find(string, node);
  node.findAll = (string) => djs.findAll(string, node);
  node.create = (string) => {
    let element = djs.create(string);

    node.appendChild(element);

    return element;
  };

  return node;
}

export default djs;
