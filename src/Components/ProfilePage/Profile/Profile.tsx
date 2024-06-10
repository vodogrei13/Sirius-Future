import { IconUser } from '../../../img/svg/iconUser'
import css from './Profile.module.scss'

export const Profile = () => {
    return (
    <>
        <section className={css.advertising}>
            <div className={css.firt_card}>
                <h3>До 31 декабря любой курс со скидкой 20%</h3>
                <p>До конца года у вас есть уникальная возможность воспользоваться нашей новогодней скидкой 20% на любой курс!</p>
            </div>
            <div className={css.second_card}>
                <h3>Следующее занятие начнется через:</h3>
                <p>6 <span>д</span> 12 <span>ч</span> 24 <span>мин</span></p>
                <div className={css.second_card_btn}>
                    <button className={css.second_card_btn_item}>Button</button>
                </div>
            </div>
            <div className={css.works_blog}>
                <div className={css.works_blog_1}>
                    <h3>Домашние задания</h3>
                </div>
                <div className={css.works_blog_2}>
                    <h3>Отчеты от учителей</h3>
                </div>
            </div>
        </section>
        <section className={css.profile_info}>
            <div className={css.profile_balance}>
                <h3>Баланс занятий</h3>
                <ul className={css.profile_balance_list}>
                    <li>
                        <p>Ментальная Арифметика</p>
                        <span>32</span>
                    </li>
                    <li>
                        <p>Програмирование</p>
                        <span>0</span>
                    </li>
                    <li>
                        <p>Скорочтение</p>
                        <span>4</span>
                    </li>
                </ul>
                <div className={css.profile_balance_btn}>
                    <button className={css.profile_balance_btn_item}>Button</button>
                </div>
            </div>

            <div className={css.profile_lesson}> 
                <h3>Ближайшие уроки</h3>
                <ul className={css.profile_lesson_list}>
                    <li className={css.profile_lesson_list_item}>
                        <div className={css.profile_lesson_data}>
                            <h3>1</h3>
                            <p>мая</p>
                        </div>
                        <p>Ментальная Арифметика</p>
                        <span>14:00-14:25</span>
                        <p className={css.profile_user_text}><IconUser/>Белкина Инна</p>
                        <div className={css.profile_lesson_btn}>
                            <button className={css.profile_lesson_btn_light}>Button</button>
                            <button className={css.profile_lesson_btn_dark}>Button</button>
                        </div>
                    </li>
                    <li className={css.profile_lesson_list_item}>
                        <div className={css.profile_lesson_data}>
                            <h3>30</h3>
                            <p>октября</p>
                        </div>
                        <p>Програмирование</p>
                        <span>11:00-11:11</span>
                        <p className={css.profile_user_text}><IconUser/>Животновская Оксана</p>
                        <div className={css.profile_lesson_btn}>
                            <button className={css.profile_lesson_btn_light}>Button</button>
                            <button className={css.profile_lesson_btn_dark}>Button</button>
                        </div>
                    </li>
                    <li className={css.profile_lesson_list_item}>
                        <div className={css.profile_lesson_data}>
                            <h3>16</h3>
                            <p>ноября</p>
                        </div>
                        <p>Скорочтение</p>
                        <span>09:00-09:45</span>
                        <p className={css.profile_user_text}><IconUser/>Мин Елена</p>
                        <div className={css.profile_lesson_btn}>
                            <button className={css.profile_lesson_btn_light}>Button</button>
                            <button className={css.profile_lesson_btn_dark}>Button</button>
                        </div>
                    </li>
                </ul>
                <div className={css.profile_balance_btn}>
                    <button className={css.profile_balance_btn_item}>Button</button>
                </div>
            </div>
        </section>
    </>
    )
}