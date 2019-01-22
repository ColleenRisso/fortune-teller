/* eslint-disable complexity */
/* eslint-disable default-case */
import React, {Component} from 'react'
import FormIncome from './Forms/FormIncome'
import FormDepreciation from './Forms/FormDepreciation'
import FormBonus from './Forms/FormBonus'
import FormInterest from './Forms/FormInterest'
import FormTax from './Forms/FormTax'
import FormNDE from './Forms/FormNDE'
import Confirm from './Forms/Confirm'
import Success from './Forms/Success'

export class UserForm extends Component {
  state = {
    step: 1,
    netIncome: 0, //starting point
    sigInc: 0, //any unusual income that would not represent the normal course of business if annualized
    sigExp: 0, //any unusual expense that would not represent the normal course of business if annualized
    curDep: 0, //current depreciation year to date
    curAmort: 0, //current amortization year to date
    totalDep: 0, //total depreciation for the year
    totalAmort: 0, //total amortization for the year
    curBonus: 0, //current bonuses paid
    totalBonus: 0, //total bonuses paid and planned
    retirement: 0, //retirement, such as a safe harbor
    otherEmp: 0, //other expenses anticipated for employees/employmeny purposes
    curIntExp: 0, //current interest expense year to date
    totalIntExp: 0, //total interest expense anticipated for the year
    curIntInc: 0, //current interest income year to date
    totalIntInc: 0, //total interest income anticipated for the year
    curStateTaxes: 0, //current taxes paid for state purposes, year to date
    totalStateTaxes: 0, //total taxes anticipated for the year
    curFedTaxes: 0, //current taxes paid for state purposes, year to date
    totalFedTaxes: 0, //total taxes anticipated for the year
    meals: 0, //meals, subject to 50% limitation, must enter at 100%.
    entertainment: 0, //subject to 100% limitation, must enter at 100%
    nondeductible: 0, //anything that is a fine, penalty, etc. Enter at 100%.
    penalty: 0 //specifically for taxes. Includes interest
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
      curIntInc,
      totalIntInc,
      curStateTaxes,
      totalStateTaxes,
      curFedTaxes,
      totalFedTaxes,
      meals,
      entertainment,
      nondeductible,
      penalty,
      sigExp,
      sigInc,
      retirement,
      otherEmp
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
      curIntInc,
      totalIntInc,
      curStateTaxes,
      totalStateTaxes,
      curFedTaxes,
      totalFedTaxes,
      meals,
      entertainment,
      nondeductible,
      penalty,
      sigExp,
      sigInc,
      retirement,
      otherEmp
    }
    switch (step) {
      case 1:
        return (
          <FormIncome
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 2:
        return (
          <FormDepreciation
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 3:
        return (
          <FormBonus
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 4:
        return (
          <FormInterest
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 5:
        return (
          <FormTax
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 6:
        return (
          <FormNDE
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 7:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        )
      case 8:
        return <Success prevStep={this.prevStep} values={values} />
    }
  }
}

export default UserForm
