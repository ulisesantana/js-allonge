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

      const spy = jest.fn(() => console.log('I\'ve been called'));
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

});