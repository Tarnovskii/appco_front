import React from 'react'
import s from '../stylesheets/main.module.css'
import Rectangle_8 from '../images/mainPage/top.png'
import mobile from '../images/mainPage/mobile.svg'
import cd from '../images/mainPage/cd.svg'
import rr from '../images/mainPage/rr.svg'
import sd from '../images/mainPage/sd.svg'
import notebook from '../images/mainPage/macbook.svg'
import backPlans from '../images/mainPage/backPlans.svg'
import basicPlan from '../images/mainPage/basicPlan.svg'
import standartPlan from '../images/mainPage/standartPlan.svg'
import unlimitedPlan from '../images/mainPage/unlimitedPlan.svg'
import footerSvg from '../images/mainPage/footer.svg'


export const MainComponent = () => {
    return (
        <fragment>
            <div className={s.contentWrapper}>
                <div className={s.content}>
                    <div className={s.headerWrapper}
                         style={{
                             background: `url(${Rectangle_8})`,
                             backgroundRepeat: 'no-repeat'
                         }}>
                        <div className={s.header}>
                            <div className={s.descriptionWrapper}>
                                <p style={{
                                    fontSize: '40px',
                                    lineHeight: '49px'
                                }}> AppCo </p>
                                <p style={{
                                    fontSize: '48px',
                                    lineHeight: '59px'
                                }}><b>Brainstorming</b> for desired perfect Usability </p>
                                <p style={{
                                    fontSize: '20px',
                                    lineHeight: '142%',
                                }}>Our design projects are fresh and simple and will benefit your business greatly.
                                    Learn more about our work!</p>
                                <br/>
                                <a href={'/stats'}> View Stats </a>
                            </div>
                            <div className={s.phoneWrapper}>
                                <img src={mobile} alt={''}/>
                            </div>
                        </div>
                    </div>
                    <div className={s.contentHeaderWrapper}>
                        <p style={{
                            fontSize: '32px',
                            lineHeight: '39px'
                        }}> Why <b> small business owners love </b> AppCo? </p>
                        <p style={{
                            fontSize: '20px',
                            lineHeight: '142%',
                            color: '#7E7E7E',
                        }}> Our design projects are fresh and simple and will benefit your business greatly.
                            Learn more about our work!</p>
                    </div>
                    <div className={s.aboutIcons}>
                        <div className={s.box} style={{gridArea: 'cd'}}>
                            <img style={{paddingTop: '38px'}} src={cd} alt={''}/>
                            <br/><br/>
                            <b> Clean design </b>
                            <p style={{
                                fontSize: '16px',
                                lineHeight: '142%',
                                color: '#7E7E7E',
                            }}> Increase sales by showing true dynamics of your website.</p>
                        </div>
                        <div className={s.box} style={{gridArea: 'sd'}}>
                            <img style={{paddingTop: '38px'}} src={sd} alt={''}/>
                            <br/><br/>
                            <b> Secure Data </b>
                            <p style={{
                                fontSize: '16px',
                                lineHeight: '142%',
                                color: '#7E7E7E',
                            }}> Build your online store’s trust using Social Proof & Urgency. </p>
                        </div>
                        <div className={s.box} style={{gridArea: 'rr'}}>
                            <img style={{paddingTop: '38px'}} src={rr} alt={''}/>
                            <br/><br/>
                            <b> Retina Ready </b>
                            <p style={{
                                fontSize: '16px',
                                lineHeight: '142%',
                                color: '#7E7E7E',
                            }}> Realize importance of social proof in customer’s purchase decision. </p>
                        </div>
                    </div>
                    <div className={s.previewBox}>
                        <div className={s.viewDescpripWrapper}>
                            <b> Start Managing your apps business, more faster </b>
                            <br/>
                            <p>
                                Objectively deliver professional value with diverse web-readiness. Collaboratively
                                transition wireless customer service without goal-oriented catalysts for change.
                                Collaboratively
                            </p>
                            <br/>
                            {/* eslint-disable-next-line react/jsx-no-target-blank */}
                            <a href={'https://bit.ly/2wTKRuo'} target={'_blank'}> Learn More </a>
                        </div>
                        <div className={s.notebookWrapper}>
                            <img style={{paddingTop: '5px'}} src={notebook} alt={''}/>
                        </div>
                    </div>
                    <div className={s.contentHeaderWrapper}>
                        <p style={{
                            paddingTop: '50px',
                            fontSize: '32px',
                            lineHeight: '39px'
                        }}><b> Afforadble Pricing and Packages </b> choose your best one </p>
                        <p style={{
                            fontSize: '20px',
                            lineHeight: '142%',
                            color: '#7E7E7E',
                        }}> Monotonectally grow strategic process improvements vis-a-vis integrated resources.</p>
                    </div>
                    <div style={{background: `url(${backPlans})`}}
                         className={s.plansListWrapper}>
                        <div style={{
                            gridArea: 'B',
                            border: '2px solid #F1F1F1',
                            borderRadius: '32px'
                        }} className={s.plansBox}>
                            <b> Basic </b>
                            <br/>
                            <img src={basicPlan} alt={'bp'}/>
                            <h2>
                                $29
                            </h2>
                            <p>
                                Push Notifications Data Transfer SQL Database Search & SEO Analytics 24/7 Phone Support
                                2 months technical support 2+ profitable keyword
                            </p>
                            <a href={'https://bit.ly/39NNZGA'}>
                                Purchase now
                            </a>
                        </div>
                        <div style={{
                            gridArea: 'S',
                            boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.16)',
                            borderRadius: '32px',
                        }} className={s.plansBox}>
                            <b> Standart </b>
                            <br/>
                            <img src={standartPlan} alt={'sp'}/>
                            <h1>
                                $149
                            </h1>
                            <p>
                                Push Notifications Data Transfer SQL Database Search & SEO Analytics 24/7 Phone Support
                                2 months technical support 2+ profitable keyword
                            </p>
                            <a href={'https://bit.ly/39NNZGA'}>
                                Purchase now
                            </a>
                        </div>
                        <div style={{
                            gridArea: 'U', border: '2px solid #F1F1F1',
                            borderRadius: '32px'
                        }} className={s.plansBox}>
                            <b> Unlimited </b>
                            <br/>
                            <img src={unlimitedPlan} alt={'up'}/>
                            <h2>
                                $39
                            </h2>
                            <p>
                                Push Notifications Data Transfer SQL Database Search & SEO Analytics 24/7 Phone Support
                                2 months technical support 2+ profitable keyword
                            </p>
                            <a href={'https://bit.ly/39NNZGA'}>
                                Purchase now
                            </a>
                        </div>
                        <div style={{gridArea: 'dp'}}>
                            <p style={{
                                fontSize: '20px',
                                lineHeight: '142%',
                            }}>
                                If you need custom services or Need more?
                                <a href={'https://bit.ly/2U3gGc6'} style={{
                                    textDecoration: 'none',
                                    color: '#3A80BA',
                                    fontWeight: 'bold',
                                    fontSize: '20px',
                                    lineHeight: '142%'
                                }}> Contact
                                    us </a>
                            </p>
                        </div>
                    </div>
                    <div style={{background: `url(${footerSvg})`}}
                         className={s.footerWrapper}>
                        <div className={s.feedbackWrapper}>
                            <div className={s.feedBack}>
                                <input maxLength={48} className={s.emailField} placeholder={'Enter your email'}/>
                                <input type={'submit'} className={s.submitButton} value={'Subscribe'}
                                       onClick={() => window.open('https://www.youtube.com/user/MrLololoshka')}/>
                            </div>
                        </div>
                        <div className={s.footer}>
                            <table style={{width: '100%', height: 'inherit'}}>
                                <tr>
                                    <td style={{width: '25%', fontSize: '32px'}}><p className={s.footerText}> AppCo </p>
                                    </td>
                                    <td style={{width: '50%', fontSize: '23px'}}><p className={s.footerText}> All rights
                                        reserved by ThemeTags</p>
                                    </td>
                                    <td style={{width: '25%', fontSize: '23px'}}><p className={s.footerText}> Copyrights
                                        © 2019 </p></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </fragment>
    )
};
