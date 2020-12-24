import { useState } from 'react'
import './Calendarcomp.scss'
import './Picker.scss'
import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import isoWeek from 'dayjs/plugin/isoWeek';
import { DatePicker } from '@y0c/react-datepicker';

dayjs().format()
dayjs.extend(weekOfYear)
dayjs.extend(isoWeek)



const Calendarcomp = () => {
    
    const [currentDate, setCurrentDate] = useState(dayjs())
    const startWeek: dayjs.Dayjs = dayjs(currentDate).startOf('isoWeek')
    const endWeek: dayjs.Dayjs = dayjs(currentDate).endOf('isoWeek')
    
    
    const weekBack = () => {
        setCurrentDate(dayjs(currentDate).subtract(1, 'w'))
    }
    
    const weekForward = () => {
        setCurrentDate(dayjs(currentDate).add(1, 'w'))
    }
    
    let week: number = currentDate.week();
    
    let monthYearDisplay: string = currentDate.format('MMMM YYYY');

    // Check if month changes mid-week
    if (startWeek.month() > endWeek.month() || startWeek.month() < endWeek.month()) {
        monthYearDisplay = startWeek.format('MMMM YYYY') + '/' +  endWeek.format('MMMM YYYY')
    }

    return(
        <div className='container'>
            <div className="weekNumber">
                <button onClick={() => weekBack()}>back</button>
                Week {week}
                <button onClick={() => weekForward()}>forward</button> 
            </div>

            <DatePicker
            onChange={(date) => setCurrentDate(date)}
            initialDate={currentDate}
            dateFormat="DD/MM/YYYY"
            showToday
            showDefaultIcon
            />

            <div>start of week: {startWeek.format('D')}</div>
            <div>end of week: {endWeek.format('D')}</div>
            <div className='monthAndYear'>
                {monthYearDisplay}
            </div>
        </div>
    )
}

export default Calendarcomp