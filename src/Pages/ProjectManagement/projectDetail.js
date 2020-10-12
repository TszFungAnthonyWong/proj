import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProject } from '../../Service/Actions/action';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Grid from '@material-ui/core/Grid';

import Summary from "../../Components/projectManagementComponents/Summary";
import ProjectNameForm from '../../Components/projectManagementComponents/ProjectNameForm';
import MemberForm from '../../Components/projectManagementComponents/MemberForm';
import CostForm from '../../Components/projectManagementComponents/CostForm';
import ScheduleForm from '../../Components/projectManagementComponents/ScheduleForm';

export class projectDetail extends Component {
    state = {
        step: 4,
        phase: []
    }


    jumptoStep = (step) => {
        this.setState({ step: step })
    }


    handleDateChange = (dateString, label) => {
        let project = Object.assign({}, this.props.project)
        if (label) {
            project.schedule[label] = {
                start_date: dateString[0],
                end_date: dateString[1]
            }
        } else {
            project.schedule.start_date = dateString[0]
            project.schedule.end_date = dateString[1]
        }
        this.props.storeProject(project)
    };

    handlePhaseListChange = (phase) => {
        let project = Object.assign({}, this.props.project)
        Object.keys(project.schedule).forEach(element => {
            if (phase.indexOf(element) === -1 && element !== "start_date" && element !== "end_date") {
                delete project.schedule[element];
            }
        });

        phase.forEach(element => {
            if (Object.keys(project.schedule).indexOf(element) === -1 && element !== "start_date" && element !== "end_date") {
                project.schedule[element] = ''
            }
        })

        this.props.storeProject(project)
    }

    handleMemberChange = (label, role, newValue) => {
        let project = Object.assign({}, this.props.project)
        if (!project.member[label]) {
            project.member[label] = {}
        }
        project.member[label][role] = newValue;

        this.props.storeProject(project)
    }

    handleCostChange = (cost, type) => {
        let project = Object.assign({}, this.props.project)
        project.cost[type] = cost
        this.props.storeProject(project)
    }

    handleProjectNameChange = (name) => {
        let project = Object.assign({}, this.props.project)
        project.PROJECT = name
        this.props.storeProject(project)

    }

    handleCurPhaseChange = (phase) => {
        let project = Object.assign({}, this.props.project)
        project.PHASE = phase
        this.props.storeProject(project)

    }


    handleBack = () => {
        if (this.state.step === 4) {
            this.props.handleShowDetail()
        } else {
            this.jumptoStep(4)
        }
    }





    getConetent = (step) => {
        switch (step) {
            case 0:
                return (
                    <div>
                        <ProjectNameForm
                            phase={Object.keys(this.props.project.schedule).filter((e) => { return e !== "start_date" && e !== 'end_date' })}
                            curPhase={this.props.project.PHASE}
                            project={this.props.project.PROJECT}
                            schedule={this.props.project.schedule}
                            handleDateChange={this.handleDateChange}
                            handleProjectNameChange={this.handleProjectNameChange}
                            handleCurPhaseChange={this.handleCurPhaseChange}
                        />
                    </div>

                )


            case 1:
                return (
                    <ScheduleForm
                        phase={Object.keys(this.props.project.schedule)}
                        schedule={this.props.project.schedule}
                        handleDateChange={this.handleDateChange}
                        handlePhaseListChange={this.handlePhaseListChange}
                    />

                )

            case 2:
                return (
                    <MemberForm
                        member={this.props.project.member}
                        handleMemberChange={this.handleMemberChange}
                    />
                )

            case 3:
                return (
                    <CostForm
                        costType={['DEV_ST', 'SIT_AUTO', 'PERF_TEST', 'OSS', 'NPE', 'OTHERS']}
                        cost={this.props.project.cost}
                        handleCostChange={this.handleCostChange}
                    />

                )

            case 4:
                return (
                    <Summary
                        costType={['DEV_ST', 'SIT_AUTO', 'PERF_TEST', 'OSS', 'NPE', 'OTHERS']}
                        curPhase={this.props.project.PHASE}
                        project={this.props.project.PROJECT}
                        schedule={this.props.project.schedule}
                        member={this.props.project.member}
                        cost={this.props.project.cost}
                        jumptoStep={this.jumptoStep}
                    />
                )


            default:

        }
    }
    render() {


        let summary = this.props.project ? (
            this.getConetent(this.state.step)
        ) : ''
        return (
            <Grid container >

                {/* <button onClick={() => {
                    console.log(this.props.project)
                }}>test</button> */}

                <Grid item xs={1}>
                    <Tooltip title="Back">
                        <IconButton onClick={this.handleBack} color="inherit" aria-label="menu">
                            <ArrowBackIcon />
                        </IconButton>
                    </Tooltip>
                </Grid>

                <Grid item xs={11}>
                    {summary}
                </Grid>


            </Grid>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        getProject: (name) => dispatch(getProject(name)),
        storeProject: (project) => dispatch(
            {
                type: "STORE_PROJECT",
                data: project
            }
        )
    }
}

const mapStateToProps = state => {
    return {
        project: state.reducer.project,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(projectDetail)

