import {
    faArrowRightToBracket,
    faCircleQuestion,
    faCloudArrowUp,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faPlus,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faMessage, faPaperPlane, faUser } from '@fortawesome/free-regular-svg-icons'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import TippyTitle from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import classNames from 'classnames/bind'
import images from '~/assets/images'
import Menu from '~/components/Popper/Menu'
import Button from '~/components/Button'
import styles from './Header.module.scss'
import Image from '~/components/Image'
import Search from '~/layouts/components/Search'
import config from '~/config'

const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vn',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
]

const MENU_WITH_USER = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/@dtt',
    },
    {
        icon: <FontAwesomeIcon icon={faBookmark} />,
        title: 'Favorites',
        to: '/favorite',
    },
    {
        icon: <FontAwesomeIcon icon={faTiktok} />,
        title: 'Get Coins',
        to: '/get-coins',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faArrowRightToBracket} />,
        title: 'Logout',
        to: '/logout',
        separate: true,
    },
]

const currentUser = false

function Header() {
    const handleMenuChange = (items) => {
        switch (items.type) {
            case 'language':
                console.log(items)
                break
            default:
                throw new Error('Menu change error')
        }
    }

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={images.logo} alt="logo" />
                </Link>

                <div>
                    <Search />
                </div>
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <TippyTitle content="Upload video">
                                <button className={cx('actions-icon')}>
                                    <FontAwesomeIcon icon={faCloudArrowUp} />
                                </button>
                            </TippyTitle>
                            <TippyTitle content="Message">
                                <button className={cx('actions-icon')}>
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </button>
                            </TippyTitle>
                            <TippyTitle content="Inbox">
                                <div className={cx('box-msg')}>
                                    <button className={cx('actions-icon')}>
                                        <FontAwesomeIcon icon={faMessage} />
                                    </button>
                                    <div className={cx('box-noti')}>
                                        <span className={cx('count-noti')}>99+</span>
                                    </div>
                                </div>
                            </TippyTitle>

                            <Menu items={MENU_WITH_USER} onChange={handleMenuChange}>
                                <button className={cx('menu')}>
                                    <Image
                                        className={cx('avatar')}
                                        src=""
                                        alt="avatar-menu"
                                        fallback="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-1/330918075_938928857272899_8861722819551400458_n.jpg?stp=cp0_dst-jpg_p86x86&_nc_cat=101&cb=99be929b-3346023f&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=rzroAGzS-28AX_jHKUz&_nc_ht=scontent.fhan14-1.fna&oh=00_AfDmokcdhIZJFBWYthXAXlo5cvG0I4DsRKi_OfrF-PTEaw&oe=64A0C612"
                                    />
                                </button>
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Button outline leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Upload
                            </Button>
                            <Button primary>Log in</Button>

                            <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                                <button className={cx('menu')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </Menu>
                        </>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header
