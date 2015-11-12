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