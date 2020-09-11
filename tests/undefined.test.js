describe('undefined', () => {
  it('JSON.stringify(undefined) returns undefined',  () => {
    expect(JSON.stringify(undefined)).not.toBe('undefined'); // this what do you expect
    expect(JSON.stringify(undefined)).toBe(undefined); // but JS is tricky sometimes
    expect(JSON.stringify()).toBe(undefined); // same thing different flavour
    expect(JSON.stringify(() => 42)).toBe(undefined); // also happens with any non-JSON value
  });
});