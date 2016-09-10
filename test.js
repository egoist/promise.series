import test from 'ava'
import promiseSeries from './'

const sleep = (fn = () => {}, timeout = 1000) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(fn())
    }, timeout)
  })
}

test('main', async t => {
  let text = 'foo'
  const result = await promiseSeries([
    () => sleep(() => {
      text += 'bar'
      return text
    }, 300),
    () => sleep(() => {
      text += 'foo'
      return text
    }, 100)
  ])
  t.is(result, 'foobarfoo')
})

test('tasks is not an array', t => {
  t.throws(promiseSeries({}), TypeError)
})
