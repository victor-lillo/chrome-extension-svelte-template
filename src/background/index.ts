import onInstall from './onInstall'
import onMessage from './onMessage'
import onStorageChanged from './onStorageChanged'

console.log('Service worker started.')

onInstall()
onMessage()
onStorageChanged()

// Chrome onStartup example
chrome.runtime.onStartup.addListener(() => {
  console.log('Browser init')
})
