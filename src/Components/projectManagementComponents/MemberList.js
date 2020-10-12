import React from 'react'
import Grid from '@material-ui/core/Grid';

function MemberList({ member }) {
    {
        let pm = Object.keys(member).map((keys) => {
            let item = member[keys].projectManager.map((e) => <div key={keys + e}>{e}</div>)
            return (
                <Grid key={keys} item xs={2} style={{ paddingLeft: '40px' }}>
                    {item}
                </Grid>
            )
        })

        let archi = Object.keys(member).map((keys) => {
            let item = member[keys].architect.map((e) => <div key={keys + e}>{e}</div>)
            return (
                <Grid key={keys} item xs={2} style={{ paddingLeft: '40px' }}>
                    {item}
                </Grid>
            )
        })

        let tm = Object.keys(member).map((keys) => {
            let item = member[keys].testManager.map((e) => <div key={keys + e}>{e}</div>)
            return (
                <Grid key={keys} item xs={2} style={{ paddingLeft: '40px' }}>
                    {item}
                </Grid>
            )
        })

        return (
            <div style={{ textAlign: "left" }}>
                <Grid
                    container
                    direction="row"
                    justify="space-around"
                >
                    <Grid item xs={2} style={{ paddingLeft: '40px' }} >
                        <div></div>
                    </Grid>

                    <Grid item xs={2} style={{ paddingLeft: '40px' }}>
                        VHA
                    </Grid>
                    <Grid item xs={2} style={{ paddingLeft: '40px' }}>
                        TCS
                    </Grid>
                    <Grid item xs={2} style={{ paddingLeft: '40px' }}>
                        OTHER
                    </Grid>
                    <Grid item xs={2} style={{ paddingLeft: '40px' }}>
                        DMs
                    </Grid>

                </Grid>

                <br></br>

                <Grid
                    container
                    direction="row"
                    justify="space-around"
                >
                    <Grid item xs={2} style={{ paddingLeft: '40px' }} >
                        <div>Proj. Manager</div>
                    </Grid>
                    {pm}
                </Grid>

                <br></br>

                <Grid
                    container
                    direction="row"
                    justify="space-around"
                >
                    <Grid item xs={2} style={{ paddingLeft: '40px' }} >
                        <div>Architect</div>
                    </Grid>
                    {archi}
                </Grid>

                <br></br>

                <Grid
                    container
                    direction="row"
                    justify="space-around"
                >
                    <Grid item xs={2} style={{ paddingLeft: '40px' }} >
                        <div>Test Manager</div>
                    </Grid>
                    {tm}
                </Grid>

            </div>

        )
    }
}

export default MemberList

