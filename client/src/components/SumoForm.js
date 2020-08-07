import React, { Component } from 'react';

class SumoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 'coconut' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) { this.setState({ value: event.target.value }); }

  handleSubmit(event) {
    const { value } = this.state;
    // alert(`Your favorite flavor is: ${value}`);
    if (value === 'lime');
    event.preventDefault();
  }

  render() {
    const { value } = this.state;
    return (
      <div className="wrapper u-no-margin--top">
        <div className="main-content inner-wrapper">
          <div className="p-suru">
            <div className="p-strip is-deep">
              <div className="row">
                <h2>
                  Paul&apos;s fantasy sumo. (Incomplete/Not open)
                  Next tournament is in September 2020
                </h2>
                <form onSubmit={this.handleSubmit}>
                  <label htmlFor="sumoform">
                    Yokozuna/Ozeki:
                    <select value={value} onChange={this.handleChange}>
                      {' '}
                      <option value="grapefruit">Grapefruit</option>
                      <option value="lime">Lime</option>
                      <option value="coconut">Coconut</option>
                      <option value="mango">Mango</option>
                    </select>
                  </label>
                  <label htmlFor="sumoform">
                    Sekiwake/Komusubi:
                    <select value={value} onChange={this.handleChange}>
                      {' '}
                      <option value="grapefruit">Grapefruit</option>
                      <option value="lime">Lime</option>
                      <option value="coconut">Coconut</option>
                      <option value="mango">Mango</option>
                    </select>
                  </label>
                  <label htmlFor="sumoform">
                    Upper Maegashria (1-5):
                    <select value={value} onChange={this.handleChange}>
                      {' '}
                      <option value="grapefruit">Grapefruit</option>
                      <option value="lime">Lime</option>
                      <option value="coconut">Coconut</option>
                      <option value="mango">Mango</option>
                    </select>
                  </label>
                  <label htmlFor="sumoform">
                    Middle Maegashria (6-10):
                    <select value={value} onChange={this.handleChange}>
                      {' '}
                      <option value="grapefruit">Grapefruit</option>
                      <option value="lime">Lime</option>
                      <option value="coconut">Coconut</option>
                      <option value="mango">Mango</option>
                    </select>
                  </label>
                  <label htmlFor="sumoform">
                    Lower Maegashria (11-17):
                    <select value={value} onChange={this.handleChange}>
                      {' '}
                      <option value="grapefruit">Grapefruit</option>
                      <option value="lime">Lime</option>
                      <option value="coconut">Coconut</option>
                      <option value="mango">Mango</option>
                    </select>
                  </label>
                  <input type="submit" value="Submit" />
                </form>
              </div>
            </div>
          </div>
          <div className="p-strip is-deep">
            <div className="row">
              <h2>
                Sumo results here:
              </h2>

              <table className="p-table--sortable" role="grid">
                <thead>
                  <tr>
                    <th id="t-name" aria-sort="none" role="columnheader">Status</th>
                    <th id="t-users" aria-sort="none" role="columnheader" className="u-align--right">Cores</th>
                    <th id="t-units" aria-sort="none" role="columnheader" className="u-align--right">RAM</th>
                    <th id="t-revenue" aria-sort="none" role="columnheader" className="u-align--right">Disks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr role="row">
                    <td role="gridcell" className="u-align--right">1</td>
                    <td role="gridcell" className="u-align--right">1 GiB</td>
                    <td role="gridcell" className="u-align--right">2</td>
                  </tr>
                  <tr role="row">
                    <td role="gridcell" className="u-align--right">1</td>
                    <td role="gridcell" className="u-align--right">1 GiB</td>
                    <td role="gridcell" className="u-align--right">2</td>
                  </tr>
                  <tr role="row">
                    <td role="gridcell" className="u-align--right">8</td>
                    <td role="gridcell" className="u-align--right">3.9 GiB</td>
                    <td role="gridcell" className="u-align--right">3</td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SumoForm;
