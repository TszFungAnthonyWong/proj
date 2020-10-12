import React from 'react'
import Chart from "react-google-charts";


function ScheduleChart({ schedule }) {

    let temp = [[
        { type: 'string', label: 'Task ID' },
        { type: 'string', label: 'Task Name' },
        { type: 'string', label: 'Resource' },
        { type: 'date', label: 'Start Date' },
        { type: 'date', label: 'End Date' },
        { type: 'number', label: 'Duration' },
        { type: 'number', label: 'Percent Complete' },
        { type: 'string', label: 'Dependencies' },
    ],
    [
        'Overall',
        'Overall',
        'Overall',
        new Date(schedule.start_date),
        new Date(schedule.end_date),
        null,
        null,
        null,
    ],
    ]

    let temp2 = Object.keys(schedule).filter(keys => {
        if (keys !== 'start_date' && keys !== 'end_date') {
            return true
        } else {
            return false
        }
    }).map(keys => {
        return [keys, keys, keys, new Date(schedule[keys].start_date), new Date(schedule[keys].end_date), null, null, null]
    })

    let data = [...temp, ...temp2]
    return (
        <div>
            <Chart
                width={'100%'}
                height={'400px'}
                chartType="Gantt"
                loader={<div>Loading Chart</div>}
                data={data}
                options={{
                    height: 400,
                    gantt: {
                        trackHeight: 30,
                    },
                }}
                rootProps={{ 'data-testid': '2' }}
            />



        </div>
    )
}


export default ScheduleChart

