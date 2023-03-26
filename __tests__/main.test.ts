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

// requires a valid API_KEY, USERNAME, and FROM in env
test('Client can send sms', async () => {
  const isSandbox: boolean = true
  const client = new Client(
    process.env.API_KEY ?? '',
    process.env.USERNAME ?? 'sandbox',
    process.env.FROM ?? 'INFO',
    isSandbox
  )
  const result = await client.sendSms(['+255747991498'], 'Hello World')
  expect(result).toBeDefined()
})

test('Client can send sms to many', async () => {
  const isSandbox: boolean = true
  const client = new Client(
    process.env.API_KEY ?? '',
    process.env.USERNAME ?? 'sandbox',
    process.env.FROM ?? 'INFO',
    isSandbox
  )
  const result = await client.sendSms(
    ['+255747991498', '+255747991498'],
    'Hello World'
  )
  expect(result).toBeDefined()
})

test('test runs', () => {
  process.env['INPUT_AT_API_KEY'] = process.env.API_KEY ?? ''
  process.env['INPUT_AT_USERNAME'] = process.env.USERNAME ?? 'sandbox'
  process.env['INPUT_FROMPHONENUMBER'] = process.env.FROM ?? 'INFO'
  process.env['INPUT_TOPHONENUMBER'] = '+255747991498'
  process.env['INPUT_MESSAGE'] = 'Hello World'
  process.env['INPUT_SANDBOX'] = 'true'
  const np = process.execPath
  const ip = path.join(__dirname, '..', 'lib', 'main.js')
  const options: cp.ExecFileSyncOptions = {env: process.env}

  console.log(cp.execFileSync(np, [ip], options).toString())
})
