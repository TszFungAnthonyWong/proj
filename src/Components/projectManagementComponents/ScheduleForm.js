import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import FormTitle from '../../UI/FormTitle';
import Tooltip from '@material-ui/core/Tooltip';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';
import Autocomplete from '@material-ui/lab/Autocomplete';

const { RangePicker } = DatePicker;

function ScheduleForm({ phase, schedule, handleDateChange, handlePhaseListChange }) {
    const defaultPhase = ['Dev_Planning', 'Development', 'System_Test', 'SIT_Planning', 'SIT_Execution', 'PT_Execution', 'CRR_Execution', 'CVT_PVT_Go_Live'];

    phase = phase.filter((label) => label !== 'start_date' && label !== 'end_date')

    const list = phase.map((label, index) => {
        return (
            <div key={label}>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                >

                    <Grid item xs={6} >
                        <Typography variant="h6" >
                            <Box textAlign="left" m={1}>
                                {label}
                            </Box>
                        </Typography>
                    </Grid>



                    <Grid item xs={5} style={{ margin: "8px", paddingBottom: "10px" }}>
                        <RangePicker
                            defaultValue={[schedule[label] ? (schedule[label].start_date ? moment(schedule.start_date) : null) : null, schedule[label] ? (schedule[label].end_date ? moment(schedule.end_date) : null) : null]}
                            disabledDate={d => !d || d.isBefore(schedule.start_date) || d.isAfter(schedule.end_date, 'days')}
                            format={'YYYY/MM/DD'} onChange={(date, dateString) => { handleDateChange(dateString, label) }}
                        />
                    </Grid>


                </Grid>

            </div >)
    })

    return (
        <div>
            <FormTitle title={'Schedule'} />

            <div style={{ width: "600px", margin: "8px" }}>
                <Tooltip title="Customise poject phase">
                    <Autocomplete
                        style={{ paddingBottom: "10px" }}
                        multiple
                        id="tags-filled"
                        options={defaultPhase}
                        value={phase}
                        onChange={(event, newValue) => {
                            handlePhaseListChange(newValue)
                        }}
                        freeSolo

                        renderInput={(params) => (
                            <TextField {...params} variant="standard" label={"Phase List"} placeholder="Add" onChange={(e) => { }} />
                        )}
                    />

                </Tooltip>

            </div>


            {list}

        </div>
    )


}



export default ScheduleForm

