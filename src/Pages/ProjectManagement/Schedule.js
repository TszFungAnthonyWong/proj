import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSchedule, getProject } from '../../Service/Actions/action';
import MaterialTable from 'material-table';
import LinearProgressWithLabel from '../../UI/LinearProgressWithLabel'

import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import tableIcons from '../../Components/projectManagementComponents/tableIcon';
import ScheduleChart from '../../Components/projectManagementComponents/ScheduleChart';
import ProjectDetail from "./projectDetail";


class Schdule extends Component {
    state = {
        showDetail: false,

        columns: [
            { title: 'Projects/Programs', field: 'PROJECT' },
            {
                title: 'Phase',
                field: 'PHASE'
            },
            {
                title: 'Due date', field: 'schedule.end_date'
            },
            {
                title: 'Last modified date'
            },
            {
                title: 'Precent completed',
                render: rowData => <LinearProgressWithLabel value={10} />
            }

        ]
    }


    componentDidMount() {
        this.props.getSchedule();
    }

    handleShowDetail = () => {
        let showDetail = this.state.showDetail
        this.setState({
            showDetail: !showDetail
        })
    }
    render() {

        let table = <MaterialTable
            icons={tableIcons}
            title="Schedule"
            columns={this.state.columns}
            data={this.props.schedule}

            actions={[
                {
                    icon: () => <ArtTrackIcon />,
                    tooltip: 'Project Summary',
                    onClick: (event, rowData) => {
                        this.props.getProject(rowData.PROJECT)
                        this.handleShowDetail()
                    }
                }
            ]}

            detailPanel={[
                {
                    tooltip: 'Show Detail Schedule',
                    render: rowData => {
                        return (
                            <ScheduleChart schedule={rowData.schedule} />
                        )
                    }
                }
            ]}
        />

           let detailGrid = this.state.showDetail ? (
            <ProjectDetail handleShowDetail={this.handleShowDetail} />
        ) : this.props.schedule ? table : '';

        return (
            <div>

                {detailGrid}


            </div>

        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProject: (data) => dispatch(getProject(data)),
        getSchedule: () => dispatch(getSchedule()),
    }
}

const mapStateToProps = state => {
    return {
        schedule: state.reducer.schedule,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Schdule)
