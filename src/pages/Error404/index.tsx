import React from 'react';

import styles from './index.module.scss';

export function Page404(): JSX.Element {
    return (
        <div className={styles.container}>
            <div className={styles.error}>
                <p>404</p>
                <>
                    <p>Hmm... page not found!</p>
                </>
            </div>
        </div>
    );
}
