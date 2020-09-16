# Action Africastalking

A GitHub Action to send a text message to mobile number of choice via AfricastalkingSMS API

## Usage

You can use this action after any other action. Here is an example setup of this action:

1. Create a .github/workflows/africastalking-notify.yml file in your GitHub repo.
2. Add the following code to the africastalking-notify.yml file.

```yaml
on: push
name: Africastalking Notification Demo
jobs:
  africastalkingNotification:
    name: Africastalking Notification
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Africastalking Notification
      uses: alphaolomi/action-africastalking-@master
      env:        
        AT_API_KEY: ${{ secrets.AT_API_KEY }} 
        AT_USERNAME: ${{ secrets.AT_USERNAME }} 
        AT_MOBILE_NUMBER: ${{ secrets.AT_MOBILE_NUMBER }} 
```

1. Create africastalking_api key   secret using GitHub Action's Secret. You can generate a africastalking incoming webhook token from here.

## Inputs

-  `AT_API_KEY`  **Required**. You can get this from the dashboard: https://account.africastalking.com.
-  `AT_USERNAME`  **Required**. Use 'sandbox' as the value for development in the test environment
-  `AT_MOBILE_NUMBER` **Required** Your Mobile Number to get Notification


## Outputs

### `message_status`

The notifcation message response status.

## Example usage

```yaml
uses: actions/action-africastalking@v1
with:
  AT_API_KEY: ${{ secrets.AT_API_KEY }} 
  AT_USERNAME: ${{ secrets.AT_USERNAME }} 
  AT_MOBILE_NUMBER: ${{ secrets.AT_MOBILE_NUMBER }} 
```

## License

MIT License