import PropTypes from 'prop-types'

import styles from './DefaultLayout.module.scss'
import Header from '~/layouts/components/Header'
import Sidebar from '~/layouts/components/Sidebar'

import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('wrapper-nav-content')}>
                <div className={cx('container')}>
                    <Sidebar />
                    <div className={cx('content')}>{children}</div>
                </div>
            </div>
        </div>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default DefaultLayout
