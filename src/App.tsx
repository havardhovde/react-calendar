import { useState } from 'react'
import './App.scss';
import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import isoWeek from 'dayjs/plugin/isoWeek';
import Calendarcomp from './components/Calendarcomp'
import Dateinfo from './components/DateInfo'

dayjs().format()
dayjs.extend(weekOfYear)
dayjs.extend(isoWeek)


const App = () => {

  const [currentDate, setCurrentDate] = useState(dayjs())
  const startWeek: dayjs.Dayjs = dayjs(currentDate).startOf('isoWeek')
  const endWeek: dayjs.Dayjs = dayjs(currentDate).endOf('isoWeek')
  const [selectedDate, setSelectedDate] = useState(currentDate)

  return (
    <div className="App">
      <div className="components date">
        <Dateinfo selectedDate={selectedDate} />
        </div>
      <div className="components calendarComp">
        <Calendarcomp 
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        startWeek={startWeek}
        endWeek={endWeek}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      /></div>
      <div className="components notes">Notes</div>
    </div>
  );
}

export default App;