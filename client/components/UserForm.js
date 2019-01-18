/* eslint-disable default-case */
import React, {Component} from 'react'
// import FormIncome from './FormIncome'
// import FormDepreciation from './FormDepreciation'
// import FormBonus from './FormBonus'

export class UserForm extends Component {
  state = {
    step: 1,
    netIncome: 0, //starting point
    curBonus: 0, //current bonuses paid
    totalBonus: 0, //total bonuses paid and planned
    retirement: 0, //retirement, such as a safe harbor
    otherEmp: 0, //other expenses anticipated for employees/employmeny purposes
    curDep: 0, //current depreciation year to date
    curAmort: 0, //current amortization year to date
    totalDep: 0, //total depreciation for the year
    totalAmort: 0, //total amortization for the year
    curIntExp: 0, //current interest expense year to date
    totalIntExp: 0, //total interest expense anticipated for the year
    curStateTaxes: 0, //current taxes paid for state purposes, year to date
    totalStateTaxes: 0, //total taxes anticipated for the year
    meals: 0, //meals, subject to 50% limitation, must enter at 100%.
    entertainment: 0, //subject to 100% limitation, must enter at 100%
    nondeductible: 0, //anything that is a fine, penalty, etc. Enter at 100%.
    sigExp: 0, //any unusual expense that would not represent the normal course of business if annualized
    sigInc: 0 //any unusual income that would not represent the normal course of business if annualized
  }

  // Proceed to next step
  nextStep = () => {
    const {step} = this.state
    this.setState({
      step: step + 1
    })
  }

  // Go back to previous step
  prevStep = () => {
    const {step} = this.state
    this.setState({
      step: step - 1
    })
  }

  // Handle changing fields
  handleChange = input => event => {
    this.setState({
      [input]: event.target.value
    })
  }

  render() {
    const {step} = this.state
    const {
      netIncome,
      curBonus,
      totalBonus,
      curDep,
      curAmort,
      totalDep,
      totalAmort,
      curIntExp,
      totalIntExp,
      curStateTaxes,
      totalStateTaxes,
      meals,
      entertainment,
      nondeductible,
      sigExp,
      sigInc
    } = this.state
    const values = {
      netIncome,
      curBonus,
      totalBonus,
      curDep,
      curAmort,
      totalDep,
      totalAmort,
      curIntExp,
      totalIntExp,
      curStateTaxes,
      totalStateTaxes,
      meals,
      entertainment,
      nondeductible,
      sigExp,
      sigInc
    }
    switch (step) {
      case 1:
        return (
          <h1>INCOME FORM</h1>
          //   <FormIncome
          //     nextStep={this.nextStep}
          //     handleChange={this.handleChange}
          //     values={values}
          //   />
        )
      case 2:
        return (
          <h1>DEPRECIATION FORM</h1>
          //   <FormDepreciation
          //     nextStep={this.nextStep}
          //     prevStep={this.prevStep}
          //     handleChange={this.handleChange}
          //     values={values}
          //   />
        )
      case 3:
        return (
          <h1>BONUS FORM</h1>
          // <FormBonus
          //   nextStep={this.nextStep}
          //   prevStep={this.prevStep}
          //   handleChange={this.handleChange}
          //   values={values}
          // />
        )
      case 4:
        return <h1>Confirm</h1>
      case 5:
        return <h1>Success</h1>
      case 6:
        return <h1>Confirm</h1>
      case 7:
        return <h1>Success</h1>
    }
  }
}

export default UserForm
