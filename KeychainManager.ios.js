const React = require('react-native');
const { NativeModules } = React;

const KeychainManager = NativeModules.UICKeychainStoreManager;

// Sets the access group on the default keychain
exports.setAccessGroup = (accessGroup) => {
  return new Promise((resolve, reject) => {
    KeychainManager.setAccessGroup(accessGroup, (error) => {
      if (error) {
        return reject(error)
      }

      return resolve()
    })
  })
}

// Sets the service on the default keychain.
exports.setService = (service) => {
  return new Promise((resolve, reject) => {
    KeychainManager.setService(service, (error) => {
      if (error) {
        return reject(error)
      }

      return resolve()
    })
  })
}

// Stores the values of `string` in `key`, returning a promise.
exports.setString = (string) => {
    return new Promise((resolve, reject) => {
      KeychainManager.setString(string, key, (error) => {
        if (error) {
          return reject(error)
        }

        return resolve()
      })
    })
  }

// Retrieves the value at `key`, returning a promise.
exports.stringForKey = (key) => {
  return new Promise((resolve, reject) => {
    KeychainManager.stringForKey(key, (error, result) => {
      if (error) {
        return reject(error)
      }

      return resolve(result)
    })
  })
}
