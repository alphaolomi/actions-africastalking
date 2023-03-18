import * as core from '@actions/core'
import {Client} from './client'

async function run(): Promise<void> {
  const AT_API_KEY = core.getInput('AT_API_KEY') || process.env.AT_API_KEY || ''
  const AT_USERNAME =
    core.getInput('AT_USERNAME') || process.env.AT_USERNAME || ''

  const fromPhoneNumber = core.getInput('fromPhoneNumber')
  const toPhoneNumber = core.getInput('toPhoneNumber')
  const message = core.getInput('message')

  const client = new Client(AT_API_KEY, AT_USERNAME, fromPhoneNumber)

  try {
    core.debug('Sending SMS')
    const result = await client.sendSms([toPhoneNumber], message)
    core.debug('SMS sent!')
    core.setOutput('messageId', result.messageId)
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message)
    }
    core.debug('SMS failed!')
  }
}

export default run

run()
