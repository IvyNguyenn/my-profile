import React from "react";

export const ExperienceRow = (props) => (
  <>
    <div className="row">
      <div className="col-md-5 text-right">
        <h5>{props.title}</h5>
        <span className="badge badge-pill badge-success ">
          {`${props.fromTime} - ${props.toTime}`}
        </span>
      </div>
      <div className="col-md-6 text-left">
        <div className="card-description">
          {props.projectName && (
            <tr>
              <td>&#9679;&nbsp;</td>
              <td>
                <b>Project:&nbsp;</b>
                {props.projectName}
              </td>
            </tr>
          )}
          {props.projectDes && (
            <tr>
              <td>&#9679;&nbsp;</td>
              <td>
                <b>Project description:&nbsp;</b>
                {props.projectDes}
              </td>
            </tr>
          )}
          {props.teamSize && (
            <tr>
              <td>&#9679;&nbsp;</td>
              <td>
                <b>Team size:&nbsp;</b>
                {props.teamSize}
              </td>
            </tr>
          )}
          {props.responsiblities && (
            <tr>
              <td>&#9679;&nbsp;</td>
              <td>
                <b>Responsiblities:&nbsp;</b>
                {props.responsiblities}
              </td>
            </tr>
          )}
          {props.technologies && (
            <tr>
              <td>&#9679;&nbsp;</td>
              <td>
                <b>Technologies:&nbsp;</b>
                {props.technologies}
              </td>
            </tr>
          )}
        </div>
      </div>
    </div>
    {props.underLine && <hr />}
  </>
);
