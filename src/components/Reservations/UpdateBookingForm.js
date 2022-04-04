import { FormControl, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from "react-hook-form";
import useReservation from '../../hooks/useReservation';
import BookingDatePicker from '../BookingDatePicker';
import BookingDateRangePicker from '../BookingDateRangePicker';
import FormButton from '../FormButton';



function UpdateBookingForm({ id }) {
     const [bookingData, setBookingData] = React.useState({})
    const { register, handleSubmit } = useForm();
    const [currentDate, setCurrentDate] = React.useState(null);
    const [value, setValue] = React.useState([null, null]);
    // const [currentDate, setCurrentDate] = React.useState(bookingData?.bookingDate?.toLocaleDateString());
    // const [value, setValue] = React.useState([bookingData?.startDate?.toLocaleDateString(), bookingData?.endDate?.toLocaleDateString()]);
    const { updateReservation } = useReservation()

    React.useEffect(() => {
        const prevData = JSON?.parse(localStorage.getItem('reservations'))
        const signleData = prevData?.find(item => item?.id === id)
        setBookingData(signleData)

    }, [id])

    

    return (
        <form onSubmit={handleSubmit(updateReservation)}>

            {/* first name and surname  */}
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }} sx={{ marginBottom: 3 }}>
                <Grid item xs={4} sm={8} md={6} lg={6}>
                    <BookingDatePicker currentDate={currentDate} setCurrentDate={setCurrentDate} />
                </Grid>
                <Grid item xs={4} sm={8} md={6} lg={6}>
                    <BookingDateRangePicker value={value} setValue={setValue} />
                </Grid>
            </Grid>

            {/*  description   */}
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }} sx={{ marginBottom: 3 }}>
                <Grid item xs={4} sm={8} md={12} lg={12}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={{ marginBottom: 1 }}>Description</Typography>
                        <textarea placeholder="Description"
                            className="textArea" defaultValue={bookingData?.description} {...register("description")}
                        ></textarea>
                    </Box>
                </Grid>
            </Grid>

            {/* amount */}
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }} sx={{ marginBottom: 3 }}>
                <Grid item xs={4} sm={8} md={12} lg={12}>
                    <FormControl variant="filled" sx={{ width: '100%' }}>
                        <Typography sx={{ marginBottom: 1 }}>Amount</Typography>
                        <input className="input" placeholder="Amount" defaultValue={bookingData?.amount} {...register("amount")} />
                    </FormControl>
                </Grid>
            </Grid>

            {/* buttons  */}
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end', height: '100%' }} >
                <FormButton text="Update Reservation" />
            </Box>
        </form>
    );
}

export default UpdateBookingForm;