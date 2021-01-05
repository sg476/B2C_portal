import React, { Component } from "react";

export class Enrollment extends Component {
  constructor(props) {
    super(props);
    this.state = { id: "", password: "" };
  }
  setEmpState = (e) => {
    const value = e.target.value;
    const field = e.target.name;
    this.setState({ [field]: value }, () => {
      console.log(value);
    });
  };
  handleLogin = (e) => {
    e.preventDefault();
    alert("enrolled successfully");
  };

  render() {
    return (
      <React.Fragment>
        <div className=" container-fluid offset-2 col-md-8 ">
          <h2 className="heading">Enrollment - New User Registration </h2>
          <div className="card form shadow p-3 mb-5 rounded">
            <form>
              <h4 className="text-center">Choose appropriate options</h4>
              <table>
                <tbody>
                  <tr>
                    <td colSpan="2">
                      <span className="col_1">
                        Applicant Type<span className="text-danger">*</span>
                        &nbsp;
                      </span>
                    </td>
                    <td>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="applicant"
                          id="Individual"
                          value="Individual"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="Individual"
                        >
                          Individual Subscriber
                        </label>
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="applicant"
                          id="Corporate"
                          value="Corporate"
                        />
                        <label className="form-check-label" htmlFor="Corporate">
                          Corporate Subscriber
                        </label>
                      </div>
                    </td>
                  </tr>
                  <br />
                  <tr>
                    <td colSpan="2">
                      <div className="col_1">
                        Status of Application
                        <span className="text-danger">*</span>&nbsp;
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="SOP"
                          id="ci"
                          value="ci"
                        />
                        <label className="form-check-label" htmlFor="ci">
                          Citizen of India
                        </label>
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="SOP"
                          id="nri"
                          value="nri"
                        />
                        <label className="form-check-label" htmlFor="nri">
                          Non Resident of India
                        </label>
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="SOP"
                          id="oci"
                          value="oci"
                        />
                        <label className="form-check-label" htmlFor="oci">
                          Overseas Citizen of India
                        </label>
                      </div>
                    </td>
                  </tr>
                  <br />
                  <tr>
                    <td colSpan="2">
                      <div className="col_1">
                        Register With<span className="text-danger">*</span>
                        &nbsp;
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="register"
                          id="aadhaar"
                          value="aadhaar"
                        />
                        <label className="form-check-label" htmlFor="aadhaar">
                          Aadhaar offline e-KYC
                        </label>
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="register"
                          id="pan"
                          value="pan"
                        />
                        <label className="form-check-label" htmlFor="pan">
                          Permanent Account Number(Pan)
                        </label>
                      </div>
                    </td>
                  </tr>
                  <br />
                  <tr>
                    <td colSpan="2">
                      <span className="col_1">
                        Account Type<span className="text-danger">*</span>&nbsp;
                      </span>
                    </td>
                    <td>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="accType"
                          id="tier_12"
                          value="tier_12"
                        />
                        <label className="form-check-label" htmlFor="tier_12">
                          Tier I &amp;&amp; Tier II
                        </label>
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="accType"
                          id="tier_1"
                          value="tier_1"
                        />
                        <label className="form-check-label" htmlFor="tier_1">
                          Tier I
                        </label>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="text-center btn">
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  onClick={this.handleLogin}
                >
                  Enroll
                </button>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Enrollment;
