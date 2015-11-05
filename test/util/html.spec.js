import {default as html} from '../../src/util/html.js';

describe('html', () => {
  it('should return a html string.', () => {
    expect(html`<h1>Hello</h1>`).toBe('<h1>Hello</h1>');
  });

  it('should resolve the template string inside the template.', () => {
    let test = 42;
    expect(html`<h1>${html`<div>${test}</div>`}</h1>`).toBe('<h1><div>42</div></h1>');
  });

  it('should escape the template when using double "$".', () => {
    expect(html`<div>$${'& &'}</div>`).toBe('<div>&amp; &amp;</div>');
    expect(html`<div>$${'> >'}</div>`).toBe('<div>&gt; &gt;</div>');
    expect(html`<div>$${'< <'}</div>`).toBe('<div>&lt; &lt;</div>');
    expect(html`<div>$${'" "'}</div>`).toBe('<div>&quote; &quote;</div>');
    expect(html`<div>$${'\' \''}</div>`).toBe('<div>&#39; &#39;</div>');
    expect(html`<div>$${'` `'}</div>`).toBe('<div>&#96; &#96;</div>');
  });
});