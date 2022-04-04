import { FormControl, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from "react-hook-form";
import useReservation from '../../hooks/useReservation';
import BookingDatePicker from '../BookingDatePicker';
import BookingDateRangePicker from '../BookingDateRangePicker';
import FormButton from '../FormButton';



function AddBookingForm(props) {
    const [value, setValue] = React.useState([null, null]);
    const { register, handleSubmit } = useForm();
    const { onSubmit, setCurrentDate, currentDate } = useReservation();



    return (
        <form onSubmit={handleSubmit(onSubmit)}>

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
                            className="textArea" {...register("description")}
                        ></textarea>
                    </Box>
                </Grid>
            </Grid>

            {/* amount */}
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }} sx={{ marginBottom: 3 }}>
                <Grid item xs={4} sm={8} md={12} lg={12}>
                    <FormControl variant="filled" sx={{ width: '100%' }}>
                        <Typography sx={{ marginBottom: 1 }}>Amount</Typography>
                        <TextField id="outlined-basic" variant="outlined" placeholder="Amount" color="success" {...register("amount")} />
                    </FormControl>
                </Grid>
            </Grid>

            {/* buttons  */}
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end', height: '100%' }} >
                <FormButton text="Add Reservation" />
            </Box>
        </form>
    );
}

export default AddBookingForm;