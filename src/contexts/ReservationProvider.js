import React, { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
export const ReservationContext = createContext();

const ReservationProvider = ({ children }) => {
    const [currentDate, setCurrentDate] = React.useState(null);

    const navigate = useNavigate();
    const getLocalItems = () => {
        const data = localStorage.getItem('reservations')

        if (data) {
            return JSON?.parse(localStorage.getItem('reservations'))
        } else {
            return []
        }
    }

    const [reservationData, setReservationData] = React?.useState(getLocalItems())

    //add 
    const onSubmit = (data) => {
        const newData = { ...data, id: uuidv4() }
        newData['bookingDate'] = currentDate?.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
        newData['startDate'] = value[0]?.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
        newData['endDate'] = value[1]?.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });

        setReservationData([...reservationData, newData]);

        Swal.fire({
            icon: 'success',
            title: 'New Reservation Added',
            showConfirmButton: false,
            timer: 1500
        }).then(res => {
            navigate('/reservations')
        })

    }

    //delete 
    const handleDelete = (code) => {
        const updated = reservationData?.filter(item => {
            return item?.code !== code
        })

        localStorage?.setItem('reservations', JSON?.stringify(updated))
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
        localStorage?.setItem('reservations', JSON?.stringify(reservationData))
    }, [reservationData])

    //update data
    const updateReservation = (data) => {
        const prevData = JSON?.parse(localStorage.getItem('reservations'))
        prevData?.find(item => item?.id?.toLowerCase() === data?.id?.toLowerCase())
        prevData['bookingDate'] = currentDate?.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
        prevData['startDate'] = value[0]?.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
        prevData['endDate'] = value[1]?.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
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

    const value = { reservationData, onSubmit, setReservationData, handleDelete,updateReservation, setCurrentDate, currentDate };
    return (
        <ReservationContext.Provider value={value}>
            {children}
        </ReservationContext.Provider>
    )
}

export default ReservationProvider
