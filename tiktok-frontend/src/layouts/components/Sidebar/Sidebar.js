import {
    CameraIcon,
    CameraIconActive,
    ExploreIcon,
    ExploreIconActive,
    HomeIcon,
    HomeIconActive,
    UserGroupIcon,
    UserGroupIconActive,
} from '~/components/Icons'
import Menu, { MenuItem } from './Menu'

import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind'
import config from '~/config'
import SuggestedAccounts from '~/components/SuggestedAccounts/SuggestedAccounts'
import Button from '~/components/Button/Button'
const cx = classNames.bind(styles)

const ACCOUNT_ITEM = [
    {
        id: 1,
        nickname: 'hoa_23091',
        fullname: 'Ngô ngọc hòa',
        tick: true,
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/27163b2e9d3e9f26c6a3cbc66d3333e7~c5_100x100.jpeg?x-expires=1688119200&x-signature=7%2B2O62x4Nw7t1YMHQdtmE7OfMBo%3D',
    },
    {
        id: 2,
        nickname: 'stellaminhtunguyen',
        fullname: 'Minh Tú Nguyễn',
        tick: false,
        avatar: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-aiso/80a69c00bf510e6ef0993701cf57a061~c5_100x100.jpeg?x-expires=1687946400&x-signature=zcJkr9rDPXJWFAUYdwK6ySI%2FtjM%3D',
    },
    {
        id: 3,
        nickname: 'huyenhanquoc892',
        fullname: 'Huyuền Hàn Quốc',
        tick: true,
        avatar: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/c6e460444d079c832eab489e7f9c7fb0~c5_100x100.jpeg?x-expires=1687946400&x-signature=GcdQEpEYDzNXYL83PgD7T9FJf%2BU%3D',
    },
]

const FOOTER_ITEM = [
    {
        data: [
            {
                title: 'About',
                href: 'About',
            },
            {
                title: 'Newsroom',
                href: 'AbNewsroomout',
            },
            {
                title: 'Contact',
                href: 'Contact',
            },
            {
                title: 'Careers',
                href: 'Careers',
            },
            {
                title: 'ByteDance',
                href: 'ByteDance',
            },
        ],
    },

    {
        data: [
            {
                title: 'TikTok for Good',
                href: 'TikTok for Good',
            },
            {
                title: 'Advertise',
                href: 'Advertise',
            },
            {
                title: 'Developers',
                href: 'Developers',
            },
            {
                title: 'Transparency',
                href: 'Transparency',
            },
            {
                title: 'TikTok Rewards',
                href: 'ByteDance',
            },
            {
                title: 'TikTok Embeds',
                href: 'TikTok Embeds',
            },
        ],
    },

    {
        data: [
            {
                title: 'Help',
                href: 'Help',
            },
            {
                title: 'Safety',
                href: 'Safety',
            },
            {
                title: 'Terms',
                href: 'Terms',
            },
            {
                title: 'Privacy',
                href: 'Privacy',
            },
            {
                title: 'Creator Portal',
                href: 'Creator Portal',
            },
            {
                title: 'Community Guidelines',
                href: 'Community Guidelines',
            },
        ],
    },
]

function Sidebar() {
    return (
        <div className={cx('wrapper-0')}>
            <aside className={cx('wrapper')}>
                <Menu>
                    <MenuItem
                        title="For You"
                        to={config.routes.home}
                        icon={<HomeIcon />}
                        iconActive={<HomeIconActive />}
                    />
                    <MenuItem
                        title="Following"
                        to={config.routes.following}
                        icon={<UserGroupIcon />}
                        iconActive={<UserGroupIconActive />}
                    />
                    <MenuItem
                        title="Explore"
                        to={config.routes.live}
                        icon={<ExploreIcon />}
                        iconActive={<ExploreIconActive />}
                    />
                    <MenuItem
                        title="LIVE"
                        to={config.routes.explore}
                        icon={<CameraIcon />}
                        iconActive={<CameraIconActive />}
                    />
                </Menu>
                <SuggestedAccounts label={'Following accounts'} data={ACCOUNT_ITEM} numberSeeLess={10} />
                <div className={cx('tiktok-footer')}>
                    {FOOTER_ITEM.map((item, index) => (
                        <div className={cx('tiktok-wrap')} key={index}>
                            {item.data.map((i, key) => (
                                <Button className={cx('btn-footer')} key={key} href={i.href}>
                                    {i.title}
                                </Button>
                            ))}
                        </div>
                    ))}
                    <div className={cx('copyright')}>© 2023 Tiktok</div>
                </div>
            </aside>
        </div>
    )
}

export default Sidebar
