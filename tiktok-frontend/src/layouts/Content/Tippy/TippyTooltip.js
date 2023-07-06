import Tippy from '@tippyjs/react/headless'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import styles from './TippyTooltip.module.scss'
import classNames from 'classnames/bind'
import Button from '~/components/Button/Button'
const cx = classNames.bind(styles)

function TippyTooltip({ children, user, following }) {
    return (
        <div>
            <Tippy
                placement="bottom-start"
                delay={[500, 500]}
                interactive
                offset={[-8, 4]}
                render={(attrs) => (
                    <PopperWrapper>
                        <div className={cx('box-detail')} tabIndex="-1" {...attrs}>
                            <div className={cx('container')}>
                                <Button className={cx('avatar')} to={`@${user.nickname}`}>
                                    <img className={cx('avatar')} src={user.avatar} alt="avatar" />
                                </Button>
                                <Button outlinePrimary follow>
                                    {following ? 'Follow' : 'Following'}
                                </Button>
                            </div>
                            <Button className={cx('nickname')} to={`@${user.nickname}`}>
                                {user.nickname}
                            </Button>
                            <br></br>
                            <Button className={cx('fullname')} to={`@${user.nickname}`}>
                                {user.full_name}
                            </Button>
                            <p className={cx('user-stat')}>
                                <span className={cx('user-stat-follow-count')}>{user.follower_count}</span>
                                <span className={cx('user-stat-follow')}>Followers</span>
                                <span className={cx('user-stat-like-count')}>{user.likes_count}</span>
                                <span className={cx('user-stat-like')}>Likes</span>
                            </p>
                            <p className={cx('user-bio')}>{user.bio}</p>
                        </div>
                    </PopperWrapper>
                )}
            >
                {children}
            </Tippy>
        </div>
    )
}

export default TippyTooltip
