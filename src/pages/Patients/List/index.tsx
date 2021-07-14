import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { ListItem } from '../../../components/ListItem';

import { api } from '../../../services/api';
import styles from './index.module.scss';

type Patient = {
    pateientId: string;
    firstName: string;
    lastName: string;
    idCard: string;
    zipCode: string;
    country: string;
    birthDate: string;
};

export function List(): JSX.Element {
    const [data, setData] = useState<Patient[]>();

    useEffect(() => {
        api.get(`/patients`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response: AxiosResponse) => {
                console.log(response.data.patients);
                setData(response.data.patients);
            })
            .catch((err) => {
                console.error('ops! ocorreu um erro' + err);
            });
    }, []);

    if (!data || data === null) {
        return (
            <div className={styles.container}>
                <div className={styles.box}>
                    <p>Loading...</p>
                </div>
            </div>
        );
    }
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.cardElement}>
                    {data.map(
                        (
                            { firstName, lastName, birthDate, pateientId },
                            index,
                        ) => (
                            <ListItem
                                key={index}
                                firstName={firstName}
                                lastName={lastName}
                                birthDate={birthDate}
                                pateientId={pateientId}
                            />
                        ),
                    )}
                </div>
            </div>
        </div>
    );
}
