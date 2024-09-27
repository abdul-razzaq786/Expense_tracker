import styles from './AddBalanceForm.module.css';
import Button from '../../Button/Button.jsx';
import { useState } from 'react';
import { useSnackbar } from 'notistack';

export default function AddBalanceForm({ setIsOpen, setBalance }) {
    const [income, setIncome] = useState('');
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = (e) => {
        e.preventDefault();

        const incomeValue = Number(income);
        if (isNaN(incomeValue) || incomeValue <= 0) {
            enqueueSnackbar("Income should be greater than 0", { variant: "warning" });
            return;
        }

        setBalance(prev => prev + incomeValue);
        setIsOpen(false);
    };

    return (
        <div className={styles.formWrapper}>
            <h3>Add Balance</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    placeholder='Income Amount'
                    value={income}
                    onChange={(e) => setIncome(e.target.value)}
                    required
                />

                <Button type="submit" style={{ backgroundColor: '#4CAF50', color: 'white' }} shadow>
                    Add Balance
                </Button>

                <Button
                    style={{ backgroundColor: '#f44336', color: 'white' }}
                    shadow
                    handleClick={() => setIsOpen(false)}
                >
                    Cancel
                </Button>
            </form>
        </div>
    );
}
