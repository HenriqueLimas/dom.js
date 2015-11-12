import djs from '../src/djs/d.js';

describe('djs', () => {
  it('should find an element in the DOM.', () => {
    let elementInTheDom = document.createElement('div');
    elementInTheDom.classList.add('in_the_dom');

    document.querySelector('body').appendChild(elementInTheDom);

    expect(djs('.in_the_dom')).toBe(elementInTheDom);
    djs('.in_the_dom').remove();
  });

  describe('create():', () => {
    let stringHtml;

    beforeEach(() => {
      stringHtml = `
        <div class="in_the_dom">Hello</div>
      `;
    });

    it('should create an element from string.', () => {
      let element = djs.create(stringHtml);

      expect(element.textContent).toBe('Hello');
      expect(element.classList.contains('in_the_dom')).toBe(true);
    });

    it('should add the djs methods in the node.', function() {
      let element = djs.create(stringHtml);

      expect(element.find).toBeDefined();
      expect(element.findAll).toBeDefined();
      expect(element.create).toBeDefined();
    });

    describe('when the string has more than one node', () => {
      let stringHtml;

      beforeEach(() => {
        stringHtml = `
          <h1 class="first"></h1>
          <p class="second"></p>
        `;
      });

      it('should create a parent div element.', () => {
        let element = djs.create(stringHtml);

        expect(element.tagName).toBe('DIV');
        expect(element.childElementCount).toBe(2);
      });
    });
  });

  describe('remove():', () => {
    it('should remove the element from the parent.', () => {
      let element = djs('body').create('<div id="remove-me"></div>');

      expect(djs('body').find('#remove-me')).not.toBeNull();

      djs.remove(element);

      expect(djs('body').find('#remove-me')).toBeNull();
    });

    it('should return the old object.', () => {
      let element = djs('body').create('<div id="remove-me"></div>');

      let oldElement = djs.remove(element);

      expect(oldElement).toBe(element);
    });
  });

  describe('find():', () => {
    it('should find an element in the DOM.', () => {
      let elementInTheDom = document.createElement('div');
      elementInTheDom.classList.add('in_the_dom');

      document.querySelector('body').appendChild(elementInTheDom);

      expect(djs.find('.in_the_dom')).toBe(elementInTheDom);
      djs('.in_the_dom').remove();
    });

    it('should add the djs methods in the node.', function() {
      expect(djs.find('body').find).toBeDefined();
      expect(djs.find('body').findAll).toBeDefined();
      expect(djs.find('body').create).toBeDefined();
    });
  });

  describe('findAll():', () => {
    it('should find all the child node in the DOM.', () => {
      let firstElement = document.createElement('div');
      let secondElement = document.createElement('div');

      firstElement.classList.add('in_the_dom');
      secondElement.classList.add('in_the_dom');

      djs('body').appendChild(firstElement);
      djs('body').appendChild(secondElement);

      expect(djs.findAll('.in_the_dom')).toEqual(jasmine.any(NodeList));

      djs.remove(firstElement);
      djs.remove(secondElement);
    });
  });

  describe('node.find():', () => {
    it('should call the djs.find method passing the element.', () => {
      spyOn(djs, 'find');

      let element = djs.create('<div />');

      element.find('.find_class');

      expect(djs.find).toHaveBeenCalledWith('.find_class', element);
    });
  });

  describe('node.findAll():', () => {
    it('should call the djs.find method passing the element.', () => {
      spyOn(djs, 'findAll');

      let element = djs.create('<div />');

      element.findAll('.find_class');

      expect(djs.findAll).toHaveBeenCalledWith('.find_class', element);
    });
  });

  describe('node.create():', () => {
    it('should call the djs.create method passing the html string.', () => {
      spyOn(djs, 'create').and.callThrough();

      let element = djs.create('<div />');

      element.create('<div/>');

      expect(djs.create).toHaveBeenCalledWith('<div/>');
    });

    it('should create the element and append in the parent.', () => {
      let element = djs.create('<div/>');

      element.create('<h1>Created</h1>');

      expect(element.lastChild.textContent).toBe('Created');
    });
  });

  describe('node.css():', () => {
    it('should call the djs.css method passing the object with cssStyles.', () => {
      spyOn(djs, 'css');

      let element = djs.create('<div />');
      let cssStyles = {
        backgroundColor: 'red'
      };

      element.css(cssStyles);

      expect(djs.css).toHaveBeenCalledWith(element, cssStyles);
    });
  });

  describe('node.remove():', () => {
    it('should call the djs.remove method passing the node.', () => {
      spyOn(djs, 'remove').and.callThrough();

      let element = djs('body').create('<div />');

      element.remove();

      expect(djs.remove).toHaveBeenCalledWith(element);
    });

    it('should return the old object.', () => {
      let element = djs('body').create('<div id="remove-me"></div>');

      let oldElement = element.remove();

      expect(oldElement).toBe(element);
    });
  });
});