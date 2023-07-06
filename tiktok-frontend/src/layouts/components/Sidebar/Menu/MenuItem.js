import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import styles from './Menu.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

function MenuItem({ title, to, icon, iconActive }) {
    return (
        <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
            <span className={cx('icon')}> {icon}</span>
            <span className={cx('icon-active')}> {iconActive}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    )
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    iconActive: PropTypes.node.isRequired,
}
export default MenuItem
