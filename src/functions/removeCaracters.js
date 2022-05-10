export const removeCaracteres = (text) => {
  return text.replace(/<\/?[^>]+(>|$)/g, '')
}
