export const set = (storeName: string, storeValue: any): void => {
  localStorage.setItem(storeName, JSON.stringify(storeValue))
}

export const get = (storeName: string): string | null => {
  return localStorage.getItem(storeName)
}

export const remove = (storeName: string): void => {
  localStorage.removeItem(storeName)
}
