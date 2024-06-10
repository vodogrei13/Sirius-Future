import { IconArrowLeft } from '../../../img/svg/Arrow-left'
import { IconArrowRight } from '../../../img/svg/Arrow-right'
import { IconQuestion } from '../../../img/svg/Vector-question'
import { 
    TaskGrin, 
    TaskPink, 
    TaskgrayLine, 
    TaskPinkLine, 
    TaskRedWallet, 
    TaskLilac, 
    TaskGray, 
    TaskGrinWallet, 
    TaskGrinSolid, 
    } from './Task/task'
import css from './calendar.module.scss'


export const Calendar = () => {

    return (
       <>
       <section className={css.container}>
        <header className={css.Calendar_header}>
            <input className={css.header_input} type='text' list='options' placeholder='Выбрать предмет'/>
                <datalist id='options'>
                    <option value='Вариант 1'/>
                    <option value='Вариант 1'/>
                    <option value='Вариант 1'/>
                </datalist>
        <button className={css.header_btn}>Изменить расписание</button>
        </header>
        <section className={css.Calendar_data}>
            <div className={css.Calendar_hero_data}>
                <IconArrowLeft/>
                <h3>Март 2024</h3>
                <IconArrowRight/>
                <div className={css.Calendar_hero_data_btn}>
                    <button className={css.Calendar_hero_data_btn_item}>Сегодня</button>
                </div>
                <IconQuestion/>
            </div>
        </section>
        <div className={css.Calendar_days}>
                <li>Пн</li>
                <li>Вт</li>
                <li>Ср</li>
                <li>Чт</li>
                <li>Пт</li>
                <li>Сб</li>
                <li>Вс</li>
            </div>
        <div className={css.Calendar_hero}>
            <div className={css.Calendar_hero_date}>
                <p className={css.data_gray}>26</p>
            </div>
            <div className={css.Calendar_hero_date}>
                <p className={css.data_gray}>27</p>
                <TaskGrin/>
                <TaskPink/>
            </div>
            <div className={css.Calendar_hero_date}>
                <p className={css.data_gray}>28</p>
                <TaskgrayLine/>
                <TaskPinkLine/>
            </div>
            <div className={css.Calendar_hero_date}>
                <p className={css.data_gray}>30</p>
                <TaskRedWallet/>
                <TaskRedWallet/>
            </div>
            <div className={css.Calendar_hero_date}>
                <p className={css.data_black}>1 марта</p>
                <TaskLilac/>
                <TaskGray/>
            </div>
            <div className={css.Calendar_hero_date}>
                <p className={css.data_black}>2</p>
                <TaskGrinWallet/>
                <TaskGrinWallet/>
            </div>
            <div className={css.Calendar_hero_date}>
                <p className={css.data_black}>3</p>
                <TaskGrinSolid/>
                <TaskGrinSolid/>
            </div>
            <div className={css.Calendar_hero_date}>
                <p className={css.data_black}>4</p>
                <TaskGrinWallet/>
            </div>
            <div className={css.Calendar_hero_date}>
                <p className={css.data_black}>5</p>
            </div>
            <div className={css.Calendar_hero_date}>
                <p className={css.data_black}>6</p>
                <TaskGrinWallet/>
            </div>
            <div className={css.Calendar_hero_date}>
                <p className={css.data_black}>7</p>
            </div>
            <div className={css.Calendar_hero_date}>
                <p className={css.data_black}>2 марта</p>
                <TaskGrinWallet/>
            </div>
            <div className={css.Calendar_hero_date}>
                <p className={css.data_black}>9</p>
            </div>
            <div className={css.Calendar_hero_date}>
                <p className={css.data_black}>10</p>
            </div>
            <div className={css.Calendar_hero_date}>
                <p className={css.data_black}>11</p>
            </div>
            <div className={css.Calendar_hero_date}>
                <p className={css.data_black}>12</p>
            </div>
            <div className={css.Calendar_hero_date}>
                <p className={css.data_black}>13</p>
            </div>
            <div className={css.Calendar_hero_date}>
                <p className={css.data_black}>14</p>
                <TaskGrinWallet/>
            </div>
            <div className={css.Calendar_hero_date}>
                <p className={css.data_red}>15</p>
            </div>
            <div className={css.Calendar_hero_date}>
                <p className={css.data_black}>16</p>
                <TaskGrinWallet/>
            </div>
            <div className={css.Calendar_hero_date}>
                <p className={css.data_black}>17</p>
            </div>
            <div className={css.Calendar_hero_date}>
                <p className={css.data_black}>18</p>
                <TaskGrinWallet/>
                <TaskGrinWallet/>
            </div>
            <div className={css.Calendar_hero_date}>
                <p className={css.data_black}>19</p>
            </div>
            <div className={css.Calendar_hero_date}>
                <p className={css.data_black}>20</p>
            </div>
            <div className={css.Calendar_hero_date}>
                <p className={css.data_black}>21</p>
            </div>
            <div className={css.Calendar_hero_date}>
                <p className={css.data_black}>22</p>
            </div>
            <div className={css.Calendar_hero_date}>
                <p className={css.data_black}>23</p>
                <TaskGrinWallet/>
            </div>
            <div className={css.Calendar_hero_date}>
                <p className={css.data_black}>24</p>
            </div>
            <div className={css.Calendar_hero_date}>
                <p className={css.data_black}>25</p>
            </div>
            <div className={css.Calendar_hero_date}>
                <p className={css.data_black}>26</p>
            </div>
            <div className={css.Calendar_hero_date}>
                <p className={css.data_black}>27</p>
            </div>
            <div className={css.Calendar_hero_date}>
                <p className={css.data_black}>28</p>
            </div>
            <div className={css.Calendar_hero_date}>
                <p className={css.data_black}>29</p>
            </div>
            <div className={css.Calendar_hero_date}>
                <p className={css.data_black}>30</p>
            </div>
            <div className={css.Calendar_hero_date}>
                <p className={css.data_black}>31</p>
                <TaskGrinWallet/>
                <TaskGrinWallet/>
            </div>
        </div>
       </section>
       </> 
    )
}