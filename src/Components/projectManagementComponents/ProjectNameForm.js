import React from 'react'
import FormTitle from '../../UI/FormTitle';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';

const { RangePicker } = DatePicker;

function ProjectNameForm({ project, phase, curPhase, schedule, handleDateChange, handleProjectNameChange, handleCurPhaseChange }) {
    return (
        <div>
            <Grid style={{ padding: "10px" }}>
                <TextField
                    required
                    id="project"
                    value={project}
                    onChange={(e) => handleProjectNameChange(e.target.value)}
                    label="Project Name"
                    fullWidth
                    autoComplete="given-name"
                />
            </Grid>

            <Grid style={{ padding: "10px" }}>
                <Autocomplete
                    id="curPhase"
                    required
                    options={phase}
                    value={curPhase}
                    onChange={(data, dataString) => handleCurPhaseChange(dataString)}
                    renderInput={(params) => <TextField {...params} label="Current Phase" variant="standard" />}
                />
            </Grid>

            <Grid style={{ padding: "10px" }}>
                <RangePicker
                    defaultValue={[schedule.start_date ? moment(schedule.start_date) : null, schedule.end_date ? moment(schedule.end_date) : null]}
                    format={'YYYY/MM/DD'} onChange={(date, dateString) => { handleDateChange(dateString, null) }}
                />
            </Grid>
        </div >
    )
}

ProjectNameForm.propTypes = {

}

export default ProjectNameForm

