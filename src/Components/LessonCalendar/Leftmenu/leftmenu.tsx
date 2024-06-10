import { IconLogoTitle } from '../../../img/svg/Logo with title'
import css from './leftmenu.module.scss'

export const LeftMenu = () => {
    return (
    <>
    <section className={css.container}>
        <div className={css.logo_with_Title}>
         <IconLogoTitle/>
        </div>
        <div className={css.navigation}>
            <ul className={css.nav__list}>
                <li className={css.nav__item}>
                    <form action='Home'>
                        <button className={css.btn_home}>Главная</button>
                    </form>
                </li>
                <li className={css.nav__item}>
                    <form action='welcome'>
                    <button className={css.btn_calendar}>Расписание</button>
                    </form>
                </li>
                <li className={css.nav__item}>
                    <form action='#'>
                    <button className={css.btn_wallet}>Оплата</button>
                    </form>
                </li>
                <li className={css.nav__item}>
                    <form action='#'>
                    <button className={css.btn_achiv}>Достижение</button>
                    </form>
                    </li>
                <li className={css.nav__item}>
                    <form action='#'>
                    <button className={css.btn_pazzle}>Тренажеры</button>
                    </form>
                </li>
                <li className={css.nav__item}>
                    <form action='#'>
                    <button className={css.btn_library}>Библиотека</button>
                    </form>
                </li>
                <li className={css.nav__item}>
                    <form action='#'>
                    <button className={css.btn_connect}>Проверка связи</button>
                    </form>
                </li>
                <li className={css.nav__item}>
                    <form action='#'>
                    <button className={css.btn_setting}>Настройка</button>
                    </form>
                </li>
                <li className={css.nav__item}>
                    <form action='#'>
                    <button className={css.btn_question}>Вопросы</button>
                    </form>
                </li>
            </ul>
        </div>
        <div className={css.advertising}>
            <h1 className={css.advertising__title}>Учитесь бесплатно</h1>
            <p className={css.advertising__text}>Приводите друзей с детьми заниматься в Sirius Future и получайте подарки!</p>
            <button className={css.advertising__btn}>Узнать</button>
        </div>
    </section>
    </>
    )
}