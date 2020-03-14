import React, {Fragment} from 'react'
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import s from "../stylesheets/stats.module.css";

export const UserComponent = (props) => {
    return (
        <Fragment>
            <div className={s.header}>
                <div className={s.nameWrapper}>
                    <b className={s.name}> AppCo </b>
                </div>
            </div>
            <div className={s.contentBox}>
                <div className={s.linksWrapper}>
                    <p style={{color: '#3A80BA'}}>
                        <a style={{color: '#CCCCCC', textDecoration: 'none'}} href={'/'}>
                            Main page >
                        </a> <a style={{color: '#CCCCCC', textDecoration: 'none'}} href={'/stats'}>
                        User statistic
                    </a> > {props.userName.split('+').join(' ')}
                    </p>
                </div>

                <div className={s.underHeader}>
                    <b> {props.userName.split('+').join(' ')} </b>
                </div>
                <div className={s.graphHeaderWrapper}>
                    <p className={s.graphHeader}>
                        Clicks
                    </p>
                </div>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={props.clicksChartOptions}
                />

                <div className={s.graphHeaderWrapper}>
                    <p className={s.graphHeader}>
                        Views
                    </p>
                </div>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={props.viewsChartOptions}
                />
            </div>
            <div className={s.footer}>
                <table style={{width: '100%', height: 'inherit'}}>
                    <tr>
                        <td style={{width: '25%'}}><p className={s.footerText}> AppCo </p></td>
                        <td style={{width: '50%'}}><p className={s.footerText}> All rights reserved by ThemeTags</p>
                        </td>
                        <td style={{width: '25%'}}><p className={s.footerText}> Copyrights © 2019 </p></td>
                    </tr>
                </table>
            </div>
        </Fragment>
    )
}
