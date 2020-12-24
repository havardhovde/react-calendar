const buildCalendar = (currentDate:any) => {
    const startWeek = currentDate.clone().startOf('isoWeek')
    const endWeek = currentDate.clone().endOf('isoWeek')
 
    const day = startWeek.clone().subtract(1, 'd')
    const calendar:any = []
    while(day.isBefore(endWeek, 'd')) {
        calendar.push(
            Array(7)
            .fill(0)
            .map(() => day.add(1, 'd').clone())
        )
    }
    return calendar
}

export default buildCalendar