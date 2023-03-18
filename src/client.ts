import axios from 'axios'

interface SmsRecipient {
  statusCode: number
  number: string
  status: string
  cost: string
  messageId: string
}

interface SmsResponse {
  SMSMessageData: {
    Message: string
    Recipients: SmsRecipient[]
  }
}

class Client {
  private readonly baseUrl = 'https://api.africastalking.com/version1/messaging'
  private readonly apiKey: string
  private readonly username: string
  private readonly from: string

  constructor(apiKey: string, username: string, from: string) {
    this.apiKey = apiKey
    this.username = username
    this.from = from
  }

  async sendSms(
    to: string[],
    message: string
  ): Promise<{status: string; messageId: string}> {
    const queryParams = new URLSearchParams({
      apiKey: this.apiKey,
      username: this.username,
      to: to.join(','),
      message,
      from: this.from
    })

    try {
      const response = await axios.post<SmsResponse>(
        this.baseUrl,
        queryParams.toString(),
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      )

      const recipients = response.data.SMSMessageData.Recipients
      const status = recipients[0].status
      const messageId = recipients[0].messageId

      return {status, messageId}
    } catch (error) {
      throw error
    }
  }
}

export {Client}
