export const pi = Math.PI;

export function power(x, y) {
  return x ** y;    //ES7 지수 연산자
}

export class Foo {
  #private = 10;

  foo() {
    const { a, b, ...x } = { ...{ a: 1, b: 2 }, c: 3, d: 4 };

    return { a, b, x };
  }

  bar() {
    return this.#private;
  }
}
