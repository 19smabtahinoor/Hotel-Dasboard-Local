import React, { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
export const RoomContext = createContext();

const RoomProvider = ({ children }) => {
    const navigate = useNavigate();
    const getLocalItems = () => {
        const data = localStorage.getItem('rooms')

        if (data) {
            return JSON?.parse(localStorage.getItem('rooms'))
        } else {
            return []
        }
    }

    const [roomData, setRoomData] = React?.useState(getLocalItems())

    //add 
    const onSubmit = (data) => {
        const newData = { ...data, id: uuidv4() }
        setRoomData([...roomData, newData]);

        Swal.fire({
            icon: 'success',
            title: 'New Room Added',
            showConfirmButton: false,
            timer: 1500
        }).then(res => {
            navigate('/rooms')
        })

    }

    //delete 
    const handleDelete = (roomNumber) => {
        const updated = roomData?.filter(item => {
            return item?.roomNumber !== roomNumber
        })

        localStorage?.setItem('rooms', JSON?.stringify(updated))
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
        localStorage?.setItem('rooms', JSON?.stringify(roomData))
    }, [roomData])

    //update data
    const updateRoom = (data) => {
        const prevData = JSON?.parse(localStorage.getItem('rooms'))
        prevData?.find(item => item?.id?.toLowerCase() === data?.id?.toLowerCase())
        navigate('/rooms')
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

    const value = { roomData, onSubmit, setRoomData, handleDelete, updateRoom };
    return (
        <RoomContext.Provider value={value}>
            {children}
        </RoomContext.Provider>
    )
}

export default RoomProvider
