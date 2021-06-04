import React, { useEffect, useState } from 'react'
import { IonButton, IonIcon } from '@ionic/react'
import { chevronBackOutline, chevronForwardOutline } from 'ionicons/icons'
import classNames from 'classnames'

import eachDayOfInterval from 'date-fns/eachDayOfInterval'
import isValid from 'date-fns/isValid'
import format from 'date-fns/format'
import startOfMonth from 'date-fns/startOfMonth'
import endOfMonth from 'date-fns/endOfMonth'
import isSameDay from 'date-fns/isSameDay'

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

  const handleSaveClick = () => {
    onSave(selectedDate)
  }

  const headerParts = {
    month: format(selectedDate, 'LLLL'),
    year: format(selectedDate, 'yyyy'),
  }

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
    <div className="p-9 pt-12 rounded-2xl bg-white">
      <header className="flex justify-between items-center w-full px-1 py-2">
        <h2 className="text-sm text-gray-700 font-bold">
          {headerParts.month}&nbsp;{headerParts.year}
        </h2>
        <div className="centered">
          {/* TODO: implement switching month backwards */}
          <IonButton fill="clear" size="small" className="unstyled" type="button">
            <IonIcon slot="icon-only" icon={chevronBackOutline} size="small" />
          </IonButton>
          {/* TODO: implement switching month forwards */}
          <div className="w-2"></div>
          <IonButton fill="clear" size="small" className="unstyled" type="button">
            <IonIcon slot="icon-only" icon={chevronForwardOutline} size="small" />
          </IonButton>
        </div>
      </header>

      <div className="grid grid-cols-7 auto-rows-auto py-8">
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
              'centered w-8 h-8 m-0 text-sm font-mediumx rounded-full',
              ix === 0 && `col-start-${firstDayOffset}`,
              isSameDay(date, selectedDate) ? 'bg-indigo-500 text-white' : 'bg-transparent text-gray-600',
              'transition-colors ease-in-out duration-100 hover:bg-indigo-100 hover:text-gray-800',
            )}
            fill="clear"
            type="button">
            {label}
          </IonButton>
        ))}
      </div>

      <footer className="centered pt-1 pb-8">
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
