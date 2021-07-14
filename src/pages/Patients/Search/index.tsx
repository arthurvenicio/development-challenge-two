import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../../../components/Button';

import styles from './index.module.scss';

const initValue = {
    pateientId: '',
};
export function SearchPage(): JSX.Element {
    const [values, setValues] = useState(initValue);
    const history = useHistory();

    function onChange(ev: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = ev.target;

        // console.log(values);

        const newDate = { ...values, [name]: value };

        setValues(newDate);
    }

    function onSubmit(ev: FormEvent) {
        ev.preventDefault();

        history.push(`/patients/details/${values.pateientId}`);
    }
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.title}>
                    <p>Insert the PatientId </p>
                </div>
                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        name="pateientId"
                        onChange={onChange}
                    ></input>
                    <Button
                        type={'submit'}
                        text={'Search'}
                        onSubmit={onSubmit}
                    />
                </form>
            </div>
        </div>
    );
}
