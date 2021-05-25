/**
 * jsx
 */

export class Greeter {
  greetNTimes(to, { from, times }) {
    return range(times).map((item) => this.greet(to, from));
  }
}

export class ConsoleGreeter extends Greeter {
  greet(to, from) {
    return `Hello, ${to} from ${from.join(',')}`;
  }
}

export class ReactGreeter extends Greeter {
  greet(to, from) {
    return (
      <div className='greeting'>
        Hello, {to} from
        {from.map((name) => (
          <Name>{name}</Name>
        ))}
      </div>
    );
  }
}

new ConsoleGreeter().greetNTimes('World', { name: ['Webstorm'], times: 3 });

const s = function () {
  return 1;
};

function* fibonacci(current = 1, next = 1) {
  yield current;
  yield* fibonacci(next, current + next);
}

const [first, second, ...rest] = take(fibonacci(), 10);

function foo(x, y, z) {
  let j;
  let i = 0;
  const x2 = { 0: 'zero', 1: 'one' };
  const a = [0, 1, 2];
  const foo = function () {};
  const asyncFoo = async (x, y, z) => {};
  const v = x.map((s) => s.length);
  if (!i > 10) {
    for (j = 0; j < 10; j++) {
      switch (j) {
        case 0:
          value = 'zero';
          break;
        case 1:
          value = 'one';
          break;
      }
      const c = j > 5 ? 'GT 5' : 'LE 5';
    }
  } else {
    j = 0;
    try {
      while (j < 10) {
        if (i == j || j > 5) {
          a[j] = i + j * 12;
        }
        i = (j << 2) & 4;
        j++;
      }
      do {
        j--;
      } while (j > 0);
    } catch (e) {
      alert('Failure: ' + e.message);
    } finally {
      reset(a, i);
    }
  }
}
