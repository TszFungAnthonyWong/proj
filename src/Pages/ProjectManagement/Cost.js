import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCost, getProject } from '../../Service/Actions/action';

import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import ProjectDetail from "./projectDetail";
import MaterialTable from 'material-table';
import tableIcons from '../../Components/projectManagementComponents/tableIcon.js';

class Cost extends Component {

    componentDidMount() {
        this.props.getCost();
    }

    state = {
        showDetail: false,

        columns: [
            { title: 'Projects/Programs', field: 'PROJECT' },
            { title: 'Status', field: 'cost.STATUS' },
            {
                title: 'Overall', field: 'OVERALL',
                render: rowData => {
                    rowData.OVERALL = rowData.cost.DEV_ST + rowData.cost.SIT_AUTO + rowData.cost.PERF_TEST + rowData.cost.OOS + rowData.cost.NPE + rowData.cost.OTHERS
                    return rowData.OVERALL
                }
            },
            { title: 'DEV + ST', field: 'cost.DEV_ST' },
            { title: 'SIT + Auto', field: 'cost.SIT_AUTO' },
            { title: 'Perf. Test', field: 'cost.PERF_TEST' },
            { title: 'OSS', field: 'cost.OOS' },
            { title: 'NPE', field: 'cost.NPE' },
            { title: 'Others', field: 'cost.OTHERS' },

        ],
        data: [
            { project: 'Mehmet', phase: 'development', birthYear: 1987, birthCity: 63 },
            {
                project: 'Zerya Betül',
                phase: 'PT Execution',
                birthYear: 2017,
                birthCity: 34,
            },
        ],
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
            title="Cost"
            columns={this.state.columns}
            data={this.props.cost}

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
        />

        let detailGrid = this.state.showDetail ? (
            <ProjectDetail handleShowDetail={this.handleShowDetail} />
        ) : this.props.cost ? table : '';


        return (
            <div>
                {detailGrid}
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        getCost: () => dispatch(getCost()),
        getProject: (data) => dispatch(getProject(data)),
    }
}

const mapStateToProps = state => {
    return {
        cost: state.reducer.cost,
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cost)
