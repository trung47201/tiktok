import PropTypes from 'prop-types'
import styles from './SuggestedAccounts.module.scss'
import classNames from 'classnames/bind'
import SuggestedAccountsItem from './SuggestedAccountsItem'
import { useState } from 'react'
const cx = classNames.bind(styles)

function SuggestedAccounts({ label, data, numberSeeLess }) {
    const [count, setCount] = useState(numberSeeLess)

    const handleSeeMore = (i) => {
        setCount(count + i)
    }
    const handleSeeLess = () => {
        setCount(numberSeeLess)
    }

    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>{label}</h2>
            {data.length > 0 ? (
                <>
                    {data.slice(0, count).map((account) => (
                        <SuggestedAccountsItem
                            key={account.id}
                            nickname={account.nickname}
                            fullname={account.fullname}
                            avatar={account.avatar}
                            tick={account.tick}
                        />
                    ))}
                    {data.length > count ? (
                        <button className={cx('see-more')} onClick={() => handleSeeMore(numberSeeLess)}>
                            See more
                        </button>
                    ) : (
                        <button className={cx('see-more')} onClick={handleSeeLess}>
                            See less
                        </button>
                    )}
                </>
            ) : (
                <p className={cx('notify')}>Accounts you follow will appear here</p>
            )}
        </div>
    )
}

SuggestedAccounts.propTypes = {
    label: PropTypes.node.isRequired,
    data: PropTypes.array.isRequired,
    numberSeeLess: PropTypes.number.isRequired,
}

export default SuggestedAccounts
