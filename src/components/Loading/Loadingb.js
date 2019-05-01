import React from 'react';
import styles from './Loading.module.css';

import spinner from './loading-arrow.gif';

const Loading = () => {
    return (
        <div className={styles.loading}>
            <img src={spinner} width="80px" alt="Loading..." />
        </div>
    );
};

export default Loading;
