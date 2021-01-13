import Event from './Event'
import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import isoWeek from 'dayjs/plugin/isoWeek';
import advancedFormat from 'dayjs/plugin/advancedFormat'

dayjs().format()
dayjs.extend(weekOfYear)
dayjs.extend(isoWeek)
dayjs.extend(advancedFormat)

const Dateinfo = (props: any) => {
    return(
        <div>
            <h1>
                {dayjs(props.selectedDate).format('Do MMMM YYYY')}
            </h1>

            {props.events.data === undefined 
                ? <div>No events loaded</div>
                : <Event 
                    title={props.events.data.title} 
                    startdate={props.events.data.startdate} 
                    enddate={props.events.data.enddate}
                    starttime={props.events.data.starttime}
                    endtime={props.events.data.endtime}
                    category={props.events.data.category}
                    notes={props.events.data.notes}
                />
            }
        </div>
    )
}

export default Dateinfo