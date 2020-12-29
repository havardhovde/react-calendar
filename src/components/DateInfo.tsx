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
        </div>
    )
}

export default Dateinfo