import Button from '~/components/Button/Button'
import styles from './Content.module.scss'
import classNames from 'classnames/bind'
import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import TippyTooltip from './Tippy/TippyTooltip'
import { CommentIcon, HeartIcon, SaveIcon, ShareIcon } from '~/components/Icons'
const cx = classNames.bind(styles)

const TAG_ITEM = [
    {
        tagname: 'haihuoc',
        to: '/haihuoc',
    },
    {
        tagname: 'thptqg2023',
        to: '/thptqg2023',
    },
    {
        tagname: 'vonhat',
        to: '/vonhat',
    },
]

function Content({ user, title, videoURL, id, video }) {
    const [styleHover, setStyleHover] = useState({})
    const [following, setFollowing] = useState(false)

    const handleMouseEnter = () => {
        setStyleHover({
            textDecoration: 'underline',
        })
    }
    const handleMouseMouse = () => {
        setStyleHover({
            textDecoration: 'unset',
        })
    }

    const handleFollow = () => {
        setFollowing(!following)
    }

    const videoRef = useRef()

    useEffect(() => {
        const handleScroll = () => {
            if (!!videoRef) {
                var rect = videoRef.current.getBoundingClientRect()
                if (rect.top < 380 && rect.top > -290) {
                    videoRef.current.play()
                } else {
                    videoRef.current.currentTime = 0
                    videoRef.current.pause()
                }
            }
        }
        const handleVisibility = () => {
            if (document.hidden) {
                videoRef.current.pause()
            } else {
                var rect = videoRef.current.getBoundingClientRect()
                if (rect.top < 380 && rect.top > -290) {
                    //videoRef.current.currentTime = 0
                    videoRef.current.play()
                } else {
                    videoRef.current.currentTime = 0
                    videoRef.current.pause()
                }
            }
        }
        window.addEventListener('scroll', handleScroll)
        document.addEventListener('visibilitychange', handleVisibility)

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('visibilitychange', handleVisibility)
        }
    }, [])

    return (
        <div className={cx('wrapper')}>
            <TippyTooltip user={user}>
                <div>
                    <Button className={cx('avatar')} to={`@${user.nickname}`}>
                        <img
                            className={cx('avatar')}
                            src={user.avatar}
                            alt="avatar"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseMouse}
                        />
                    </Button>
                </div>
            </TippyTooltip>
            <div className={cx('content')}>
                <div className={cx('content-top')}>
                    <div className={cx('wapper-content')}>
                        <div className={cx('infor')}>
                            <Button className={cx('profile')} to={`@${user.nickname}`}>
                                <h3 className={cx('nickname')} style={styleHover}>
                                    {user.nickname}
                                </h3>
                                <h4 className={cx('fullname')}>{user.full_name}</h4>
                            </Button>
                        </div>
                        <div className={cx('container')}>
                            <span className={cx('title')}>{title}&nbsp;</span>
                            {TAG_ITEM.length > 0 &&
                                TAG_ITEM.map((tag, index) => (
                                    <Button key={index} className={cx('tag')} to={`/tag${tag.to}`}>
                                        <strong className={cx('strong-txt')}>{`#${tag.tagname}`}</strong>
                                    </Button>
                                ))}
                        </div>
                        <h4 className={cx('music')}>
                            <FontAwesomeIcon className={cx('music-icon')} icon={faMusic} />
                            nhạc nền - photoshop có tâm
                        </h4>
                    </div>
                    {following ? (
                        <Button small outline followSmall following onClick={handleFollow}>
                            Following
                        </Button>
                    ) : (
                        <Button small outlinePrimary followSmall onClick={handleFollow}>
                            Follow
                        </Button>
                    )}
                </div>
                <div className={cx('content-bottom')}>
                    <div className={cx('container-right')}>
                        <div className={cx('container-video')}>
                            <video ref={videoRef} controls autoPlay="1" playsInline muted preload="metadata" loop>
                                <source src={videoURL}></source>
                            </video>
                        </div>
                    </div>
                    <div className={cx('container-left')}>
                        <div>
                            <Button className={cx('like-btn')}>
                                <div className={cx('like')}>
                                    <span className={cx('like-span')}>
                                        <HeartIcon className={cx('heart-icon')} />
                                    </span>
                                    <strong className={cx('strong-text')}>{video.like_count}</strong>
                                </div>
                            </Button>
                        </div>
                        <div>
                            <Button className={cx('comment-btn')}>
                                <div className={cx('comment')}>
                                    <span className={cx('comment-span')}>
                                        <CommentIcon className={cx('comment-icon')} />
                                    </span>
                                    <strong className={cx('strong-text')}>1038</strong>
                                </div>
                            </Button>
                        </div>
                        <div>
                            <Button className={cx('save-btn')}>
                                <div className={cx('save')}>
                                    <span className={cx('save-span')}>
                                        <SaveIcon className={cx('save-icon')} />
                                    </span>
                                    <strong className={cx('strong-text')}>7294</strong>
                                </div>
                            </Button>
                        </div>
                        <div>
                            <Button className={cx('share-btn')}>
                                <div className={cx('share')}>
                                    <span className={cx('share-span')}>
                                        <ShareIcon className={cx('save-icon')} />
                                    </span>
                                    <strong className={cx('strong-text')}>3827</strong>
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content
