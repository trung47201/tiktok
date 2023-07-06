import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import styles from './Button.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function Button({
    to,
    href,
    primary,
    outline,
    outlinePrimary,
    small,
    large,
    disable,
    borderRadius,
    leftIcon,
    rightIcon,
    children,
    onClick,
    seperate,
    follow,
    followSmall,
    following,
    ...passProps
}) {
    let Comp = 'button'
    const props = {
        onClick,
        ...passProps,
    }

    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }

    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key]
            }
        })
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        outlinePrimary,
        small,
        large,
        disable,
        borderRadius,
        leftIcon,
        rightIcon,
        seperate,
        follow,
        followSmall,
        following,
    })

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    )
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    outlinePrimary: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    disable: PropTypes.bool,
    borderRadius: PropTypes.string,
    leftIcon: PropTypes.object,
    rightIcon: PropTypes.node,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    seperate: PropTypes.bool,
    follow: PropTypes.bool,
    followSmall: PropTypes.bool,
    following: PropTypes.bool,
}

export default Button
