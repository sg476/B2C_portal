import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
class FormComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      btn_input_amount: "",
      total_contribution_amount: "",
      trial_commission: 0,
      gst_amount: 0,
      amount_payable: ""
    };
  }
  handleClick = (e) => {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value
    });

    console.log(this.state);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    alert("contributed successfully");
  };
  render() {
    return (
      <React.Fragment>
        <div className="card form shadow p-3 mb-5 rounded">
          <div style={{ textAlign: "center" }} className="form-group">
            <form
              onSubmit={this.handleSubmit}
              style={{ display: "inline-block" }}
            >
              <div style={{ align: "centre", textAlign: "center" }}>
                <h6>Subsequent Contribution</h6>
              </div>

              <table>
                <tbody>
                  <tr>
                    <td>Voluntary contribution Amount</td>
                    <td>
                      {" "}
                      &#x20B9;
                      <input
                        type="number"
                        name="btn_input_amount"
                        value={this.state.btn_input_amount}
                        onChange={this.handleClick}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <button
                        onClick={this.handleClick}
                        name="btn_input_amount"
                        value="1000"
                        className="btn btn-primary"
                      >
                        &#x20B9;1000
                      </button>
                      &nbsp; &nbsp;
                      <button
                        onClick={this.handleClick}
                        name="btn_input_amount"
                        value="2000"
                        className="btn btn-primary"
                      >
                        &#x20B9;2000
                      </button>
                      &nbsp; &nbsp;
                      <button
                        onClick={this.handleClick}
                        name="btn_input_amount"
                        value="5000"
                        className="btn btn-primary"
                      >
                        &#x20B9;5000
                      </button>
                      &nbsp; &nbsp;
                      <button
                        onClick={this.handleClick}
                        name="btn_input_amount"
                        value="10000"
                        className="btn btn-primary"
                      >
                        &#x20B9;10000
                      </button>
                      {/*
                  
                 */}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div
                style={{ textAlign: "center", marginTop: "30px" }}
                className="form-group"
              >
                <button type="submit" className="btn btn-success">
                  Confirm
                </button>
              </div>
            </form>
          </div>

          <div style={{ textAlign: "center" }} className="form-group">
            <form
              onSubmit={this.handleSubmit}
              style={{ display: "inline-block" }}
            >
              <table>
                <tbody>
                  <tr>
                    <td>Total Contributor Amount</td>
                    <td>
                      {" "}
                      &#x20B9;{" "}
                      <input
                        type="number"
                        name="total_contribution_amount"
                        disabled={true}
                        value={this.state.total_contribution_amount}
                        onChange={this.handleClick}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      POP Trial commission <sup>&#x23;</sup>
                    </td>
                    <td>
                      {" "}
                      &#x20B9;{" "}
                      <input
                        type="number"
                        name="trial_commission"
                        disabled={true}
                        value={this.state.trial_commission}
                        onChange={this.handleClick}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Goods and Service Tax(GST)</td>
                    <td>
                      {" "}
                      &#x20B9;{" "}
                      <input
                        type="number"
                        name="gst_amount"
                        disabled={true}
                        value={this.state.gst_amount}
                        onChange={this.handleClick}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Amount Payable</td>
                    <td>
                      {" "}
                      &#x20B9;{" "}
                      <input
                        type="number"
                        name="amount_payable"
                        disabled={true}
                        value={this.state.amount_payable}
                        onChange={this.handleClick}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FormComponent;
