import { Header } from '../header/header'
import css from './calendar.module.scss'
import { Calendar } from './Calendar/calendar'
import { LeftMenu } from './Leftmenu/leftmenu'

export const PageCalendar = () => {
    return (
        <>
        <section className={css.container}>
            <div>
                <LeftMenu/>
            </div>
            <div className={css.hero_container}>
                <Header/>
                <Calendar/>
            </div>
        </section>
        </>
    )
}