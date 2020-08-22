export function isLater(dateString) {
  const [d, m, y] = dateString.split("/")

  return new Date(`${m}-${d}-${y}`).getTime() > new Date().getTime()
}
