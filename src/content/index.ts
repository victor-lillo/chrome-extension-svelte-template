// Some global styles on the page
// import './styles.css'

// Some JS on the page
// storage.get().then(console.log)
console.log('Some comment on the page 😎')

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(sender.tab ? 'from a content script:' + sender.tab.url : 'from the extension')

  if (request.greeting == 'hello') {
    sendResponse({ farewell: 'goodbye' })
  }
})

// Some svelte component on the page
// new Counter({ target: document.body })
