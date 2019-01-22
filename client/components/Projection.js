import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  getProjectThunk,
  createProjectThunk,
  updateProjectThunk
} from '../store/project'
import {me} from '../store'
import {addComma} from '../../script/util'

export class Projection extends Component {
  async componentDidMount() {
    await this.props.loadInitialData()
    await this.props.get(this.props.id)
  }

  render() {
    console.log('********this.props', this.props)
    const {project} = this.props
    const {
      currentMonth,
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
      meals,
      entertainment,
      nondeductible,
      penalty,
      sigExp,
      sigInc,
      retirement,
      otherEmp
    } = project
    return (
      <div>
        <h2>Your current projection</h2>

        <table>
          <tr>
            <th>Line Item</th>
            <th>Information</th>
          </tr>

          <tr>
            <th>Before Annualization</th>
          </tr>

          <tr>
            <td>Net Income</td>

            <td>{addComma(netIncome)}</td>
            {/* <td>{addComma(netIncome)}</td> */}
            {/* This is the base */}
          </tr>

          <tr>
            <td>Significant Income</td>
            <td>{addComma(sigInc)}</td>
            {/* Remove now. Add back after annualization */}
          </tr>

          <tr>
            <td>Significant Expenses</td>
            <td>{addComma(sigExp)}</td>
            {/* Add back now. Remove after annualization */}
          </tr>

          <tr>
            <td>Current Depreciation</td>
            <td>{addComma(curDep)}</td>
            {/* Add back */}
          </tr>

          <tr>
            <td>Current Amortization</td>
            <td>{addComma(curAmort)}</td>
            {/* Add back */}
          </tr>

          <tr>
            <td>Bonuses Paid</td>
            <td>{addComma(curBonus)}</td>
            {/* Add back now. Remove after annualization */}
          </tr>

          <tr>
            <td>Interest Expense Paid</td>
            <td>{addComma(curIntExp)}</td>
            {/* Add back now. Remove after annualization */}
          </tr>

          <tr>
            <td>Interest Income Received</td>
            <td>{addComma(curIntInc)}</td>
            {/* Remove now. Add back after annualization */}
          </tr>

          <tr>
            <td>Federal Taxes Paid</td>
            <td>{addComma(curFedTaxes)}</td>
            {/* Add back */}
          </tr>

          <tr>
            <td>State Taxes Paid</td>
            <td>{addComma(curStateTaxes)}</td>
            {/* Add back */}
          </tr>

          <tr>
            <td>Penalties Paid</td>
            <td>{addComma(penalty)}</td>
            {/* Add back */}
          </tr>

          <tr>
            <td>Meals</td>
            <td>{addComma(meals)}</td>
            {/* Add back 50% */}
          </tr>

          <tr>
            <td>Entertainment</td>
            <td>{addComma(entertainment)}</td>
            {/* Add back */}
          </tr>

          <tr>
            <td>Other Nondeductible Expenses</td>
            <td>{addComma(nondeductible)}</td>
            {/* Add back */}
          </tr>

          <tr>
            <td>Adjusted Net Income Before Annualization</td>
            <td>
              {addComma(
                netIncome -
                  sigInc +
                  sigExp +
                  curDep +
                  curAmort +
                  curBonus +
                  curIntExp -
                  curIntInc +
                  curFedTaxes +
                  curStateTaxes +
                  penalty +
                  0.5 * meals +
                  entertainment +
                  nondeductible
              )}
            </td>
          </tr>

          <tr>
            <td>Annualized Net Income</td>
            <td>
              {addComma(
                (netIncome -
                  sigInc +
                  sigExp +
                  curDep +
                  curAmort +
                  curBonus +
                  curIntExp -
                  curIntInc +
                  curFedTaxes +
                  curStateTaxes +
                  penalty +
                  0.5 * meals +
                  entertainment +
                  nondeductible) /
                  (currentMonth / 12)
              )}
            </td>
          </tr>

          <tr>
            <th>After Annualization</th>
          </tr>

          <tr>
            <td>Annualized Net Income</td>
            <td>
              {addComma(
                (netIncome -
                  sigInc +
                  sigExp +
                  curDep +
                  curAmort +
                  curBonus +
                  curIntExp -
                  curIntInc +
                  curFedTaxes +
                  curStateTaxes +
                  penalty +
                  0.5 * meals +
                  entertainment +
                  nondeductible) /
                  (currentMonth / 12)
              )}
            </td>
          </tr>

          <tr>
            <td>Significant Income</td>
            <td>{addComma(sigInc)}</td>
          </tr>

          <tr>
            <td>Significant Expenses</td>
            <td>{addComma(sigExp)}</td>
          </tr>

          <tr>
            <td>Total Depreciation</td>
            <td>{addComma(totalDep)}</td>
          </tr>

          <tr>
            <td>Total Amortization</td>
            <td>{addComma(totalAmort)}</td>
          </tr>

          <tr>
            <td>Total Bonuses</td>
            <td>{addComma(curBonus + totalBonus)}</td>
          </tr>

          <tr>
            <td>Retirement Contributions</td>
            <td>{addComma(retirement)}</td>
          </tr>

          <tr>
            <td>Other Employment Expenses</td>
            <td>{addComma(otherEmp)}</td>
          </tr>

          <tr>
            <td>Total Interest Expense</td>
            <td>{addComma(totalIntExp)}</td>
          </tr>

          <tr>
            <td>Total Interest Income</td>
            <td>{addComma(totalIntInc)}</td>
          </tr>

          <tr>
            <td>Total State Tax Liability</td>
            <td>{addComma(totalStateTaxes)}</td>
          </tr>

          <tr>
            <td>
              Anticipated Taxable Net Income<strong>*</strong>
            </td>
            <td>
              {addComma(
                (netIncome -
                  sigInc +
                  sigExp +
                  curDep +
                  curAmort +
                  curBonus +
                  curIntExp -
                  curIntInc +
                  curFedTaxes +
                  curStateTaxes +
                  penalty +
                  0.5 * meals +
                  entertainment +
                  nondeductible) /
                  (currentMonth / 12) +
                  sigInc -
                  sigExp -
                  totalDep -
                  totalAmort -
                  curBonus -
                  totalBonus -
                  retirement -
                  otherEmp -
                  totalIntExp +
                  totalIntInc -
                  totalStateTaxes
              )}
            </td>
          </tr>
        </table>

        <h4 id="warning">
          *This does not include adjustments for current and prior year Accounts
          Receivable and Accounts Payable, or any other tax adjustments that may
          be required and any tax saving strategies your accountant may
          recommend. This is informational only. Please do not make business
          decisions based on this projection.
        </h4>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapStateToProps = state => {
  return {
    email: state.user.email,
    id: state.user.id,
    project: state.project
  }
}

const mapDispatchToProps = {
  loadInitialData: me,
  get: getProjectThunk, //takes a userId
  create: createProjectThunk, //takes a userId
  update: updateProjectThunk //takes a userId
}

export default connect(mapStateToProps, mapDispatchToProps)(Projection)
