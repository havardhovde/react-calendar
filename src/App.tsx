import React, { useState, useEffect } from 'react'
import './App.scss';
import dayjs from 'dayjs';
import Calendar from './components/Calendar'
import Dateinfo from './components/DateInfo'
import axios from 'axios';
//@ts-ignore
import useDimensions from "react-use-dimensions";

dayjs().format()

type PropsInterface = {
  selectedDate?: dayjs.Dayjs;
}

const App: React.FC<PropsInterface> = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs())
  const [events, setEvents] = useState<any>([]);
  const [calendarRef, calendarDimensions] = useDimensions();

    useEffect(()  => {
      axios
          .get(`http://localhost:8000/api/events/${dayjs(selectedDate).format('DDMMYYYY')}`)
          .then(function (res: any) {
              console.log('response from app: ' + JSON.stringify(res.data.data));
              setEvents(res.data)
            })
            .catch(function (error) {
              console.log(error);
            });
          }, [selectedDate]);
          
    console.log('events from app: ' + JSON.stringify(events))

  return (
    <div className="App">
      <div className="components date">
        <Dateinfo 
          selectedDate={selectedDate} 
          events={events}
          />
        </div>
      <div ref={calendarRef} className="components calendarComp">
        <Calendar
          width={calendarDimensions.width}
          height={calendarDimensions.height}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>
      <div className="components notes">
        Notes
      </div>
    </div>
  );
}

export default App;