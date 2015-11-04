'use strict';

function djs(string) {
  return djs.find(string);
}

djs.create = function(string) {
  let fragment = document.createDocumentFragment();
  let element = fragment.appendChild(document.createElement('div'));

  element.innerHTML = string.trim();

  if (element.childNodes.length === 1) {
    element = element.lastChild;
  }

  return djsfy(element.cloneNode(true));
};

djs.find = function(string, rootElement) {
  rootElement = rootElement || document;
  return djsfy(rootElement.querySelector(string));
};

djs.findAll = function(string, rootElement) {
  rootElement = rootElement || document;
  return rootElement.querySelectorAll(string);
};

function djsfy(node) {
  node.find = function(string) {
    return djs.find(string, node);
  };

  node.findAll = function(string) {
    return djs.findAll(string, node);
  };

  node.create = function(string) {
    let element = djs.create(string);

    node.appendChild(element);

    return element;
  };

  return node;
}
