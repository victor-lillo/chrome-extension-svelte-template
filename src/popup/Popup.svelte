<script lang="ts">
  import Button from '../components/Button.svelte'
  import { MESSAGE_OBJECT } from '../constants'

  export let prop: string

  const openOptionsPage = () => {
    chrome.runtime.openOptionsPage()
  }

  const sendMessage = async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
    const response = await chrome.tabs.sendMessage(tab.id, { [MESSAGE_OBJECT.key]: MESSAGE_OBJECT.value })
    console.log('The response is:', response)
  }
</script>

<section>
  Popup {prop}
  <Button handleClick={sendMessage} variant="alert">Send message</Button>
  <Button handleClick={openOptionsPage}>Open options</Button>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-width: var(--width-popup);
  }
</style>
