describe('The first sip: Basic Functions', () => {
  describe('As Little As Possible About Functions, But No Less', () => {
    it('a function value is a reference type', () => {
      expect((() => {
      }) === (() => {
      })).toBe(false);

      const fn = () => {
      };
      expect(fn === fn).toBe(true);
      expect(fn === (() => {
      })).toBe(false);
      expect(fn).toBeInstanceOf(Function);
    });

    it('the comma operator takes two or more arguments and itself evaluates to the value of the right-hand argument', () => {
      expect((() => (2 + 2, 3 + 3))()).toBe(6);
      expect((() => (2 + 2, 3 + 3, 1 + 1))()).toBe(2);

      const spy = jest.fn( );
      (() => (spy(), 1 + 1, 2 + 2))();
      expect(spy).toBeCalled();
    });

    it('a void function returns undefined', () => {
      const voidFunction = () => {
      };
      expect(voidFunction()).toBe(undefined);

      const functionReturningVoid = () => {
        const num = Math.random() * 100;
        return void num;
      };
      expect(functionReturningVoid()).toBe(undefined);
    });
  });

  describe('Ah. I’d Like to Have an Argument, Please', () => {
    it('a function can have one argument', () => {
      const computeCircumference = (diameter) => diameter * Math.PI;

      expect(computeCircumference(2)).toBeCloseTo(6.28);
      expect(computeCircumference.length).toBe(1); // gets function arity

    });

    it('a function can have multiple arguments', () => {
      const addTwoNumbers = (x,y) => x + y;

      expect(addTwoNumbers(2,3)).toBe(5);
      expect(addTwoNumbers.length).toBe(2);
    });

    it('a function arity can be checked', () => {

      function addEmoji(emoji, text) {
        //arguments works fine for regular functions, but not for arrow functions
        if (arguments.length !== 2) {
          throw new Error('Check the arguments you are passing to 😡');
        } else {
          return `${emoji} ${text} ${emoji}`;
        }
      }
      expect(() => addEmoji('🎉', 'Let\'s celebrate!!')).not.toThrowError();
      expect(() => addEmoji()).toThrowError();

      const add = (...nums) => nums.reduce((acc, n) => acc + n, 0);
      expect(add(2,3,4,5)).toBe(14);
      // the rest operator makes the function arity counts as 0
      expect(add.length).toBe(0);

    });

    it('a function will not modify a primitive passed as argument', () => {
      const num = 10;
      const times2 = n => {
        n = n * 2;
        return n;
      };
      const num2 = times2(num);
      expect(num).toBe(10);
      expect(num2).toBe(20);
    });

    it('a function will modify a reference passed as argument', () => {
      const original = {
        a: 10,
        b: 20
      };

      const times2 = n => {
        n.a = n.a * 2;
        n.b = n.b * 2;
        return n;
      };

      const modified = times2(original);
      expect(original).toStrictEqual(modified);
    });

    it('a function will not modify a reference passed as argument if you create a new one', () => {
      const original = {
        a: 10,
        b: 20
      };

      const times2 = n => {
        n = {
          a: n.a * 2,
          b: n.b * 2
        };
        return n;
      };

      const modified = times2(original);
      expect(original).not.toStrictEqual(modified);
      expect(original.a).toBe(10);
      expect(modified.a).toBe(20);
    });

  });

  describe('Closures and Scope', () => {
    it('a closure binds variables to it\'s own environment', () => {
      const times = x => y => x * y;
      const times2 = times(2);

      expect(times2(5)).toBe(10);
    });

    it('an ancestor can be shadowed because JavaScript is always looking for the closest scope', () => {
      const sum = x => (x, y) => x + y;
      const uselessCurrying = sum(10);

      expect(uselessCurrying(2,3)).toBe(5);
    });
  });
});