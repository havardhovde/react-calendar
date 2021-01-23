import './Event.scss';

//TODO: add edit, add event and delete functionality
const Event = (props: any) => {
    return(
        <div className='eventDetails'>
            <div className='eventFields eventTitle'>Title: {props.title}</div>
            <div className='eventFields eventCategory'>Category: {props.category}</div>
            <div className='eventFields eventStartDate'>Start date: {props.startdate}</div>
            <div className='eventFields eventEndDate'>End date: {props.enddate}</div>
            <div className='eventFields eventStartTime'>Start time: {props.starttime}</div>
            <div className='eventFields eventEndTime'>End time: {props.endtime}</div>
            <div className='eventFields eventNotes'>Notes: {props.notes}</div>
        </div>
    )   
}

export default Event