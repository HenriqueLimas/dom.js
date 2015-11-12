import html from '../util/html.js';
import {create, remove} from './manipulation.js';
import {find, findAll} from './find.js';
import {css} from './styles.js';

function djs(template, ...substs) {
  if (typeof template === 'string') {
    return find(template);
  } else if(Array.isArray(template)) {
    return html(template, ...substs);
  }
}

djs.create = create;
djs.css = css;
djs.find = find;
djs.findAll = findAll;
djs.remove = remove;

export default djs;
