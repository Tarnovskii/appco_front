import React, {Fragment} from 'react'
import s from '../stylesheets/stats.module.css'

export const StatsComponent = (props) => {
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
                            Main page
                        </a> > User statistics
                    </p>
                </div>
                <div className={s.underHeader}>
                    <b> User statistics </b>
                </div>
                <div className={s.tableWrapper}>
                    {props.data}
                </div>
                <div className={s.paginationWrapper}>
                    {props.pagination()}
                </div>
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
};
