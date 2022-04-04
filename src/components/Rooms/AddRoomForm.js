import { FormControl, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from "react-hook-form";
import useRoom from '../../hooks/useRoom';
import FormButton from '../FormButton';

function AddRoomForm(props) {
    const { register, handleSubmit } = useForm();
    const { onSubmit } = useRoom();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            {/* room name   */}
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }} sx={{ marginBottom: 3 }}>
                <Grid item xs={4} sm={8} md={12} lg={12}>
                    <FormControl variant="filled" sx={{ width: '100%' }}>
                        <Typography sx={{ marginBottom: 1 }}>Hotel Name</Typography>
                        <TextField id="outlined-basic" variant="outlined" placeholder="Hotel Name" color="success" {...register("hotelName")} />
                    </FormControl>
                </Grid>

            </Grid>

            {/* room telephone and number */}
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }} sx={{ marginBottom: 3 }}>
                <Grid item xs={4} sm={8} md={6} lg={6}>
                    <FormControl variant="filled" sx={{ width: '100%' }}>
                        <Typography sx={{ marginBottom: 1 }}>Room Number</Typography>
                        <TextField id="outlined-basic" variant="outlined" placeholder="Room Number" color="success" {...register("roomNumber")} />
                    </FormControl>
                </Grid>
                <Grid item xs={4} sm={8} md={6} lg={6}>
                    <FormControl variant="filled" sx={{ width: '100%' }}>
                        <Typography sx={{ marginBottom: 1 }}>Room Telephone</Typography>
                        <TextField id="outlined-basic" variant="outlined" placeholder="Room Telephone" color="success" {...register("telephone")} />
                    </FormControl>
                </Grid>
            </Grid>

            {/* buttons  */}
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end', height: '100%' }} >
                <FormButton text="Add Room" />
            </Box>
        </form>
    );
}

export default AddRoomForm;