import './Calendarcomp.scss'
import './Picker.scss'
import dayjs from 'dayjs';
import { DatePicker } from '@y0c/react-datepicker';

const Calendarcomp = (props: any) => {
    
    const calendar = []

    for(let i = 0; i < 7; i++) {
        calendar.push(props.startWeek.add([i], 'd'))
        console.log(calendar)
    }    
    
    const weekBack = () => {
        props.setCurrentDate(dayjs(props.currentDate).subtract(1, 'w'))
    }
    
    const weekForward = () => {
        props.setCurrentDate(dayjs(props.currentDate).add(1, 'w'))
    }
    
    let week: number = props.currentDate.week();
    
    let monthYearDisplay: string = props.currentDate.format('MMMM YYYY');

    // Check if month changes mid-week
    if (props.startWeek.month() !== props.endWeek.month()) {
        if(props.startWeek.year() !== props.endWeek.year()) {
            monthYearDisplay = `${props.startWeek.format('MMMM YYYY')} / ${props.endWeek.format('MMMM YYYY')}`
        }
        else {
            monthYearDisplay = `${props.startWeek.format('MMMM')}/${props.endWeek.format('MMMM YYYY')}`
        }
    }

    return(
        <div className='container'>
            <div className="weekNumber">
                <button onClick={() => weekBack()}>back</button>
                Week {week}
                <button onClick={() => weekForward()}>forward</button> 
            </div>

            <DatePicker
            onChange={(date: dayjs.Dayjs) => props.setCurrentDate(date)}
            initialDate={props.currentDate}
            dateFormat="DD/MM/YYYY"
            showToday
            showDefaultIcon
            />
            <div className='dates'>
                {
                    calendar.map((date: dayjs.Dayjs, index: number) => {
                        return (
                        <div 
                        className={` date date${index}`} 
                        onClick={() => props.setSelectedDate(date.format('DD MMM YYYY'))} 
                        key={index}
                        > 
                            {date.format('D') }
                        </div>
                        )
                    })
                }
            </div>

            <div className='monthAndYear'>
                {monthYearDisplay}
            </div>
        </div>
    )
}

export default Calendarcomp