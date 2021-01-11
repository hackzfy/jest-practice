import {fetchDataReturnPromise} from './fetch-data-return-promise';

describe('test promise', () => {
  // Don't do this!
  //this test should fail, but since we didn't return the promise, it passed unexpectedly.
  it('should always pass when returns nothing', () => {
    fetchDataReturnPromise(true).then((data) => expect(data).toBe('rejected'));
  });

  // this is the right way to test a promise

  it('should fail when returns the promise', () => {
    return fetchDataReturnPromise(true).then((data) => expect(data).toBe('resolved'));
  });

  it('should pass when promise rejected', () => {
    expect.assertions(1);
    return fetchDataReturnPromise(false).catch(error => expect(error).toMatch('rejected'))
  })

  it('should pass when the promise resolves', () => {
    return expect(fetchDataReturnPromise(true)).resolves.toBe('resolved');
  })

  it('should fail when the promise rejects', () => {
    return expect(fetchDataReturnPromise(false)).resolves.toBe('resolved')
  });

  it('the fetch fails with an error', () => {
    return expect(fetchDataReturnPromise(false)).rejects.toMatch('rejected')
  });

  it('the data is resolved', async () => {
    const data = await fetchDataReturnPromise(true);
    expect(data).toBe('resolved')
  });

  it('the error is rejected', async () => {
    expect.assertions(1);
    try{
      await fetchDataReturnPromise(false);
    }catch(e){
      expect(e).toMatch('rejected')
    }
  })

  it('await + resolves: the data is resolved', async () => {
    await expect(fetchDataReturnPromise(true)).resolves.toBe('resolved');
  })

  it('await + rejects: the error is rejected', async () => {
    await expect(fetchDataReturnPromise(false)).rejects.toMatch('rejected')
  })
});
