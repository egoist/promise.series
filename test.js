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
  const result = await promiseSeries([
    v => sleep(() => {
      return v + 'bar'
    }, 300),
    v => sleep(() => {
      return v + 'foo'
    }, 100)
  ], 'foo')
  t.is(result, 'foobarfoo')
})

test('tasks is not an array', async t => {
  await t.throws(promiseSeries({}), TypeError)
})
