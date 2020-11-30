import React from 'react'
import './Calendarcomp.css'
import dayjs from 'dayjs'
dayjs().format()

var customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)

var weekYear = require('dayjs/plugin/weekYear')
var weekOfYear = require('dayjs/plugin/weekOfYear')
dayjs.extend(weekOfYear)
dayjs.extend(weekYear)

const Calendarcomp = () => {
    return(
        <div className='container'>
            <div className="weekNumber">
                Week {dayjs().week()}
            </div>
            <div className='month'>
                {dayjs().format('MMMM') }
            </div>
        </div>
    )
}

export default Calendarcomp