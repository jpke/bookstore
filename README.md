# Pocket BookStore

[This app](https://appetize.io/app/0d2ja651raq80n91emjr37h5tr?device=iphone5s&scale=75&orientation=portrait&osVersion=9.3) was built to serve as an example of a basic user checkout flow for an online bookstore. It currently only has client-side functionality. There is no backend.

##Features
- Users can view:
  - available books
  - previously ordered books ('Order History')
- Users can select a book from the list of available books
  - A user is then navigated through a process of inputing user information, as well as delivery and billing addresses and payment information
  - The user can review all transactional information prior to submitting the order ('Review Order')
- Once user completes transaction (stubbed here as 'Submit Order'), the available book and order history lists update.

##Run
To develop this app locally*:
- download or clone repo
- run `npm install`, then `npm start`
- open app in [Expo app](https://expo.io/)
  - or in simulator if you have xcode or andriod play installed*

*More detailed instructions are available at [Create React Native App](https://github.com/react-community/create-react-native-app)


##Technologies

| **Tech** | **Description** |
|----------|-------|
|  [React Native](https://facebook.github.io/react-native/)  |   Javascript framework for iOS and android apps   |
|  [Redux](http://redux.js.org/)  |   Application state management for react and react native   |

##
Copyright (c) 2017 JP Earnest
