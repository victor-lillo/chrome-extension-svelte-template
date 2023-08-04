<script lang="ts">
  import Button from '../components/Button.svelte'

  export let prop: string

  const openOptionsPage = () => {
    chrome.runtime.openOptionsPage()
  }

  const sendMessage = async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
    console.log(tab)
    const response = await chrome.tabs.sendMessage(tab.id, { greeting: 'hello' })
    // do something with response here
    console.log(response)
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
