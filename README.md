<h1 align="center">📨 Africastalking SMS Action</h1>

<p align="center">A GitHub Action to send a text message to mobile number of choice using Africastalking Programmable SMS</p>

## Usage

1. Create a `.github/workflows/sms.yml` file in your repository.
2. Add the following content to the `sms.yml` file:

```yaml
name: SMS Notification
on:
  pull_request:

jobs:
  smsNotification:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: alphaolomi/actions-africastalking@main
        with:
          fromPhoneNumber: 'INFO' # or secrets.fromPhoneNumber
          toPhoneNumber: ${{ secrets.toPhoneNumber }}
          message: 'Hello World'
        env:
          AT_API_KEY: ${{ secrets.AT_API_KEY }}
          AT_USERNAME: ${{ secrets.AT_USERNAME }}
```

1. Add the following secrets to your repository:

- `AT_API_KEY` - Your Africastalking API Key
- `AT_USERNAME` - Your Africastalking Username

## Inputs

- `AT_API_KEY` **Required**. You can get this from the [Africastalking's Dashboard](https://account.africastalking.com).
- `AT_USERNAME` **Required**. Use 'sandbox' as the value for development in the test environment
- `fromPhoneNumber` **Required**. The name or number the message will appear to be sent from. This can be a valid phone number or an alphanumeric string. For example, INFO or +255711XXXYYY.
- `toPhoneNumber` **Required**. The mobile number the message will be sent to. This should include the country code, without any leading zeros. For example, 255711XXXYYY for a Tanzanian number.
- `message` **Required**. The text content of the message. The maximum characters allowed is 160 per message. If you exceed this limit, the message will be split into multiple messages, each of which will be charged separately.

## Outputs

- `messageId` - The ID of the message sent

## Authors

- [@alphaolomi](https://github.com/alphaolomi)
- [Contributors](https://github.com/alphaolomi/action-africastalking/graphs/contributors)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/alphaolomi/action-africastalking/issues).

## If you like this project

Give a ⭐️ if this project helped you!

## 📝 License

This project is [MIT](LICENSE) licensed.
