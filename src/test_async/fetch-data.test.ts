import {fetchData} from './fetch-data';


// Don't do this! The test will always pass, even if the data passed to the callback is not 1000.
test('the data is 100 wrong way', () => {
  function callback(data){
    expect(data).toBe(1000);
  }

  fetchData(callback);
})

// This test will fail, since the data passed to callback is 100, not 1000.
test('the data is 100 correct way',done => {
  function callback(data) {
    try {
      expect(data).toBe(100);
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
})