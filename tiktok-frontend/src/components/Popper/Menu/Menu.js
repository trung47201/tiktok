import Header from './Header'
import { useState } from 'react'
import Tippy from '@tippyjs/react/headless'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import MenuItem from './MenuItem'
import styles from './Menu.module.scss'

const cx = classNames.bind(styles)

const defaultFn = () => {}

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }])

    const current = history[history.length - 1]

    const renderItem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children])
                        } else {
                            onChange(item)
                        }
                    }}
                />
            )
        })
    }

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1))
    }

    const renderResult = (attrs) => (
        <div className={cx('menu-box')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
                {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
                <div className={cx('wrapper-box')}>{renderItem()}</div>
            </PopperWrapper>
        </div>
    )

    //reset to first page
    const handleResetMenu = () => {
        setHistory((prev) => prev.slice(0, 1))
    }

    return (
        <Tippy
            interactive
            delay={[0, 700]}
            offset={[10, 0]}
            placement="bottom-end"
            hideOnClick={hideOnClick}
            render={renderResult}
            onHide={handleResetMenu}
        >
            {children}
        </Tippy>
    )
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.func,
    onChange: PropTypes.func,
}

export default Menu
