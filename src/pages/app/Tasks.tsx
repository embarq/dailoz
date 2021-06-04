import React, { useEffect, useState } from 'react'
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonSearchbar,
  IonButtons,
  IonIcon,
  IonImg,
  useIonModal,
} from '@ionic/react'
import { calendarClearOutline } from 'ionicons/icons'
import { formatDate } from '../../utils/date'
import CalendarWeekView from '../../components/common/CalendarWeekView'
import { isValid } from 'date-fns/esm'
import CalendarPicker, { Props as CalendarPickerProps } from '../../components/common/CalendarPicker'

const datepickerLabelFormat = (date: Date): string =>
  formatDate(date, {
    month: 'long',
    year: 'numeric',
  })

const TasksPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date(Date.now()))

  const handlePickerSave = (date: Date) => {
    isValid(date) && setSelectedDate(date)
    handlePickerDismiss()
  }
  const handlePickerDismiss = () => dismissPicker()
  const pickerProps: CalendarPickerProps = {
    date: selectedDate,
    onDismiss: handlePickerDismiss,
    onSave: handlePickerSave
  }
  const [presentPicker, dismissPicker] = useIonModal(CalendarPicker, pickerProps)
  const openCalendarPicker = () => presentPicker({
    cssClass: 'calendar-picker-ion-modal'
  })

  const handleSelectDate = (date: Date) => {
    isValid(date) && setSelectedDate(date);
  }

  return (
    <IonPage>
      <IonHeader className="pt-4">
        <IonToolbar
          style={{
            '--border-width': '0',
            '--padding-start': '12px',
            '--padding-end': '12px',
          }}>
          <IonSearchbar
            className="text-sm"
            style={{
              '--background': '#F6F6F6',
              '--border-radius': '15px',
              '--icon-color': '#B0B5DD',
              '--placeholder-color': '#CED0E7',
              'height': 50,
            }}></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <section>
          <IonHeader>
            <IonToolbar
              style={{
                '--border-width': '0',
                '--padding-top': 0,
                '--padding-bottom': 0,
                '--min-height': 'auto',
              }}
              className="pr-6 mt-4">
              <IonTitle size="large" className="pl-6">
                <h2 className="font-semibold text-gray-700 text-2xl">Tasks</h2>
              </IonTitle>
              <IonButtons slot="primary" className="self-end">
                <IonButton onClick={openCalendarPicker}>
                  <IonIcon
                    slot="start"
                    icon={calendarClearOutline}
                    className="text-xs"
                    size="small"
                  />
                  {selectedDate && (
                    <span className="text-xs">
                      {datepickerLabelFormat(selectedDate)}
                    </span>
                  )}
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>

          <div className="px-6 pt-4">
            <CalendarWeekView selectedDate={selectedDate} onSelectDate={handleSelectDate} />
          </div>
        </section>

        <div className="grid place-items-center pt-12">
          <IonImg
            src="/assets/tasks-illustration.svg"
            alt="Illustration"
            className="w-52"
          />
          <p className="mt-8 text-center text-sm text-gray-700">
            You don’t have any schedule today.
            <br />
            Tap the plus button to create new to-do.
          </p>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default TasksPage
