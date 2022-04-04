import React, { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
export const CustomerContext = createContext();

const CustomersProvider = ({ children }) => {
    const navigate = useNavigate();
    const getLocalItems = () => {
        const data = localStorage.getItem('customers')

        if (data) {
            return JSON?.parse(localStorage.getItem('customers'))
        } else {
            return []
        }
    }

    const [customersData, setCustomersData] = React?.useState(getLocalItems())

    //add 
    const onSubmit = (data) => {
        const newData = { ...data, id: uuidv4() }
        setCustomersData([...customersData, newData]);

        Swal.fire({
            icon: 'success',
            title: 'New Customer Added',
            showConfirmButton: false,
            timer: 1500
        }).then(res => {
            navigate('/customers')
        })

    }

    //delete 
    const handleDelete = (code) => {
        const updated = customersData?.filter(item => {
            return item?.code !== code
        })

        localStorage?.setItem('customers', JSON?.stringify(updated))
        Swal.fire({
            icon: 'success',
            title: 'Deleted !!',
            showConfirmButton: false,
            timer: 1500
        }).then(res => {
            window.location.reload()
        })
    }

    React?.useEffect(() => {
        localStorage?.setItem('customers', JSON?.stringify(customersData))
    }, [customersData])

    //update data
    const updateCustomer = (data) => {
        const prevData = JSON?.parse(localStorage.getItem('customers'))
        prevData?.find(item => item?.id?.toLowerCase() === data?.id?.toLowerCase())
        navigate('/customers')
        // console.log(prevData)
        // if(singleData){
        //     singleData['name'] = data?.name
        //     singleData['address'] = data?.address
        //     singleData['telephone'] = data?.telephone
        //     singleData['code'] = data?.code

        //     localStorage?.setItem('hotels', JSON?.stringify(singleData))

        // }
    }

    // updateData()

    const value = { customersData, onSubmit, setCustomersData, handleDelete, updateCustomer };
    return (
        <CustomerContext.Provider value={value}>
            {children}
        </CustomerContext.Provider>
    )
}

export default CustomersProvider
