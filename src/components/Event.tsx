const Event = (props: any) => {
    return(
        <div>
            <div>Title: {props.title}</div>
            <div>Start date: {props.startdate}</div>
            <div>End date: {props.enddate}</div>
            <div>Start time: {props.starttime}</div>
            <div>End time: {props.endtime}</div>
            <div>Category: {props.category}</div>
            <div>Notes: {props.notes}</div>
        </div>
    )
}

export default Event