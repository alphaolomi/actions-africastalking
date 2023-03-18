import * as process from 'process'
import * as cp from 'child_process'
import * as path from 'path'
import {expect, test} from '@jest/globals'
import {Client} from '../src/client'
test('true is true', () => {
  expect(true).toBe(true)
})

test('Client is defined', () => {
  expect(Client).toBeDefined()
})

// test('Client can send sms', async () => {
//   const client = new Client('API_KEY', 'USERNAME', 'FROM')
//   const result = await client.sendSms(['+2557XXXX'], 'Hello World')
//   expect(result).toBeDefined()
// })

// test('test runs', () => {
//   process.env['INPUT_AT_API_KEY'] = 'API_KEY'
//   process.env['INPUT_AT_USERNAME'] = 'USERNAME'
//   process.env['INPUT_FROMPHONENUMBER'] = 'INFO'
//   process.env['INPUT_TOPHONENUMBER'] = '+2557XXXX'
//   process.env['INPUT_MESSAGE'] = 'Hello World'
//   const np = process.execPath
//   const ip = path.join(__dirname, '..', 'lib', 'main.js')
//   const options: cp.ExecFileSyncOptions = {env: process.env}

//   console.log(cp.execFileSync(np, [ip], options).toString())
// })
