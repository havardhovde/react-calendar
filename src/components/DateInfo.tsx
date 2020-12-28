import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import isoWeek from 'dayjs/plugin/isoWeek';

dayjs().format()
dayjs.extend(weekOfYear)
dayjs.extend(isoWeek)

const Dateinfo = (props: any) => {
    return(
        <div>
            <h1>
                {dayjs(props.selectedDate).format('DD MMM YYYY')}
            </h1>
        </div>
    )
}

export default Dateinfo