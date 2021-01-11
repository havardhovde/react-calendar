import React, { useState } from 'react'
import './App.scss';
import dayjs from 'dayjs';
import Calendar from './components/Calendar'
import Dateinfo from './components/DateInfo'
//@ts-ignore
import useDimensions from "react-use-dimensions";

dayjs().format()

type PropsInterface = {
  selectedDate?: dayjs.Dayjs;
}

const App: React.FC<PropsInterface> = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs())
  
  const [calendarRef, calendarDimensions] = useDimensions();

  return (
    <div className="App">
      <div className="components date">
        <Dateinfo selectedDate={selectedDate} />
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