/**
 * ts
 */

function buzz() {
  return 0;
}

const x = 1;
const y = 2;
const foregroundColor = 'transparent';
const highlightColor = 'lime';
const font = 'Arial';
/*
 Multiline
   C-style
     Comment
 */
const myLink = { img: 'btn.gif' };
const local = true;
const initial = -1;

const foo = {
  numbers: ['one', 'two', 'three', 'four', 'five', 'six'],
  data: {
    a: {
      id: 123,
      type: 'String',
      isAvailable: true
    },
    b: {
      id: 456,
      type: 'Int'
    }
  },
  // fBar : function (x,y);
  fOne: function (a, b, c, d, e, f, g, h) {
    const x = a + b + c + d + e + f + g + h;
  },

  chainedCallSample: function (a, b, c, d, e, f) {},
  callArgumentsSample: function () {
    this.fTwo('one', 'two', 'three', 'four');
    this.fThree(
      {
        strA: 'a',
        strB: 'b',
        strC: 'c',
        strD: 'd'
      },
      'strE'
    );
    [1, 2, 3].reduce(function (previousValue, currentValue) {
      return previousValue + currentValue;
    }, 10);
  },
  /**
   * Function JSDoc. Long lines can be wrapped with 'Comments'/'Wrap at right margin' option
   * @param {string} a Parameter A description.
   * @param {string} b Parameter B description. Can extend beyond the right margin.
   */
  fTwo: function (a, b, c, d) {
    return c;
    if (a == 'one' && (b == 'two' || c == 'three')) {
      return a + b + c + d;
    }
    if (a == 'one') {
      return 1;
    } else if (a == 'two') {
      return 2;
    }
    let number = -10;
    while (x < 0) {
      number = number + 1;
    }
    do {
      number = number + 1;
    } while (number < 10);
    return d;
  },

  fThree: function ({ strA, strB, strC, strD }, strE) {
    const number = prompt('Enter a number:', '0');
    switch (number) {
      case '0':
        alert('Zero');
        break;
      case '1':
        alert('One');
        break;
    }
    try {
      const s = 10;
    } catch (e) {
      alert('Failure: ' + e.message);
    }
    return strA + strB + strC + strD + strE;
  }
};
