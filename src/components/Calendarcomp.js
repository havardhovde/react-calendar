import React, { useState } from 'react'
import './Calendarcomp.css'
import dayjs from 'dayjs'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import isoWeek from 'dayjs/plugin/isoWeek'

dayjs().format()
dayjs.extend(weekOfYear)
dayjs.extend(isoWeek)


const Calendarcomp = () => {

    const [midWeek, setMidWeek] = useState(dayjs())
    const startWeek = dayjs(midWeek).startOf('isoWeek')
    const endWeek = dayjs(midWeek).endOf('isoWeek')
    
    const [week, setWeek] = useState(dayjs().week())

    const weekBack = () => {
        if(week === 1) {
            setWeek(52)
        } else {
            setWeek(week - 1)
        }
        setMidWeek(dayjs(midWeek).subtract(1, 'w'))
    }

    const weekForward = () => {
        if(week === 52) {
            setWeek(1)
        } else {
            setWeek(week + 1)
        }
        setMidWeek(dayjs(midWeek).add(1, 'w'))
    }

    return(
        <div className='container'>
            <div className="weekNumber">
                <button onClick={() => weekBack()}>back</button>
                Week {week}
                <button onClick={() => weekForward()}>forward</button> 
            </div>
            <div>start of week: {startWeek.format('D')}</div>
            <div>middle of week: {dayjs(midWeek).format('D')}</div>
            <div>end of week: {endWeek.format('D')}</div>
            <div className='monthAndYear'>
                {midWeek.format('MMMM YYYY')}
            </div>
        </div>
    )
}

export default Calendarcomp