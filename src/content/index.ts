import { MESSAGE_OBJECT } from './../constants'
// Some global styles on the page
// import './styles.css'

// Some JS on the page
// storage.get().then(console.log)
console.log('Some comment in the page 😎')

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  const isFromContentScript = Boolean(sender.tab)

  console.log(
    isFromContentScript
      ? 'Received message from a content script:' + sender.tab.url
      : 'Received message from the extension'
  )

  if (request[MESSAGE_OBJECT.key] === MESSAGE_OBJECT.value) {
    sendResponse({ farewell: 'goodbye' })
  }
})

// Some svelte component on the page
// new Counter({ target: document.body })
