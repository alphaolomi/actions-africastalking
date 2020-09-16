<h1 align="center">Action Africastalking 📨</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/alphaolomi/actions-africastalking#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/alphaolomi/actions-africastalking/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/alphaolomi/actions-africastalking/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/alphaolomi/action-africastalking" />
  </a>
</p>

A GitHub Action to send a text message to mobile number of choice via AfricastalkingSMS API

### 🏠 [Homepage](https://github.com/alphaolomi/actions-africastalking#readme)

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


## Developemnt

## Install

```sh
yarn install
```

## Run tests

```sh
yarn run test
```

## Author

👤 **Alpha Olomi (https://alphaolomi.me)**

* Website: http://alphaolomi.me
* Github: [@alphaolomi](https://github.com/alphaolomi)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/alphaolomi/actions-africastalking/issues). You can also take a look at the [contributing guide](https://github.com/alphaolomi/actions-africastalking/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [Alpha Olomi (https://alphaolomi.me)](https://github.com/alphaolomi).<br />
This project is [MIT](https://github.com/alphaolomi/actions-africastalking/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_