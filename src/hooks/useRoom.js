import { useContext } from 'react';
import { RoomContext } from '../contexts/RoomProvider';

const useHotel = () => {
    return useContext(RoomContext);
}

export default useHotel
