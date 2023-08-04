import { RESPONSE_OK } from './../constants'

export default function onMessage() {
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    const isFromContentScript = Boolean(sender.tab)

    if (isFromContentScript) {
      console.log('Received message in background from a content script:' + sender.tab.url)
      console.log(request)
      // Handle request
      sendResponse({ [RESPONSE_OK]: true })
    } else {
      console.log('Received message in background from the extension')
      console.log(request)
      // Handle request
      sendResponse({ [RESPONSE_OK]: true })
    }
  })
}
