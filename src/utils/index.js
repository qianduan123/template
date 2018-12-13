
export default {
  setItems (key,items) {
    localStorage.setItem(key, JSON.stringify(items))
  },
  getItems (key) {
    var val = localStorage.getItem(key) || '';
    return val
  },
  removeItems (key) {
    localStorage.removeItem(key)
  }
}