// Edge / IE
const MS = 'ms';
// Chrome / Safari
const WEBKIT = 'webkit';
// Firefox
const MOZ = 'moz';
// Opera
const O = 'o';
const XV = 'xv';
// KDE
const KHTML = 'khtml'; 

const PREFIXIES = [MS, WEBKIT, MOZ, O, XV, KHTML];

const CSS_PREFIXED = {
  float: 'cssFloat'
};

export function css(node, cssStyles) {
  if (!node || node.nodeType === 8 || node.nodeType === 3 || !node.style) {
    return null;
  }

  for (let key in cssStyles) {
    if (Object.hasOwnProperty.call(cssStyles, key)) {
      let keyPrefixed = getStyleWithPrefixKey({
        styleList: node.style, 
        styleToCheck: key
      });

      if (keyPrefixed) {
        node.style[keyPrefixed] = cssStyles[key];
      }
    }
  }

  return node;
}

export function addClass(node, classList) {
  let currentClassList = node.getAttribute('class') || '';

  classList = parseArray(classList) || [];

  if (classList instanceof Array){
    for (let i = 0, length = classList.length; i < length; i++) {
      if (!classList[i].trim()) {
        throw new SyntaxError('djs.addClass(): Empty strings are not valid class name');
      }

      if (!containsClass(currentClassList, classList[i])) {
        currentClassList += ' ' + classList[i].trim();
      }
    }
  }

  node.setAttribute('class', currentClassList.trim());

  return node;
}

function containsClass(classList, classToCheck) {
  classList = parseArray(classList);

  for (let i = 0, length = classList.length; i < length; i++) {
    if (classList[i].trim() === classToCheck.trim()) {
      return true;
    }
  }

  return false;
}

function parseArray(classList) {
  if (typeof classList === 'string') {
    classList = classList.split(' ');
  }

  return classList;
}

function getStyleWithPrefixKey({styleList, styleToCheck}) {
  if (styleToCheck in styleList) {
    return styleToCheck;
  }

  if (styleToCheck in CSS_PREFIXED) {
    return CSS_PREFIXED[styleToCheck];
  }

  for (let i = 0, length = PREFIXIES.length; i < length; i++) {
    let styleWithPrefix = `${PREFIXIES[i]}${styleToCheck[0].toUpperCase()}${styleToCheck.substring(1)}`;

    if (styleWithPrefix in styleList) {
      CSS_PREFIXED[styleToCheck] = styleWithPrefix;
      return CSS_PREFIXED[styleToCheck];
    }
  }

  return false;
}