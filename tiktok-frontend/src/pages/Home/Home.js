import Content from '~/layouts/Content/Content'

import styles from './Home.module.scss'
import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import { URL } from '~/utils/httpLocal'
const cx = classNames.bind(styles)

function Home() {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetch('/video/list')
            .then((res) => res.json())
            .then((res) => setVideos(res))
    }, [])

    return (
        <div className={cx('wrapper')}>
            {videos.map(
                (video) =>
                    video.videoResponse.map((videoResponse) =>
                        videoResponse.type.includes('video') ? (
                            <Content
                                key={videoResponse.id}
                                videoURL={URL.video + videoResponse.name}
                                id={videoResponse.id}
                                user={video.user}
                                title={video.video_description}
                                video={video}
                            />
                        ) : (
                            ''
                        ),
                    ),

                //
            )}
        </div>
    )
}

export default Home
