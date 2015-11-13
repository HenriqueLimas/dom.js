import {css, addClass} from '../../src/djs/styles.js';

describe('DJSStyles', () => {
  describe('css(node, cssStyles):', () => {
    it('should edit the styles attribute with all the cssStyles passed.', () => {
      let element = document.createElement('div');
      let cssStyles = {
        backgroundColor: 'red',
        float: 'left'
      };

      css(element, cssStyles);

      expect(element.style.backgroundColor).toBe('red');
      expect(element.style.float).toBe('left');
    });

    it('should return the node element.', () => {
      let element = document.createElement('div');
      let cssStyles = {
        'backgroundColor': '#424242'
      };

      let assertElement = css(element, cssStyles);

      expect(assertElement).toBe(element);
    });

    it('should add prefix properties.', () => {
      let mockHtmlElm = {
        style: {
          msGridRow: ''
        }
      };

      let cssStyles = {
        gridRow: 42
      };

      css(mockHtmlElm, cssStyles);

      expect(mockHtmlElm.style.msGridRow).toBe(42);
    });

    describe('when pass a null node element', () => {
      it('should return null.', () => {
        expect(css(null, {key: 1})).toBe(null);
      });
    });

    describe('when pass an undefined node element,', () => {
      it('should return null.', () => {
        expect(css()).toBe(null);
      });
    });

    describe('when the node element is a comment', () => {
      it('should return null.', () => {
        let comment = document.createComment('Comment');
        expect(css(comment)).toBe(null);
      });
    });

    describe('when the node element is a textNode', () => {
      it('should return null.', () => {
        let text = document.createTextNode('Text');
        expect(css(text)).toBe(null);
      });
    });

    describe('when the node does not have the style propertie,', () => {
      it('should return null.', () => {
        let element = {
          style: undefined
        };

        expect(css(element)).toBe(null);
      });
    });
  });
  
  describe('addClass(node, className:)', () => {
    it('should add the class into node.', () => {
      let element = document.createElement('div');
      addClass(element, 'first-class');

      let assert = 'first-class';
      expect(element.getAttribute('class')).toBe(assert);

      assert +=  ' second-class';
      addClass(element, 'second-class');
      expect(element.getAttribute('class')).toBe(assert);
    });

    it('should does not repeat classes.', () => {
      let element = document.createElement('div');
      addClass(element, 'first-class');

      let assert = 'first-class';
      addClass(element, 'first-class');
      expect(element.getAttribute('class')).toBe(assert);
    });

    it('should return the element reference.', () => {
      let element = document.createElement('div');
      let assert = addClass(element, 'first-class');

      expect(assert).toBe(element);
    });

    describe('when pass an array', () => {
      it('should add all the class into node.', () => {
        let element = document.createElement('div');
        addClass(element, ['first-class', 'second-class']);

        let assert = 'first-class second-class';
        expect(element.getAttribute('class')).toBe(assert);
      });

      it('should does not repeat classes.', () => {
        let element = document.createElement('div');
        addClass(element, ['first-class', 'first-class']);

        let assert = 'first-class';
        expect(element.getAttribute('class')).toBe(assert);
      });
    });

    describe('when pass an empty string', () => {
      it('should throw an SyntaxError', () => {
        expect(function() {
          let element = document.createElement('div');
          addClass(element, '');
        }).toThrowError('djs.addClass(): Empty strings are not valid class name');
      });
    });
  });
});