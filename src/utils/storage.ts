export async function setStorage(value: Record<string, string | number | unknown[]>) {
  await chrome.storage.sync.set(value)
}

export async function getStorage(key: string) {
  const result = await getWholeStorage()
  return result[key]
}

export async function getWholeStorage() {
  const result = await chrome.storage.sync.get()
  return result
}

export async function clearStorage() {
  await chrome.storage.sync.clear()
}
