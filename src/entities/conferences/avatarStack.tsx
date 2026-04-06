import React from 'react';
import styles from './style.module.scss'

export const AvatarStack = () => {
    return (
        <div className={styles.avatarStack}>
            <div className={styles.avatar}>
                <img src="/conferences/profile-img.jpg" alt="User 2" title=""/>
            </div>
            <div className={styles.avatar}>
                <img src="/conferences/profile-img.jpg" alt="User 2" title=""/>
            </div>
            <div className={`${styles.avatar} ${styles.last}`}>
                <img src="/conferences/profile-img.jpg" alt="User 3" title=""/>
                <div className={styles.overlay}>+5</div>
            </div>
        </div>
    );
};
