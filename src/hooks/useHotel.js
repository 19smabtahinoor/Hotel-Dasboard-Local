import { useContext } from 'react';
import { HotelContext } from '../contexts/HotelProvider';

const useHotel = () => {
    return useContext(HotelContext);
}

export default useHotel
