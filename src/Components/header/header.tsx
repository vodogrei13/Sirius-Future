import { useState } from 'react';
import { IconChat } from '../../img/svg/chat icon'
import { IconChevron } from '../../img/svg/icon-chevron';
import css from './header.module.scss'
import { IconExit } from '../../img/svg/exit';
import { IconDelete } from '../../img/svg/icon-delete';

export const Header = () => {
    const avatar = require('../../img/png/avatar.png');
    const avatar2 = require('../../img/png/avatar2.png');
    const [isOpen, setIsMenuShown] = useState(false);
    return (
    <>
    <section className={css.header__container}>
        <div className={css.header__welcome}>
            <h3 className={css.welcome__title}>Добро пожаловать, <span>Михаил</span>!</h3>
        </div>
        <div className={css.icont__item}>
            <div className={css.chat}><IconChat/></div>
            <div className={css.profile}
             onClick={() => setIsMenuShown(!isOpen)}>
            <div className={css.profile__logo}><img width={42} height={42} src={avatar} alt='avatar'/></div>
            <div className={`${css.chevron} ${isOpen ? css.up : ''}`}>
                <IconChevron/>
            </div>
            {isOpen && <div className={css.menu}>
                <div className={css.icon_delete}><IconDelete/></div>
                <div className={css.menu_title}>Смена пользователя</div>
                <div className={css.menu_item_1}>
                    <img className={css.menu_item_1_img} width={32} height={32} src={avatar} alt='avatar'/>
                    <div className={css.menu_item_1_text}>
                        <a href='Home'>
                            <h1>Михаил</h1>
                            <p>Это вы</p>
                        </a>
                    </div>
                </div>
                <div className={css.menu_item_2}>
                    <img className={css.menu_item_1_img} width={32} height={32} src={avatar2} alt='avatar2'/>
                    <div className={css.menu_item_1_text}>
                    <h1>Анна</h1>
                    </div>
                </div>
                <div className={css.Exit}>
                    <a href='exit' className={css.menu_exit}>Выход</a>
                    <a href='exit'><IconExit/></a>
                </div>
            </div>
            }
            </div>
        </div>
    </section>
    </>
    )
}