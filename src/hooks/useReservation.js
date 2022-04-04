import { useContext } from 'react';
import { ReservationContext } from '../contexts/ReservationProvider';

const useHotel = () => {
    return useContext(ReservationContext);
}

export default useHotel
