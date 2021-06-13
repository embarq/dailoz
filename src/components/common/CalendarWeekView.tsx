import React, { useEffect, useState } from 'react'
import { IonButton } from '@ionic/react'
import classNames from 'classnames'

import startOfISOWeek from 'date-fns/startOfISOWeek'
import endOfISOWeek from 'date-fns/endOfISOWeek'
import eachDayOfInterval from 'date-fns/eachDayOfInterval'
import isValid from 'date-fns/isValid'
import format from 'date-fns/format'
import isSameDay from 'date-fns/isSameDay'

import { isCallable } from '../../utils/common'

interface CalendarWeekViewCell {
  date: number
  weekDayLabel: string
  dayLabel: string
  isSelected: boolean
}

type Props = {
  selectedDate: Date
  onSelectDate?: (date: Date) => unknown
}

const CalendarWeekView: React.FC<Props> = ({ selectedDate, onSelectDate }) => {
  const [weekDays, setWeekDays] = useState<ReadonlyArray<CalendarWeekViewCell>>(
    []
  )

  useEffect(() => {
    if (isValid(selectedDate)) {
      const days = eachDayOfInterval({
        start: startOfISOWeek(selectedDate),
        end: endOfISOWeek(selectedDate),
      })
      setWeekDays(
        days.map(
          (date): CalendarWeekViewCell => ({
            weekDayLabel: format(date, 'EEEEEE'),
            dayLabel: format(date, 'd'),
            date: date.getTime(),
            isSelected: isSameDay(date, selectedDate),
          })
        )
      )
    }
  }, [selectedDate])

  return (
    <div className="flex">
      {weekDays.length > 0 &&
        weekDays.map(({ date, weekDayLabel, dayLabel, isSelected }) => (
          <IonButton
            fill="clear"
            key={date}
            onClick={() =>
              isCallable(onSelectDate) && onSelectDate(new Date(date))
            }
            style={{ '--border-radius': '12px' }}
            className="ion-button-unstyled transform-gpu transition-transform ease-in-out duration-75 active:scale-90">
            <div
              className={classNames(
                'flex flex-col items-center justify-center w-12 py-3 rounded-xl',
                'transition-colors ease-in-out duration-100 active:bg-indigo-50',
                { 'bg-indigo-500': isSelected },
                isSelected ? 'text-white' : 'text-gray-700'
              )}>
              <span className="uppercase font-medium">{weekDayLabel}</span>
              <span className="text-sm mt-1">{dayLabel}</span>
            </div>
          </IonButton>
        ))}
    </div>
  )
}

export default CalendarWeekView
