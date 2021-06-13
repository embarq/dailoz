import React, { useEffect, useState } from 'react'
import { IonButton, IonIcon } from '@ionic/react'
import { chevronBackOutline, chevronForwardOutline } from 'ionicons/icons'
import classNames from 'classnames'

import {
  isValid,
  format,
  startOfMonth,
  endOfMonth,
  isSameDay,
  addMonths,
  subMonths,
  setYear,
  getYear,
  eachDayOfInterval,
} from 'date-fns'

import { getYears } from '../../utils/date'

interface CalendarCell {
  date: Date,
  label: number,
  timestamp: number,
}

export type Props = {
  date?: Date
  onDismiss: () => void | Promise<void>
  onSave: (date: Date) => void | Promise<void>
}

const weekDays = [
  { id: 'weekday_mo', label: 'Mo' },
  { id: 'weekday_tu', label: 'Tu' },
  { id: 'weekday_we', label: 'We' },
  { id: 'weekday_th', label: 'Th' },
  { id: 'weekday_fr', label: 'Fr' },
  { id: 'weekday_sa', label: 'Sa' },
  { id: 'weekday_su', label: 'Su' },
]

const CalendarPicker: React.FC<Props> = ({
  date = null,
  onSave,
  onDismiss,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [monthDates, setMonthDates] = useState<ReadonlyArray<CalendarCell>>([])
  const [firstDayOffset, setFirstDayOffset] = useState(0)
  const [displayYears, setDisplayYears] = useState(false)

  const handleSaveClick = () => {
    onSave(selectedDate)
  }

  const setPrevMonth = () => {
    setSelectedDate(date => subMonths(date, 1))
  }

  const setNextMonth = () => {
    setSelectedDate(date => addMonths(date, 1))
  }

  const handleSelectYear = (year: number) => {
    setSelectedDate(date => setYear(date, year))
    setDisplayYears(false)
  }

  const headerParts = {
    month: format(selectedDate, 'LLLL'),
    year: format(selectedDate, 'yyyy'),
  }

  const years: number[] = getYears(selectedDate, 25)

  useEffect(() => {
    if (date != null && isValid(date)) {
      setSelectedDate(date)
    }
  }, [date])

  useEffect(() => {
    if (selectedDate == null) return

    const dates = eachDayOfInterval({
      start: startOfMonth(selectedDate),
      end: endOfMonth(selectedDate),
    })
    const dateCells = dates.map((date): CalendarCell => ({
      date: date,
      label: date.getDate(),
      timestamp: date.getTime(),
    }))

    setMonthDates(dateCells)
    setFirstDayOffset(dates[0].getDay())
  }, [selectedDate])

  return (
    <div className="h-full flex flex-col p-9 pt-12 rounded-2xl bg-white">
      <header className="flex-none flex justify-between items-center w-full px-1 py-2">
        <h2 className="">
          <IonButton
            onClick={() => setDisplayYears(!displayYears)}
            fill="clear" size="small" type="button"
            className="ion-button-unstyled text-sm text-gray-700 font-bold">
            {headerParts.month}&nbsp;{headerParts.year}
          </IonButton>
        </h2>
        <div className="centered">
          <IonButton onClick={setPrevMonth} fill="clear" size="small" className="ion-button-unstyled" type="button">
            <IonIcon slot="icon-only" icon={chevronBackOutline} size="small" />
          </IonButton>
          <div className="w-2"></div>
          <IonButton onClick={setNextMonth} fill="clear" size="small" className="ion-button-unstyled" type="button">
            <IonIcon slot="icon-only" icon={chevronForwardOutline} size="small" />
          </IonButton>
        </div>
      </header>

      <div className="relative overflow-hidden flex-grow">
        <div className="h-full grid grid-cols-7 auto-rows-auto py-8">
          {weekDays.map(entry => (
            <div key={entry.id} className="centered w-8 h-8 font-medium text-gray-700 text-sm">
              {entry.label}
            </div>
          ))}
          {monthDates.map(({ date, label, timestamp }, ix) => (
            <IonButton
              onClick={() => setSelectedDate(date)}
              key={timestamp}
              className={classNames(
                'centered w-8 h-8 m-0 text-sm font-medium rounded-full',
                ix === 0 && `col-start-${firstDayOffset}`,
                isSameDay(date, selectedDate) ? 'bg-indigo-500 text-white' : 'bg-transparent text-gray-600',
                'transition-colors ease-in-out duration-100 hover:bg-indigo-500',
              )}
              fill="clear"
              type="button">
              {label}
            </IonButton>
          ))}
        </div>
        <div className={classNames(
          'absolute top-0 h-full grid grid-cols-5 auto-rows-auto py-8 bg-white transform',
          'transition-opacity ease-in-out duration-200',
          displayYears ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        )}>
          {years.map(year => (
            <IonButton
              onClick={() => handleSelectYear(year)}
              key={year}
              className={classNames(
                'centered h-8 m-0 text-sm font-medium rounded-lg',
                year === getYear(selectedDate) ? 'bg-indigo-500 text-white' : 'bg-transparent text-gray-600'
              )}
              fill="clear"
              type="button">
              {year}
            </IonButton>
          ))}
        </div>
      </div>

      <footer className="flex-none centered">
        <IonButton onClick={onDismiss} fill="outline" size="small" className="w-24 h-9" style={{ '--border-radius': '8px' }}>
          <div className="font-medium">Cancel</div>
        </IonButton>
        <div className="w-5"></div>
        <IonButton onClick={handleSaveClick} fill="solid" size="small" className="w-24 h-9" style={{ '--border-radius': '8px' }}>
          <div className="font-medium">Save</div>
        </IonButton>
      </footer>
    </div>
  )
}

export default CalendarPicker
