import css from './profilepage.module.scss'
import { LeftMenu } from '../LessonCalendar/Leftmenu/leftmenu'
import { Header } from '../header/header'
import { Profile } from './Profile/Profile'

export const ProfilePage = () => {
    return (
    <>
    <section className={css.container}>
        <div>
            <LeftMenu/>
        </div>
        <div className={css.hero_container}>
            <Header/>
            <Profile/>
        </div>
    </section>
    </>
    )
}