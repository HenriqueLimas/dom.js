
# Dom.js [![Build Status](https://travis-ci.org/HenriqueLimas/dom.js.svg?branch=master)](https://travis-ci.org/HenriqueLimas/dom.js)

A JavaScript library that encapsulate DOM methods and makes more easy DOM manipulations.

## Quick start
Run the following command in a shell:
```bash
npm install dom.js --save
```
This will install the DomJs library files in your project's ```node_modules``` folder.

Refer to these files by adding a a ```<script>``` element into your HTML pages:
```html
<script src="node_modules/dom.js/dist/d.min.js"></script>
```

## Examples
Creating elements:
```html
<body>
  <div class="container"></div>
  <script>
    // find the container element using selector expression.
    var container = djs('.container');

    // create an h1 element and append into container.
    container.create('<h1>Hello World</h1>');
  </script>
</body>

```

Creating elements using template literal (ES2015):
```html
<body>
  <div class="container"></div>
  <script>
    // find the container element using selector expression.
    let container = djs('.container');

    let jedis = [
      {name: 'Luke Skywalker'},
      {name: 'Yoda'}
    ];

    let jedisHtml = djs`
      <ul>
        ${jedis.map((jedi) => {
          // Using $$ to escape the html.
          return djs`<li>$${jedi.name}</li>`
        })}
      </ul>
    `
    // create the element and append into container.
    container.create(jedisHtml);
  </script>
</body>

```
## API

### djs(selector):
***Description*** Find an element using query selector.

***Parameters***:
  - ```selector```(String): A selector expression to find in the DOM.

***Return*** [DJS element](#djs-element) that represent an element found in the DOM.

***Example***:
```javascript
var element = djs('.my-class');
```
<hr>

### djs\`template\`:
**Description** Create a [DJS element](#djs-element) and return it.

**Parameters**:
  - ```template``` (Template Literal): A HTML Template Literal that represent an element to create.

**Return** [DJS element](#djs-element) with the element created.

**Example**:
```javascript
var element = djs`<h1>Hello World</h1>`;
```
<hr>

### djs.find(selector):
***Description*** Find an element using query selector.

***Parameters***:
  - ```selector```(String): A selector expression to find in the DOM.

***Return*** [DJS element](#djs-element) that represent an element found in the DOM.

***Example***:
```javascript
var element = djs.find('.my-class');
```
<hr>

### djs.findAll(selector):
***Description*** Find all elements in the DOM using query selector.

***Parameters***:
  - ```selector```(String): A selector expression to find in the DOM.

***Return*** [NodeList](https://developer.mozilla.org/en/docs/Web/API/NodeList) that represent an element found in the DOM.

***Example***:
```javascript
var elements = djs.findAll('div');
```
<hr>

### djs.create(template):
***Description*** Create a [DJS element](#djs-element) and return it.

***Parameters***:
  - ```template``` (String | Template Literal): A HTML Template Literal or string that represent an element to create.

***Return*** [DJS element](#djs-element) with the element created.

***Example***:
```javascript
var element = djs.create(`<h1>Hello World</h1>`);
```
<hr>

### djs.remove(node):
**Description** Remove the element from the DOM.

***Parameters***:
  - ```node```([DJS element](#djs-element) | [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node))
**Return** [DJS element](#djs-element) with the element removed.

***Example***:
```javascript
var element = djs('body').create('<h1>Hello World</h1>');
djs.remove(element);
```
<hr>

### DJS element
***Description*** An DJS element is a [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node) element that has also the djs methods.

#### Methods
### element.find(selector):
***Description*** Find an element using query selector and ```element``` as the root node.

***Parameters***:
  - ```selector```(String): A selector expression to find in the DOM.

***Return*** [DJS element](#djs-element) that represent an element found in the DOM.

***Example***:
```javascript
var body = djs('body');
body.find('.my-class');
```
<hr>

### element.findAll(selector):
***Description*** Find all elements in the DOM using query selector and ```element``` as the root node.

***Parameters***:
  - ```selector```(String): A selector expression to find in the DOM.

***Return*** [NodeList](https://developer.mozilla.org/en/docs/Web/API/NodeList) that represent an element found in the DOM.

***Example***:
```javascript
var body = djs('body');
body.findAll('.my-class');
```
<hr>

### element.create(template):
**Description** Create a [DJS element](#djs-element), return it and append into ```element```.

**Parameters**:
  - ```template``` (String | Template Literal): A HTML Template Literal or string that represent an element to create.

**Return** [DJS element](#djs-element) with the element created.

***Example***:
```javascript
var body = djs('body');
body.create('<h1>Hello World</h1>');
```
<hr>

### element.remove():
**Description** Remove the element from the DOM.

**Return** [DJS element](#djs-element) with the element removed.

***Example***:
```javascript
var element = djs('body').create('<h1>Hello World</h1>');
element.remove();
```
<hr>
