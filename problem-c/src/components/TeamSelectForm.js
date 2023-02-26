import React, { useState } from 'react'; //import React Component

export default function TeamSelectForm(props) {

  //Your work goes here
  const [selectedTeam, setSelectedTeam] = useState('');
  const [includeRunnerUp, setIncludeRunnerUp] = useState(false);

  const optionElems = props.teamOptions.map((teamName) => {
    return <option key={teamName} value={teamName}>{teamName}</option>
  })

  function handleTeamChange(event) {
    setSelectedTeam(event.target.value);
  }

  function handleRunnerUpChange(event) {
    setIncludeRunnerUp(event.target.checked);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.applyFilterCallback(selectedTeam, includeRunnerUp);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row align-items-center mb-3">
        <div className="col-auto">
          <select id="teamSelect" className="form-select" value={selectedTeam} onChange={handleTeamChange}>
            <option value="">Show all teams</option>
            {optionElems}
          </select>
        </div>
        <div className="col-auto">
          <div className="form-check">
            <input id="runnerupCheckbox" type="checkbox" className="form-check-input" checked={includeRunnerUp} onChange={handleRunnerUpChange} />
            <label htmlFor="runnerupCheckbox" className="form-check-label">Include runner-up</label>
          </div>
        </div>
        <div className="col-auto">
          <button id="submitButton" type="submit" className="btn btn-warning">Apply Filter</button>
        </div>
      </div>
    </form>
  );
}
