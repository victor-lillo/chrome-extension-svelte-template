import '../styles/app.css'
import { extensionName } from './../utils/extensionData'
import Popup from './Popup.svelte'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const target = document.getElementById('app')!

async function render() {
  const prop = extensionName
  new Popup({ target, props: { prop } })
}

document.addEventListener('DOMContentLoaded', render)
