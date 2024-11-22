export const formatDate = (date: Date) => {
  return date
    .toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/(\d+)\/(\d+)\/(\d+)/, "$2.$1.$3")
}
export const isWeekend = (year: number, month: number, day: number) => {
  const dayOfWeek = new Date(year, month, day).getDay()
  return dayOfWeek === 0 || dayOfWeek === 6
}

export const isPastDay = (year: number, month: number, day: number) => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const dateToCheck = new Date(year, month, day)
  dateToCheck.setHours(0, 0, 0, 0)

  return dateToCheck < today
}

export const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate()
}
