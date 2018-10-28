import React, { Component } from "react";
import { red } from "ansi-colors";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div
                    className="page-header header-filter"
                    data-parallax="true"
                    style={{
                        backgroundImage: 'url("../assets/img/bg8.jpg")'
                    }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <h1 className="title">
                                    I'm Nguyen Ngoc Hoang Vy
                                </h1>
                                <br />
                                <tr>
                                    <td>Email:</td>
                                    <td>hoangvynguyen42@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>Address: </td>
                                    <td>Ho Chi Minh, Viet Nam</td>
                                </tr>
                                <tr>
                                    <td>Phone:</td>
                                    <td>(+84) 906903693</td>
                                </tr>
                                <a
                                    href="https://drive.google.com/file/d/1a3NrxHFElhDiWEh8pOHhBrCvSC9tEQMD/view?usp=sharing"
                                    target="_blank"
                                    className="btn btn-success btn-raised"
                                >
                                    <i className="fa fa-download" /> MY CV
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="container">
                        <div className="section text-center card">
                            <div className="row">
                                <div className="col-md-8 ml-auto mr-auto">
                                    <h2 className="title">OBJECTIVE</h2>
                                    <h5 className="description">
                                        I am a 3rd-year student with no
                                        experience. I always hope to find an
                                        internship giving me experience,
                                        developing programming application and
                                        teamwork skills. I hope to meet your
                                        requirements.
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="text-center card">
                            <h2 className="title">EDUCATION</h2>
                            <div className="team">
                                <div className="team-player">
                                    <div className="card card-plain">
                                        <h4 className="card-title">
                                            <span className="badge badge-pill badge-success ">
                                                <h6>DEC 2016 - PRESENT</h6>
                                            </span>
                                            <h5>
                                                HO CHI MINH CITY UNIVERSITY OF
                                                TECHNOLOGY AND EDUCATION
                                            </h5>
                                        </h4>
                                        <div className="card-body">
                                            <p className="card-description">
                                                MAJOR: SOFTWARE TECHNOLOGY
                                                <br />
                                                GPA: 3.31/4
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center card">
                            <h2 className="title">SKILLS</h2>
                            <div className="team">
                                <div className="team-player">
                                    <div className="card card-plain">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <h5>
                                                        PROGRAMMING LANGUAGES
                                                    </h5>
                                                    <p className="card-description">
                                                        C#, Javascript
                                                    </p>
                                                    <h5>
                                                        FRAMEWORKS/ FLATFORMS
                                                    </h5>
                                                    <p className="card-description">
                                                        ReactJs, Bootstrap
                                                    </p>
                                                </div>
                                                <div className="col-md-4">
                                                    <h5>DATABASE</h5>
                                                    <p className="card-description">
                                                        MS SQL Server
                                                        <br />
                                                    </p>
                                                    <h5>VERSION CONTROL</h5>
                                                    <p className="card-description">
                                                        GitHub
                                                    </p>
                                                </div>
                                                <div className="col-md-4">
                                                    <h5>FOREIGN LANGUAGE</h5>
                                                    <p className="card-description">
                                                        English
                                                    </p>
                                                </div>
                                                <hr />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center card">
                            <h2 className="title">EXPERIENCES</h2>
                            <div className="team">
                                <div className="team-player">
                                    <div className="card card-plain">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-5 text-right">
                                                    <h5>ANDROID</h5>
                                                    <span className="badge badge-pill badge-success ">
                                                        DEC 2016 - PRESENT
                                                    </span>
                                                </div>
                                                <div className="col-md-6 text-left">
                                                    <div className="card-description">
                                                        <tr>
                                                            <td>
                                                                &#9679;&nbsp;
                                                            </td>
                                                            <td>
                                                                <b>
                                                                    Project:&nbsp;
                                                                </b>
                                                                Crush MilkTea
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                &#9679;&nbsp;
                                                            </td>
                                                            <td>
                                                                <b>
                                                                    Project
                                                                    description:&nbsp;
                                                                </b>
                                                                A free mobile
                                                                app for Android
                                                                flatform - order
                                                                and delivery
                                                                milktea
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                &#9679;&nbsp;
                                                            </td>
                                                            <td>
                                                                <b>
                                                                    Team
                                                                    size:&nbsp;
                                                                </b>
                                                                2
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                &#9679;&nbsp;
                                                            </td>
                                                            <td>
                                                                <b>
                                                                    Responsiblities:&nbsp;
                                                                </b>
                                                                Front-end in app
                                                                for client
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                &#9679;&nbsp;
                                                            </td>
                                                            <td>
                                                                <b>
                                                                    Technologies:&nbsp;
                                                                </b>
                                                                Android,
                                                                Firebase
                                                            </td>
                                                        </tr>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="col-md-5 text-right">
                                                    <h5>REACTJS</h5>
                                                    <span className="badge badge-pill badge-success ">
                                                        DEC 2016 - PRESENT
                                                    </span>
                                                </div>
                                                <div className="col-md-6 text-left">
                                                    <div className="card-description">
                                                        <tr>
                                                            <td>
                                                                &#9679;&nbsp;
                                                            </td>
                                                            <td>
                                                                <b>
                                                                    Project:&nbsp;
                                                                </b>
                                                                Task Manager
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                &#9679;&nbsp;
                                                            </td>
                                                            <td>
                                                                <b>
                                                                    Project
                                                                    description:&nbsp;
                                                                </b>
                                                                A web app
                                                                manages tasks
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                &#9679;&nbsp;
                                                            </td>
                                                            <td>
                                                                <b>
                                                                    Team
                                                                    size:&nbsp;
                                                                </b>
                                                                1
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                &#9679;&nbsp;
                                                            </td>
                                                            <td>
                                                                <b>
                                                                    Responsiblities:&nbsp;
                                                                </b>
                                                                Front-end in app
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                &#9679;&nbsp;
                                                            </td>
                                                            <td>
                                                                <b>
                                                                    Technologies:&nbsp;
                                                                </b>
                                                                ReactJs, Redux
                                                            </td>
                                                        </tr>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center card">
                            <h2 className="title">HONOR and AWARD</h2>
                            <div className="team">
                                <div className="team-player">
                                    <div className="card card-plain">
                                        <div className="card-body">
                                            <span className="badge badge-pill badge-success ">
                                                DEC 2017
                                            </span>
                                            <h5>ACM/ICPC</h5>
                                            <p className="description">
                                                Participate in Asia Ho Chi Minh
                                                City Regional Contest
                                            </p>
                                            <hr />
                                            <span className="badge badge-pill badge-success ">
                                                DEC 2017 - JUN 2018
                                            </span>
                                            <h5>
                                                MICROSOFT YOUTHSPARK SCHOLASHIP
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
            </div>
        );
    }
}

export default App;
