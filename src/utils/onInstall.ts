const onInstallCallback = async (details: chrome.runtime.InstalledDetails) => {
  console.log('Installed ✅', details)
}

export default function onInstall() {
  chrome.runtime.onInstalled.addListener((details) => {
    onInstallCallback(details)
  })
}
