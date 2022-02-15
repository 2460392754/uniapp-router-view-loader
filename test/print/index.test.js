import { getPrintID, print } from '../../src/utils'
import ErorrId from '../../src/errorId'

test('打印log类型', () => {
    let printMsg = ''

    console.log = (msg) => {
        printMsg = msg;
    };

    const msg = 'is test'
    print('log', msg)

    expect(printMsg).toBe(getPrintID() + msg)
})

test('打印error类型', () => {
    expect(() => {
        print('error', ErorrId[10001])
    }).toThrow(ErorrId[10001])
})