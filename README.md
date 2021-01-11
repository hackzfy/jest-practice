# jest-practice

## callback and promise

- if you are testing a promise, return it at the end of the test function. Otherwise it will always pass.
- if you are testing a promise in an async test function, you don't have to return it. Async function always returns promise.
- if you are testing a promise that will rejects using the `.catch` method, be sure to write `expect.assertions(1)` to ensure the assertion in the `.catch()` method is called.
- I think the easiest way to test promise is using the async function and jest's `resolves` and 'rejects` method.

```js
test('the data is peanut butter', async () => {
  await expect(fetchData()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  await expect(fetchData()).rejects.toThrow('error');
});
```

## setup and teardown

- Do setup and teardown inside before\* and after\* handlers rather than inside the describe blocks.


