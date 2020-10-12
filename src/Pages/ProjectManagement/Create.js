
import React, { Component } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';
import Autocomplete from '@material-ui/lab/Autocomplete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SummaryTitle from '../../UI/SummaryTitle';
import FormTitle from '../../UI/FormTitle';
import ProjectNameForm from '../../Components/projectManagementComponents/ProjectNameForm';
import MemberForm from '../../Components/projectManagementComponents/MemberForm';
import CostForm from '../../Components/projectManagementComponents/CostForm';
import ScheduleForm from '../../Components/projectManagementComponents/ScheduleForm';
import Summary from '../../Components/projectManagementComponents/Summary';


const { RangePicker } = DatePicker;

class Create extends Component {
  state = {
    activeStep: 0,
    skipped: 0,
    steps: ['Create Project', 'Schedule', 'Member', 'Cost', 'Summary'],
    phase: ['Dev_Planning', 'Development', 'System_Test', 'SIT_Planning', 'SIT_Execution', 'PT_Execution', 'CRR_Execution', 'CVT_PVT_Go_Live'],
    role: ['projectManager', 'architect', 'testManager'],
    memberType: ['VHA', 'TCS', 'OTHER', 'DMs'],
    costType: ['DEV+ST', 'SIT+AUTO', 'Perf.Test', 'OSS', 'NPE', 'Other'],
    project: '',
    curPhase: 'Dev_Planning',
    member: {},
    cost: {},
    schedule: {},
    curSearch: '',
    edit: false
  }

  componentDidMount() {
    this.setState(prevState => {
      let member = Object.assign({}, prevState.member);
      this.state.memberType.forEach((type) => {
        member[type] = {}
        this.state.role.forEach((role) => {
          member[type][role] = []
        })
      })
      let cost = Object.assign({}, prevState.cost);
      this.state.costType.forEach((type) => {
        cost[type] = 0
      })
      return { member, cost };
    })
  }

  handleProjectNameChange = (project) => {
    this.setState({ project: project })
  }

  handleCurPhaseChange = (dataString) => {
    this.setState({ curPhase: dataString })
  }

  handleDateChange = (dateString, label) => {
    if (label) {
      this.setState({
        schedule: {
          ...this.state.schedule,
          [label]: {
            start_date: dateString[0],
            end_date: dateString[1]
          }
        }
      })
    } else {
      this.setState({
        schedule: {
          ...this.state.schedule,
          start_date: dateString[0],
          end_date: dateString[1]
        }
      })
    }
  };

  handlePhaseListChange = (phase) => {
    Object.keys(this.state.schedule).forEach(element => {
      if (phase.indexOf(element) === -1 && element !== "start_date" && element !== "end_date") {
        this.setState(prevState => {
          let schedule = Object.assign({}, prevState.schedule);
          delete schedule[element];
          return { schedule };
        })
      }
    });

    this.setState({ phase: phase })
  }

  handleMemberChange = (label, role, newValue) => {
    this.setState(prevState => {
      let member = Object.assign({}, prevState.member);

      if (!member[label]) {
        member[label] = {}
      }

      member[label][role] = newValue;
      return { member };
    })
  }

  handleCostChange = (cost, type) => {
    this.setState({
      cost: {
        ...this.state.cost,
        [type]: cost
      }
    })
  }


  handleNext = () => {
    if (this.state.edit) {
      this.setState({
        activeStep: this.state.steps.length - 1,
        edit: false
      })
    } else {
      this.setState({ activeStep: this.state.activeStep + 1 })
    }
  }

  handleBack = () => {
    this.setState({ activeStep: this.state.activeStep - 1 })
  }

  handleSubmit = () => {
    this.setState({ activeStep: 0 })
  }

  jumptoStep = (step) => {
    this.setState({
      activeStep: step,
      edit: true
    })
  }

  getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <div>
            <FormTitle title={this.state.steps[step]} />
            <ProjectNameForm
              curPhase={this.state.curPhase}
              project={this.state.project}
              phase={this.state.phase}
              schedule={this.state.schedule}
              handleDateChange={this.handleDateChange}
              handleProjectNameChange = {this.handleProjectNameChange}
              handleCurPhaseChange = {this.handleCurPhaseChange}
            />
          </div>


        )


      case 1:

        return (
          <ScheduleForm
            phase={this.state.phase}
            schedule={this.state.schedule}
            handleDateChange={this.handleDateChange}
            handlePhaseListChange={this.handlePhaseListChange}
          />
        )

      case 2:
        return <MemberForm member={this.state.member} handleMemberChange={this.handleMemberChange} />

      case 3:
        return <CostForm costType={this.state.costType} cost={this.state.cost} handleCostChange={this.handleCostChange} />
      case 4:
        return (
          <Summary
            costType={this.state.costType}
            curPhase={this.state.curPhase}
            project={this.state.project}
            schedule={this.state.schedule}
            member={this.state.member}
            cost={this.state.cost}
            jumptoStep={this.jumptoStep}
          />
        )
      default:
        return <div>unkown</div>;
    }
  }



  render() {
    const stepList = this.state.steps.map((label, index) => {
      const stepProps = {};
      const labelProps = {};
      return (
        <Step key={label} {...stepProps}>
          <StepLabel {...labelProps}>{label}</StepLabel>
        </Step>
      );
    })

    const content = this.getStepContent(this.state.activeStep)

    const nextBtn = this.state.activeStep === this.state.steps.length - 1 ? (
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleSubmit}
        >
          Submit
        </Button>
      </div>
    ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleNext}
        >
          {this.state.edit ? "Summary" : "Next"}
        </Button>
      );


    const backBtn = this.state.activeStep > 0 ? (
      this.state.edit ? '' : (
        <Tooltip title="Back">
          <IconButton onClick={this.handleBack} color="inherit" aria-label="menu">
            <ArrowBackIcon />
          </IconButton>
        </Tooltip>
      )
    ) : '';


    return (
      <div style={{ paddingBottom: "50px" }}>
        <Stepper activeStep={this.state.activeStep}>
          {stepList}
        </Stepper>
        <Grid container style={{ paddingLeft: "80px" }}>
          <Grid>
            {backBtn}
          </Grid>
          {content}
        </Grid>
        {nextBtn}
      </div>
    )

  }

}

export default Create
