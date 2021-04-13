const Promise = require('./MyPromise.js').default

new Promise((resolve) => {
  console.log('custom promise')
  setTimeout(() => {
    resolve(123)
  }, 1000)
}).then(res => {
  console.log(res)
  return 111
}).then(res => {
  console.log('121212121', res)
  return new Promise((resolve) => resolve('hahha'))
}).then(res => {
  console.log(res)
})

new Promise((resolve) => {
  console.log('custom promise')
  resolve(123)
}).then(res => {
  console.log(res)
  return 111
}).then(res => {
  console.log('121212121', res)
  return new Promise((resolve) => resolve('hahha'))
}).then(res => {
  console.log(res)
})

Promise.resolve(123).then(res => {
  console.log('single promise resolve', res)
})

