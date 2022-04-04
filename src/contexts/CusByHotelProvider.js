import React, { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
export const HotelContext = createContext();

const HotelProvider = ({ children }) => {
    const navigate = useNavigate();
    const getLocalItems = () => {
        const data = localStorage.getItem('hotels')

        if (data) {
            return JSON?.parse(localStorage.getItem('hotels'))
        } else {
            return []
        }
    }

    const [hotelData, setHotelData] = React?.useState(getLocalItems())

    //add 
    const onSubmit = (data) => {
        const newData = { ...data, id: uuidv4()}
        setHotelData([...hotelData, newData]);

        Swal.fire({
            icon: 'success',
            title: 'New Hotel Added',
            showConfirmButton: false,
            timer: 1500
        }).then(res => {
            navigate('/hotels')
        })

    }

    //delete 
    const handleDelete = (code) => {
        const updated = hotelData?.filter(item => {
            return item?.code !== code
        })

        localStorage?.setItem('hotels', JSON?.stringify(updated))
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
        localStorage?.setItem('hotels', JSON?.stringify(hotelData))
    }, [hotelData])

    //update data
    const updateHotel = (data) => {
        const prevData = JSON?.parse(localStorage.getItem('hotels'))
         prevData?.find(item => item?.id?.toLowerCase() === data?.id?.toLowerCase())
        navigate('/hotels')
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

    const value = { hotelData, onSubmit, setHotelData, handleDelete, updateHotel };
    return (
        <HotelContext.Provider value={value}>
            {children}
        </HotelContext.Provider>
    )
}

export default HotelProvider
