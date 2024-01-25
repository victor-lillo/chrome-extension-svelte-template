import onInstall from '../utils/onInstall'
import onMessage from '../utils/onMessage'
import onStorageChanged from '../utils/onStorageChanged'

console.log('Service worker started.')

const onInstallCallback = async (details: chrome.runtime.InstalledDetails) => {
  console.log('Installed ✅', details)
}

onInstall(onInstallCallback)
onMessage()
onStorageChanged()

// Chrome onStartup example
chrome.runtime.onStartup.addListener(() => {
  console.log('Browser init')
})
