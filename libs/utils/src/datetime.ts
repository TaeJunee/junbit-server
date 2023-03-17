export const convertDatetime = (datetime: Date) => {
  const year = datetime.getFullYear()
  const month = datetime.getMonth()
  const date = datetime.getDate()
  const hour = datetime.getHours()

  return {
    year,
    month,
    date,
    hour,
  }
}
