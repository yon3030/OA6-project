import React, { FC, memo, useCallback, useState } from "react"
import { formatDate, getDaysInMonth, isPastDay, isWeekend } from "./helpers"
import { Button } from "./Button"

interface CalendarProps {
  onShowForm: () => void
  setSelectedDate: (date: string) => void
}

const renderDaysOfWeek = () => {
  // const daysOfWeek = ["M", "T", "W", "T", "F", "S", "S"]
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  return daysOfWeek.map((day) => (
    <span key={day} className="text-white text-[14px] non-italic text-left">
    {/* <span className="text-white text-[14px] non-italic text-left"> */}
      {day}
    </span>
  ))
}

export const Calendar: FC<CalendarProps> = memo(({ onShowForm, setSelectedDate }) => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDay, setSelectedDay] = useState<number | null>(null)

  const handleDayClick = (day: number) => {
    setSelectedDay(day)
  }
  const bookHandler = useCallback(() => {
    // eslint-disable-next-line no-unused-expressions
    if (selectedDay && onShowForm) {
      const newSelectedDate = formatDate(
        new Date(currentDate.getFullYear(), currentDate.getMonth(), selectedDay),
      )
      setSelectedDate(newSelectedDate)
      onShowForm()
    }
  }, [selectedDay, currentDate, onShowForm, setSelectedDate])

  const renderDays = () => {
    const days = []
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const firstDayOfMonth = new Date(year, month, 1).getDay()
    const daysInMonth = getDaysInMonth(year, month)

    for (let i = 1; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="emptyDay" />)
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const weekend = isWeekend(year, month, day)
      const pastDay = isPastDay(year, month, day)
      const isSelected = day === selectedDay
      days.push(
        <Button
          key={day}
          className={`${weekend || pastDay ? "w-[33px] h-[33px] text-[14px] non-italic bg-[#151515] p-0 text-[#414141] cursor-default" : "w-[33px] h-[33px] text-[14px] non-italic bg-[#151515] p-0 text-white"} ${isSelected ? "rounded-[50%] bg-[#20d795]" : ""}`}
          onClick={() => handleDayClick(day)}
          disabled={weekend || pastDay}
        >
          {day}
        </Button>,
      )
    }

    return days;
  }

  const handleMonthChange = (offset: number) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1)
    setCurrentDate(newDate)
    setSelectedDay(null)
  }

  return (
    <div className="flex flex-col items-center justify-start w-full gap-[10px] p-3">
      <div className="bg-[#151515] flex flex-col rounded-[20px] justify-center items-center gap-[10px] h-fit w-full py-[10px] px-0">
        <div className="h-[35px] w-full flex items-center justify-between py-0 px-[10px]">
          <Button className="bg-[#151515] leftArrow" onClick={() => handleMonthChange(-1)} />
          <div className="flex items-center justify-center gap-[15px]">
            <span className="text-white text-center text-[16px] font-normal non-italic leading-[22px]">{currentDate.toLocaleString("en-US", { month: "long" })}</span>
            <span className="text-white text-center text-[16px] font-normal non-italic leading-[22px]">{currentDate.getFullYear()}</span>
          </div>
          <Button className="bg-[#151515] rightArrow" onClick={() => handleMonthChange(1)} />
        </div>
        <div className="h-[32px] grid grid-cols-7 w-full place-items-center">{renderDaysOfWeek()}</div>
        <div className="grid w-full grid-cols-7">{renderDays()}</div>
      </div>
    </div>
  )
})
