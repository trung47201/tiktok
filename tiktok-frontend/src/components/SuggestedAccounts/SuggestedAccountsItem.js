import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import styles from './SuggestedAccounts.module.scss'
import classNames from 'classnames/bind'
import images from '~/assets/images'
const cx = classNames.bind(styles)

function SuggestedAccountsItem({ avatar, nickname, fullname, tick }) {
    return (
        <li>
            <Link className={cx('account-item')} to={`@${nickname}`}>
                <div className={cx('account-img')}>
                    <img src={avatar} alt={`${nickname}-img`} />
                </div>
                <div className={cx('account-content')}>
                    <div className={cx('account-title')}>
                        <span className={cx('account-nickname')}>{nickname}</span>
                        {tick && <img className={cx('tick-img')} src={images.accReal} alt="tick" />}
                    </div>
                    <p className={cx('account-fullname')}>{fullname}</p>
                </div>
            </Link>
        </li>
    )
}

SuggestedAccountsItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    fullname: PropTypes.string.isRequired,
    tick: PropTypes.bool,
}

export default SuggestedAccountsItem
