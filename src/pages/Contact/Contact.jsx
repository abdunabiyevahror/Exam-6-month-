import React from 'react'
import classes from './Contact.module.css'
import { BiHomeAlt } from 'react-icons/bi'
import { BsTelephone } from 'react-icons/bs'
import { AiOutlineQuestion } from 'react-icons/ai'
import Iframe from 'react-iframe'
const Contact = () => {
    return (
        <div className={classes.Contact}>
            <div className="container">
                <div className="title_h2_36">
                    <h2 className='h2_2_big'>Контакты</h2>
                </div>
                <div className={classes.row}>
                    <div className="row_">
                        <div className={classes.cont_num_icon}>
                            <BiHomeAlt />
                        </div>
                        <div className={classes.cont_num_text}>
                            <h3> Бухгалтерия, склад</h3>
                            <a href='#!'>+7 82140 92619</a>
                        </div>
                    </div>
                    <div className="row_">
                        <div className={classes.cont_num_icon}>
                            <AiOutlineQuestion />
                        </div>
                        <div className={classes.cont_num_text}>
                            <h3>Вопросы по системе лояльности</h3>
                            <a href='#!'>+7 908 716 33 97</a>
                        </div>
                    </div>
                </div>
                <div className="title_h2_36">
                    <div className="h2_36_title">
                        <h2 className="h2_36">Наши магазины</h2>
                    </div>
                    <hr />
                </div>
                <div className={classes.row}>
                    <div className={classes.cont_location}>
                        <img src="../../img/market.png" alt="" />
                        <h3>ул. Дорожная 10</h3>
                        <a href="#!"><BsTelephone /> +7 904 271 35 90</a>
                    </div>
                    <div className={classes.cont_location}>
                        <img src="../../img/market (1).png" alt="" />
                        <h3>ул. Советская 87</h3>
                        <a href="#!"><BsTelephone /> +7 904 271 35 90</a>
                    </div>
                    <div className={classes.cont_location}>
                        <img src="../../img/market (2).png" alt="" />
                        <h3>ул. Заводская 16</h3>
                        <a href="#!"><BsTelephone /> +7 904 271 35 90</a>
                    </div>
                    <div className={classes.cont_location}>
                        <img src="../../img/market (3).png" alt="" />
                        <h3>ул. Рабочая 1</h3>
                        <a href="#!"><BsTelephone /> +7 904 271 35 90</a>
                    </div>
                </div>

                <div className={classes.iframe}>
                     <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.942021986773!2d71.78528987594416!3d40.38797757144412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb83a471c6b55b%3A0x9927f2609db0d333!2sNajot%20Ta&#39;lim%20Farg&#39;ona!5e0!3m2!1sen!2s!4v1698413244353!5m2!1sen!2s" width="1250" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe> 
                </div>
            </div>
        </div>
    )
}

export default Contact