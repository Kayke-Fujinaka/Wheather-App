import { formatDate } from '../utils/formatDate'

describe('Token Generator', function () {
  test('The format date cannot be equal to anything', () => {
    expect(formatDate('2022-07-21')).not.toBe('')
  })

  test('The data formated is string', () => {
    expect(typeof formatDate('2022-07-21')).toBe('string')
  })

  test('The data formated 20/07/22', () => {
    expect(formatDate('2022-07-20')).toBe('20/07/22')
  })
})
