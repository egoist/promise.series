const promiseSeries = require('./')

const sleep = timeout => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(new Date())
      resolve()
    }, timeout)
  })
}

// each item returns a Promise
promiseSeries([
  () => sleep(1000),
  () => sleep(2000)
]).then(() => {
  console.log('Completed')
})
