import { AxiosError, AxiosResponse } from 'axios';
import React, { FormEvent, useEffect, useState } from 'react';
import { Redirect, useHistory, useParams } from 'react-router-dom';

import { Button } from '../../../components/Button';
import { api } from '../../../services/api';
import styles from './index.module.scss';

type DataInfo = {
    id: string;
};

const valueInit = {
    pateientId: '',
    firstName: '',
    lastName: '',
    idCard: '',
    zipCode: '',
    country: '',
    birthDate: '',
};

export function Details(): JSX.Element {
    const { id }: DataInfo = useParams();
    const [data, setData] = useState(valueInit);
    const history = useHistory();

    useEffect(() => {
        api.get(`/patient?pateientId=${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        })
            .then((response: AxiosResponse) => {
                setData(response.data);
            })
            .catch((err) => {
                console.error('ops! ocorreu um erro' + err);
            });
    }, []);

    function onDelete(ev: FormEvent) {
        ev.preventDefault();
        api.delete(`/patient?pateientId=${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        })
            .then((response) =>
                alert(`Operation have :${response.data.Message}`),
            )
            .catch((error: AxiosError) => console.log(error));
        history.push('/');
    }

    function onSubmit(ev: FormEvent) {
        ev.preventDefault();

        history.push(`/patients/update/${id}`);
    }

    if (!data) return <Redirect to="/404" />;
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <form>
                    <div className={styles.division}>
                        <div>
                            <p>First Name</p>
                            <span>{data.firstName}</span>
                        </div>
                        <div className={styles.lastname}>
                            <p>Last Name</p>
                            <span>{data.lastName}</span>
                        </div>
                    </div>
                    <>
                        <p>Id Card</p>
                        <span>
                            {data.idCard ? data.idCard : 'NÃO INFORMADO'}
                        </span>
                    </>
                    <>
                        <p>Birth Date</p>
                        <span>{data.birthDate}</span>
                    </>
                    <div className={styles.division}>
                        <div>
                            <p>Zip Code</p>
                            <span>{data.zipCode}</span>
                        </div>
                        <div className={styles.lastname}>
                            <p>Country</p>
                            <span>{data.country}</span>
                        </div>
                    </div>

                    <div className={styles.button}>
                        <Button
                            type={'button'}
                            text={'Update'}
                            onClick={onSubmit}
                            isUpdate
                        />
                        <Button
                            type={'button'}
                            text={'Delete'}
                            isDelete
                            onClick={onDelete}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
