import React, {Fragment} from 'react'
import axios from "axios";
import s from '../stylesheets/stats.module.css'
import {UserComponent} from "../components/user-component";

const URL = 'http://localhost:8080';

export class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // To avoid unnecessary update keep all options in the state.
            clicksChartOptions: {
                legend: '',
                title: '',
                chart: {
                    type: 'spline',
                    scrollablePlotArea: {
                        minWidth: 600,
                        scrollPositionX: 1
                    }
                },
                plotOptions: {
                    spline: {
                        lineWidth: 4,
                        states: {
                            hover: {
                                lineWidth: 5
                            }
                        },
                        marker: {
                            enabled: false
                        },
                    },
                }
            },
            viewsChartOptions: {
                legend: '',
                title: '',
                chart: {
                    type: 'spline',
                    scrollablePlotArea: {
                        minWidth: 600,
                    }
                },

                plotOptions: {
                    spline: {
                        lineWidth: 4,
                        states: {
                            hover: {
                                lineWidth: 5
                            }
                        },
                        marker: {
                            enabled: false
                        },
                    },
                }
            },
            userID: this.props.match.params.id,
            userName: this.props.match.params.user_name,
        };
        console.log(this.props.match.params.id)
    }

    fetchDataFromServerForUserData = () => {
        axios.get(`${URL}/user/${this.state.userID}`)
            .then(res => {
                this.setState({
                    clicksChartOptions: {
                        xAxis: {
                            categories: res.data.map((field) => {
                                let dates = field.date.split('-');
                                return Date.UTC(+dates[0], +dates[1] - 1, +dates[2], 0, 0, 0);
                            }),
                            labels: {
                                useHTML: true,
                                formatter: (e) => {
                                    return new Date(e.value).getDate();
                                }
                            }
                        },
                        yAxis: {
                            title: '',
                            labels: {
                                styles: {
                                    fontWeight: 'normal',
                                    fontSize: '16px',
                                    color: '#CCCCCC'
                                }
                            }
                        },
                        series: [{
                            data: res.data.map((field) => {
                                return field.clicks
                            }),
                        }],
                    },
                    viewsChartOptions: {
                        xAxis: {
                            categories: res.data.map((field) => {
                                let dates = field.date.split('-');
                                return Date.UTC(+dates[0], +dates[1] - 1, +dates[2], 0, 0, 0);
                            }),
                            labels: {
                                useHTML: true,
                                formatter: (e) => {
                                    return new Date(e.value).getDate();
                                }
                            },
                        },
                        yAxis: {
                            title: '',
                            labels: {
                                styles: {
                                    fontWeight: 'normal',
                                    fontSize: '16px',
                                    color: '#CCCCCC'
                                },
                            }
                        },
                        series: [{
                            data: res.data.map((field) => {
                                return field.page_views
                            }),
                        }],
                    }
                });
            });
    };

    componentDidMount() {
        this.fetchDataFromServerForUserData();
    }

    render() {
        const {clicksChartOptions, viewsChartOptions, hoverData} = this.state;

        return (
            <Fragment>
                <UserComponent clicksChartOptions={clicksChartOptions} viewsChartOptions={viewsChartOptions}
                               hoverData={hoverData} userName={this.state.userName}/>
            </Fragment>
        )
    }
}
