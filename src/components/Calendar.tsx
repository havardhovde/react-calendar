import dayjs from 'dayjs'
import InfiniteCalendar from "react-infinite-calendar";
import "react-infinite-calendar/styles.css";
import './Calendar.scss'

dayjs().format()

const Calendar = (props: any) => {
  return(
      <InfiniteCalendar
          width={props.width}
          height={props.height} 
          rowHeight={100}
          displayOptions={{
            showHeader: false,
            showWeekdays: false
          }}
          locale={{weekStartsOn: 1}}
          onSelect={(date: any) => props.setSelectedDate(dayjs(date).format('MM/DD/YYYY'))}
      />
  )
}

export default Calendar