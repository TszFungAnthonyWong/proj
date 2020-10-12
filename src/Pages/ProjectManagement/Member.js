import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMember, getProject } from '../../Service/Actions/action';
import MaterialTable from 'material-table';
import tableIcons from '../../Components/projectManagementComponents/tableIcon';
import MemberList from '../../Components/projectManagementComponents/MemberList';
import ProjectDetail from "./projectDetail";
import ArtTrackIcon from '@material-ui/icons/ArtTrack';



class Member extends Component {

    componentDidMount() {
        this.props.getMember();
    }

    state = {
        showDetail: false,
        columns: [
            { title: 'Projects/Programs', field: 'PROJECT' },
            {
                title: 'VHA'
            },
            {
                title: 'TCS'
            },
            { title: 'OTHER' },
            { title: 'DMs' },

        ]
    }

    handleShowDetail = () => {
        let showDetail = this.state.showDetail
        this.setState({
            showDetail: !showDetail
        })
    }

    jumptoStep = (step) => {
        this.setState({
            activeStep: step,
        })
    }

    render() {
        let table = <MaterialTable
            icons={tableIcons}
            title="Member"
            columns={this.state.columns}
            data={this.props.member}

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
                    tooltip: 'Show Member',
                    render: rowData => {
                        return (
                            <MemberList member={rowData.member} />
                        )
                    },
                }]}
        />;


        let detailGrid = this.state.showDetail ? (
            <ProjectDetail handleShowDetail={this.handleShowDetail} />
        ) : this.props.member ? table : '';

        return (
            <div>
                {detailGrid}
            </div >

        );

    }

}

const mapDispatchToProps = dispatch => {
    return {
        getMember: () => dispatch(getMember()),
        getProject: (data) => dispatch(getProject(data)),
    }
}



const mapStateToProps = state => {
    return {
        member: state.reducer.member,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Member)
