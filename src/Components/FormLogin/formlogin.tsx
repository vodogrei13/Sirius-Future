import {IconLogoSirius} from "../../img/svg/Icon_Logo";
import css from './formlogin.module.scss'


export const Formlogin = () => {
    return (
        <>
        <div className = {css.formlogin}>
            <div className = {css.form__logo}><IconLogoSirius/></div>
            <div className = {css.form__title}>Вход в Sirius Future</div>
            <div>
                <form method="post" className = {css.form_input}>
                        <input placeholder='E-mail' className = {css.input__email}></input>
                        <input type='password' placeholder='Пароль' className = {css.input__password}></input>           
                </form>
            </div>
            <div className = {css.input_remember}>
                <input type='checkbox' name='Remember' id='Remember'></input>
                <label htmlFor='Remember'>Запомнить меня</label>
            </div> 
            <div className = {css.form__btn}>
                <button className = {css.btn}>Войти</button>
            </div>
            <div className = {css.form__btn_info}>
                <a href='/' className = {css.form__forgot}>Я забыл пароль</a>
                <a href='welcome' className = {css.form__trainer}>Войти как тренер</a>
            </div>
            <div className = {css.form__registration}>
                <p className = {css.form__account}>Нет аккаунта?</p>
                <a href='/' className = {css.form__registration}>Зарегестрироваться</a>
            </div>
            <div className={css.language}>
                <p className={css.lang_ru}>RU</p>
                <p className={css.lang_eng}>EN</p>
            </div>
        </div>
        
        </>
    )
}