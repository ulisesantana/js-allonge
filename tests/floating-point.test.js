describe('floating point', () => {
  it('precision errors', () => {
    expect(0.1 + 0.1).toBe(0.2); // this makes sense

    /**
    * This happens because for a computer the internal representation
    * for a floating point number is binary, while our literal number is
    * in base ten. This makes no meaningful difference for integers, but
    * it does for fractions, because some fractions base 10 do not have
    * exact representations base 2.
    */
    expect(0.1 + 0.2).toBe(0.30000000000000004);
  });
});