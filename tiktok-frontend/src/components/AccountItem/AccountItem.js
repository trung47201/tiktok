import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import styles from './AccountItem.module.scss'
import classNames from 'classnames/bind'
import images from '~/assets/images'
import Image from '../Image'

const cx = classNames.bind(styles)

function AccountItem({ data }) {
    return (
        <Link to={`@${data.nickname}`} className={cx('li-fake')}>
            <span className={cx('search-account-img')}>
                <Image className={cx('avatar')} src={data.avatar} alt="avt" />
            </span>
            <div className={cx('line-li')}>
                <div className={cx('line-li-top')}>
                    <div className={cx('line-li-top-name')}>
                        <h4>{data.nickname}</h4>
                    </div>
                    {data.tick ? <img src={images.accReal} alt="real" /> : ''}
                </div>
                <p>{data.full_name}</p>
            </div>
        </Link>
    )
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
}

export default AccountItem
