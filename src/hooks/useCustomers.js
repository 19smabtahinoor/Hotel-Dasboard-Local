import { useContext } from 'react';
import { CustomerContext } from '../contexts/CustomersProvider';

const useCustomers = () => {
    return useContext(CustomerContext);
}

export default useCustomers
