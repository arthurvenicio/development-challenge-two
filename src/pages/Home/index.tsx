import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Button';

import styles from './index.module.scss';

export function Home(): JSX.Element {
    const history = useHistory();

    function Redirect(href: string) {
        history.push(`${href}`);
    }
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.title}>
                    <p>What do you need?</p>
                </div>
                <div className={styles.buttons}>
                    <Button
                        type={'button'}
                        text={'Create Patient'}
                        isUpdate
                        onClick={() => Redirect('/patients/create')}
                    />
                    <Button
                        type={'button'}
                        text={'Search Patient'}
                        onClick={() => Redirect('/patients/search')}
                        isUpdate
                    />
                    <Button
                        type={'button'}
                        text={'List Patients'}
                        onClick={() => Redirect('/patients/list')}
                        isUpdate
                    />
                </div>
            </div>
        </div>
    );
}
