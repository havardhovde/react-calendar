import { useState, useEffect } from 'react';
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
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(()  => {
        props.events.data === undefined ? setIsLoaded(false) : setIsLoaded(true)
    }, [props.events.data]);

    return(
        <div>
            <h1>
                {dayjs(props.selectedDate).format('Do MMMM YYYY')}
            </h1>

            {isLoaded && props.events.data.length > 0
                ? props.events.data.map((event: { title: string; startdate: string; enddate: string | null; starttime: string; endtime: string | null; category: string; notes: string | null; }) => {
                    return(
                        <Event
                            title={event.title}
                            startdate={event.startdate}
                            enddate={event.enddate}
                            starttime={event.starttime}
                            endtime={event.endtime}
                            category={event.category}
                            notes={event.notes}
                        />
                    )
                })
                : <div>No events found</div>
            }
        </div>
    )
}

export default Dateinfo