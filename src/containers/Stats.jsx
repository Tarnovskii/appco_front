import React, {Fragment} from 'react'
import axios from 'axios';
import s from '../stylesheets/stats.module.css'
import {StatsComponent} from "../components/stats-component";
import {Route, Switch} from "react-router-dom";
import {User} from "./User";

const URL = 'http://localhost:8080';

export class Stats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 0,
            data: null
        }
    }

    pagination = () => {
        return (
            <table className={s.paginationTable}>
                <tr>
                    <td onClick={() => this.handlePageClick(null, '-1')}> PREV</td>
                    <td onClick={() => this.handlePageClick(this.state.currentTab)}
                        style={{background: '#3A80BA', color: 'white'}}> {this.state.currentTab + 1} </td>
                    <td onClick={() => this.handlePageClick(this.state.currentTab + 1)}> {this.state.currentTab + 2} </td>
                    <td onClick={() => this.handlePageClick(this.state.currentTab + 2)}> {this.state.currentTab + 3} </td>
                    <td onClick={() => this.handlePageClick(this.state.currentTab + 3)}> {this.state.currentTab + 4} </td>
                    <td onClick={() => this.handlePageClick(this.state.currentTab + 4)}> {this.state.currentTab + 5} </td>
                    <td onClick={() => this.handlePageClick(null, '+1')}> NEXT</td>
                </tr>
            </table>
        )
    };

    handlePageClick = (tabNumber, forceChange) => {
        if (tabNumber === null) {
            if (forceChange === '+1') {
                this.setState({
                    currentTab: this.state.currentTab + 1,
                })
            } else if (forceChange === '-1') {
                if (this.state.currentTab === 0) return;
                this.setState({
                    currentTab: this.state.currentTab - 1,
                })
            }
        } else {
            this.setState({
                currentTab: tabNumber,
            });
        }
    };

    mapper = (dataArray) => {
        return (
            <table className={s.statsTable}>
                <tr>
                    <th style={{borderTopLeftRadius: '5px', width: '50px'}}> ID</th>
                    <th> First name</th>
                    <th> Last Name</th>
                    <th style={{width: '350px'}}> Email</th>
                    <th> Gender</th>
                    <th> IP Address</th>
                    <th style={{width: '150px'}}> Total clicks</th>
                    <th style={{borderTopRightRadius: '5px', width: '150px'}}> Total page views</th>
                </tr>
                {dataArray.map((field) => {
                    return (
                        <tr onClick={(e) => {
                            window.location.pathname = `/stats/${field.user_id}/${field.first_name}+${field.last_name}`
                        }}>
                            <td>{field.user_id} </td>
                            <td> {field.first_name} </td>
                            <td> {field.last_name} </td>
                            <td> {field.email} </td>
                            <td> {field.gender} </td>
                            <td> {field.ip_address} </td>
                            <td> {field.total_clicks} </td>
                            <td> {field.total_views} </td>
                        </tr>
                    )
                })}
            </table>
        )
    };

    getStatsFromServer = () => {
        axios.get(`${URL}/stats/${this.state.currentTab}`)
            .then(res => {
                this.setState({
                    data: this.mapper(res.data),
                })
            });
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.getStatsFromServer();
    }

    componentDidMount() {
        this.getStatsFromServer();
    }

    render() {
        return (
            <Fragment>
                <StatsComponent pagination={this.pagination} data={this.state.data}/>
            </Fragment>

        );
    }

}
