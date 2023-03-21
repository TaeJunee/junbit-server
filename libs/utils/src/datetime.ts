export const resolveDatetime = (datetime: string) => {
  const baseTime = new Date(datetime)
  const year = baseTime.getFullYear()
  const month = baseTime.getMonth()
  const date = baseTime.getDate()
  const hour = baseTime.getHours()

  return {
    year,
    month,
    date,
    hour,
  }
}
