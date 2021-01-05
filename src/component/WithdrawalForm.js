import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
class WithdrawalComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "John",
      withdrawal: "",
      pranno: "1122434",
      dateOfBirth: "11/1/1990"
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
    alert("withdrawed successfully");
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <div className="card form shadow p-3 mb-5 rounded">
            {/*<div class="row">  
          <div class="col-md-4 offset-md-4" > */}

            <div className="card-title" style={{ textAlign: "center" }}>
              <h6>WITHDRAWAL FORM</h6>
            </div>
            <div className="card-body">
              <form onSubmit={this.handleSubmit} className="form-group">
                <table style={{ width: "1000px" }}>
                  <tbody>
                    <tr>
                      <td>PRAN</td>
                      <td>
                        <input
                          type="text"
                          name="pranno"
                          value={this.state.pranno}
                          onChange={this.handleClick}
                          disabled={true}
                          className="form-control"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>NAME</td>
                      <td>
                        <input
                          type="text"
                          name="name"
                          value={this.state.name}
                          onChange={this.handleClick}
                          disabled={true}
                          className="form-control"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>DATE OF BIRTH</td>
                      <td>
                        <input
                          type="text"
                          name="dateOfBirth"
                          value={this.state.dateOfBirth}
                          onChange={this.handleClick}
                          disabled={true}
                          className="form-control"
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>
                        WITHDRAWAL DUE TO{" "}
                        <sup style={{ color: "red", fontSize: "15px" }}>
                          {" "}
                          *{" "}
                        </sup>
                      </td>
                      <td>
                        <select
                          name="withdrawal"
                          required
                          className="form-control"
                        >
                          <option value="">--select--</option>
                          <option value="e@60">exit at 60</option>
                          <option value="Premature">Premature Exit</option>
                          <option value="partialwithdrawal">
                            Partial Withdrawal
                          </option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div
                  style={{ textAlign: "center", marginTop: "30px" }}
                  className="form-group"
                >
                  <div
                    style={{
                      textAlign: "left",
                      color: "red",
                      marginLeft: "5cm"
                    }}
                  >
                    <sup style={{ color: "red", fontSize: "6px" }}> * </sup>*
                    Mandatory Fields
                  </div>
                  <button type="submit" className="btn btn-success">
                    Submit
                  </button>
                  <span>{"        "} </span>
                  <button type="reset" className="btn btn-info">
                    Reset
                  </button>{" "}
                </div>
              </form>
            </div>
          </div>
        </div>

        {/*
       </div>
       </div>} */}
      </React.Fragment>
    );
  }
}

export default WithdrawalComponent;
