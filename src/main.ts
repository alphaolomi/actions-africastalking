import * as core from '@actions/core'
import * as github from '@actions/github'

async function run(): Promise<void> {
  try {
    const nameToGreet = core.getInput('who-to-greet')

    console.log(`Hello ${nameToGreet}!`)
    const time = new Date().toTimeString()

    // make output
    core.setOutput('time', time)

    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2)

    //
    console.log(`The event payload: ${payload}`)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
