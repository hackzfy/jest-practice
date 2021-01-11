export function fetchDataReturnPromise(success = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
       success ? resolve('resolved'): reject('rejected')
    })
  })
}