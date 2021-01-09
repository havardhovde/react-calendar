import React, { useState } from 'react'
import './App.scss';
import dayjs from 'dayjs';
// import weekOfYear from 'dayjs/plugin/weekOfYear';
// import isoWeek from 'dayjs/plugin/isoWeek';
// import Calendarcomp from './components/Calendarcomp'
import Calendar from './components/Calendar'
import Dateinfo from './components/DateInfo'
//@ts-ignore
import useDimensions from "react-use-dimensions";

dayjs().format()
// dayjs.extend(weekOfYear)
// dayjs.extend(isoWeek)

type PropsInterface = {
  // currentDate?: dayjs.Dayjs;
  // startWeek?: dayjs.Dayjs;
  // endWeek?: dayjs.Dayjs;
  selectedDate?: dayjs.Dayjs;
}

const App: React.FC<PropsInterface> = () => {

  // const [currentDate, setCurrentDate] = useState(dayjs())
  // const startWeek = dayjs(currentDate).startOf('isoWeek')
  // const endWeek = dayjs(currentDate).endOf('isoWeek')
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