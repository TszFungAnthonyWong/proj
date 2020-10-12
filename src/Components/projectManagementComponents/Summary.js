import React from 'react'

import SummaryTitle from '../../UI/SummaryTitle';
import FormTitle from '../../UI/FormTitle';
import MemberList from './MemberList';
import ScheduleChart from './ScheduleChart'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function Summary({ costType, curPhase, jumptoStep, project, schedule, cost, member }) {
    let total = 0
    const costList = costType.map((type) => {
        total += cost[type] ? cost[type] : 0
        return (
            <div key={type} style={{ columns: "2 auto", textAlign: "left" }}>
                <div key={type}>{type}</div>
                <div>{cost[type] ? cost[type] : 0}$</div>
            </div>
        )
    })
    return (
        <Grid item xs={10}>

            <SummaryTitle title={project} jumptoStep={() => jumptoStep(0)} />
            <Grid>
                <Box textAlign="left" m={1}>
                    <Typography >
                        {'Phase:' + curPhase}
                    </Typography>
                </Box>
            </Grid>

            <SummaryTitle title={"Schedule"} jumptoStep={() => jumptoStep(1)} />
            <ScheduleChart schedule={schedule} />

            <SummaryTitle title={"Member"} jumptoStep={() => jumptoStep(2)} />
            <hr></hr>
            <MemberList member={member} />

            <SummaryTitle title={"Cost"} jumptoStep={() => jumptoStep(3)} />
            <hr></hr>
            <Grid style={{ padding: '10px' }}>
                <div style={{ columns: "2 auto" }}>
                    {costList}
                </div>

                <div style={{ columns: "2 auto", textAlign: "left" }}>
                    <div>Total</div>
                    <div>{total}$</div>
                </div>
            </Grid>


        </Grid>
    )
}



export default Summary

