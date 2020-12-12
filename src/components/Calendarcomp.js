import React, { useState } from 'react'
import './Calendarcomp.css'
import dayjs from 'dayjs'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import isoWeek from 'dayjs/plugin/isoWeek'

dayjs().format()
dayjs.extend(weekOfYear)
dayjs.extend(isoWeek)


const Calendarcomp = () => {

    const [currentDate, setCurrentDate] = useState(dayjs())
    const startWeek = dayjs(currentDate).startOf('isoWeek')
    const endWeek = dayjs(currentDate).endOf('isoWeek')
    
    const [week, setWeek] = useState(dayjs().week())

    //TODO: Do this without if statements
    const weekBack = () => {
        if(week === 1) {
            setWeek(52)
        } else {
            setWeek(week - 1)
        }
        setCurrentDate(dayjs(currentDate).subtract(1, 'w'))
    }

    const weekForward = () => {
        if(week === 52) {
            setWeek(1)
        } else {
            setWeek(week + 1)
        }
        setCurrentDate(dayjs(currentDate).add(1, 'w'))
    }


    return(
        <div className='container'>
            <div className="weekNumber">
                <button onClick={() => weekBack()}>back</button>
                Week {week}
                <button onClick={() => weekForward()}>forward</button> 
            </div>
            <div>start of week: {startWeek.format('D')}</div>
            <div>current date: {dayjs(currentDate).format('D')}</div>
            <div>end of week: {endWeek.format('D')}</div>
            <div className='monthAndYear'>
                {currentDate.format('MMMM YYYY')}
            </div>
        </div>
    )
}

export default Calendarcomp