import '../styles/app.css'
import { extensionName } from './../utils/extensionData'
import Options from './Options.svelte'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const target = document.getElementById('full-page-app')!

async function render() {
  const prop = extensionName

  new Options({ target, props: { prop } })
}

document.addEventListener('DOMContentLoaded', render)
