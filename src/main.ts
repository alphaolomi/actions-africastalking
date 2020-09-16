import * as core from '@actions/core'
import * as github from '@actions/github'
import {Client} from 'africastalking-ts'

async function run(): Promise<void> {
  try {
    // Get AT API Keys from     
    const AT_API_KEY = core.getInput('AT_API_KEY')
    const AT_USERNAME = core.getInput('AT_USERNAME')
    const AT_MOBILE_NUMBER = core.getInput('AT_MOBILE_NUMBER')

    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2)

    // Send Message
    const client = new Client({
      apiKey: AT_API_KEY,
      username: AT_USERNAME
    })

    client
      .sendSms({
        to: [AT_MOBILE_NUMBER],
        message: `Hello, a new commit`
      })
      .then(response => {
        console.log(`Response: ${response}`)
        core.setOutput('message_status', response)
      })
      .catch(error => console.log(error))

    // Log event to console
    console.log(`The event payload: ${payload}`)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
