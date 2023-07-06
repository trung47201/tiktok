import Button from '~/components/Button'
import PropTypes from 'prop-types'

import styles from './Menu.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

function MenuItem({ data, onClick }) {
    const classes = cx('wrapper-item', {
        seperate: data.separate,
    })
    return (
        <div className={classes}>
            <Button leftIcon={data.icon} to={data.to} onClick={onClick}>
                {data.title}
            </Button>
        </div>
    )
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
}

export default MenuItem
