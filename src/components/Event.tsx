import { useState } from 'react'
import { MdEdit } from 'react-icons/md';
import './Event.scss';

//TODO: add edit, add event and delete functionality
const Event = (props: any) => {
    const [editing, setEditing] = useState<boolean>(false)

    const toggleEditing = () => {
        setEditing(!editing)
    }

    return(
        <div>
            {editing ? 
            <form className='eventDetails'>
                <div onClick={() => toggleEditing()}><MdEdit/></div>
                <label className='eventFields eventTitle'>
                Title:
                    <input type='text' name='title' value={props.title} />
                </label>
                <label className='eventFields eventCategory'>
                Category:
                    <input type='text' name='category' value={props.category} />
                </label>
                <label className='eventFields eventStartDate'>
                Start date:
                    <input type='text' name='startdate' value={props.startdate} />
                </label>
                <label className='eventFields eventEndDate'>
                End date:
                    <input type='text' name='enddate' value={props.enddate} />
                </label>
                <label className='eventFields eventStartTime'>
                Start time:
                    <input type='text' name='starttime' value={props.starttime} />
                </label>
                <label className='eventFields eventEndTime'>
                End time:
                    <input type='text' name='endtime' value={props.endtime} />
                </label>
                <label className='eventFields eventNotes'>
                Notes:
                    <input type='text' name='notes' value={props.notes} />
                </label>
            </form>
            :
            <div className='eventDetails'>
                <div onClick={() => toggleEditing()}><MdEdit/></div>
                <div className='eventFields eventTitle'>{props.title}</div>
                <div className='eventFields eventCategory'>Category: {props.category}</div>
                <div className='eventFields eventStartDate'>Start date: {props.startdate}</div>
                <div className='eventFields eventEndDate'>End date: {props.enddate}</div>
                <div className='eventFields eventStartTime'>Start time: {props.starttime}</div>
                <div className='eventFields eventEndTime'>End time: {props.endtime}</div>
                <div className='eventFields eventNotes'>Notes: {props.notes}</div>
            </div>
            }
        </div>
    )   
}

export default Event