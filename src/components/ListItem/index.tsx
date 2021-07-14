import React from 'react';
import { Link } from 'react-router-dom';
import { BsPersonFill, BsCalendar } from 'react-icons/bs';
import { HiOutlineIdentification } from 'react-icons/hi';

type ItemProps = {
    pateientId: string;
    firstName: string;
    lastName: string;
    birthDate: string;
    key: number;
};

import styles from './index.module.scss';
export function ListItem(props: ItemProps): JSX.Element {
    return (
        <div key={props.key} className={styles.listItem}>
            <Link
                className={styles.Link}
                to={`/patients/details/${props.pateientId}`}
            >
                <div className={styles.name}>
                    <BsPersonFill />
                    <p>{`${props.firstName}`}</p>
                    <p>{`${props.lastName}`}</p>
                </div>
            </Link>

            <div className={styles.birhDate}>
                <BsCalendar />
                <p>{`${props.birthDate}`}</p>
            </div>
            <div className={styles.patientId}>
                <HiOutlineIdentification size={30} />
                <p>{`${props.pateientId}`}</p>
            </div>
        </div>
    );
}
