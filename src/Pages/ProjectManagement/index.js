import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import ScheduleIcon from '@material-ui/icons/Schedule';
import GroupIcon from '@material-ui/icons/Group';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AddIcon from '@material-ui/icons/Add';

import Cost from './Cost.js';
import Member from './Member.js';
import Schedule from './Schedule.js';
import Create from './Create.js';

class ProjectManagement extends Component {

    state = {
        selectedIndex: 0,
    }

    setSelectedIndex = (index) => {
        this.setState({ selectedIndex: index });
    }

    render() {
        let showPage = '';
        let curPage = ''
        switch (this.state.selectedIndex) {
            case 0:
                showPage = <Schedule />
                curPage = 'Schedule'
                break;
            case 1:
                showPage = <Cost />
                curPage = 'Cost'

                break;
            case 2:
                showPage = <Member />
                curPage = 'Member'

                break;
            case 3:
                showPage = <Create />
                curPage = 'Create Project'

                break;
            default:

        }

        return (

            <Grid container>
                <Grid item xs={1} container
                    direction="column"
                    alignItems="center">

                    <Tooltip title="Schedule">
                        <IconButton onClick={() => this.setSelectedIndex(0)} color="inherit" aria-label="menu">
                            <ScheduleIcon />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Member">
                        <IconButton onClick={() => this.setSelectedIndex(2)} color="inherit" aria-label="menu">
                            <GroupIcon />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Cost">
                        <IconButton onClick={() => this.setSelectedIndex(1)} color="inherit" aria-label="menu">
                            <MonetizationOnIcon />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Creact Project">
                        <IconButton onClick={() => this.setSelectedIndex(3)} color="inherit" aria-label="menu">
                            <AddIcon />
                        </IconButton>
                    </Tooltip>
                </Grid>

                <Grid item xs={10}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link color="inherit" href="/" >
                            ProjectManagement
                            </Link>
                        <Typography color="textPrimary">{curPage}</Typography>
                    </Breadcrumbs>

                    {showPage}
                </Grid>
            </Grid>

        );
    }
}


export default ProjectManagement