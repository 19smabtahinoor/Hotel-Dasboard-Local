import { FormControl, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from "react-hook-form";
import useCustomers from '../../hooks/useCustomers';
import CountrySelect from '../CountrySelect';
import FormButton from '../FormButton';

function UpdateCustomerForm({ id }) {
    const [customerData,setCustomerData] = React.useState({})
    const { register, handleSubmit } = useForm();
    const [country, setCountry] = React.useState('');
    const { updateCustomer } = useCustomers()

    React.useEffect(() => {
        const prevData = JSON?.parse(localStorage.getItem('customers'))
        const signleData = prevData?.find(item => item?.id === id)
        setCustomerData(signleData)

    }, [id])



    return (
        <form onSubmit={handleSubmit(updateCustomer)}>

            {/* first name and surname  */}
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }} sx={{ marginBottom: 3 }}>
                <Grid item xs={4} sm={8} md={6} lg={6}>
                    <FormControl variant="filled" sx={{ width: '100%' }}>
                        <Typography sx={{ marginBottom: 1 }}>First Name</Typography>
                        <input className="input" defaultValue={customerData?.firstname} placeholder="First Name"  {...register("firstname")} />
                    </FormControl>
                </Grid>
                <Grid item xs={4} sm={8} md={6} lg={6}>
                    <FormControl variant="filled" sx={{ width: '100%' }}>
                        <Typography sx={{ marginBottom: 1 }}>Sur Name</Typography>
                        <input className="input" placeholder="Sur Name" defaultValue={customerData?.surname}    {...register("surname")} />
                    </FormControl>
                </Grid>

            </Grid>

            {/* phone and email  */}
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }} sx={{ marginBottom: 3 }}>
                <Grid item xs={4} sm={8} md={6} lg={6}>
                    <FormControl variant="filled" sx={{ width: '100%' }}>
                        <Typography sx={{ marginBottom: 1 }}>Email</Typography>
                        <input className="input" placeholder="Email" defaultValue={customerData?.email}   {...register("email")} />
                    </FormControl>
                </Grid>
                <Grid item xs={4} sm={8} md={6} lg={6}>
                    <Typography sx={{ marginBottom: 1 }}>Phone</Typography>
                    <input className="input" placeholder="Phone" defaultValue={customerData?.phone}  {...register("phone")} />
                </Grid>
            </Grid>

            {/*  address   */}
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }} sx={{ marginBottom: 3 }}>
                <Grid item xs={4} sm={8} md={12} lg={12}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={{ marginBottom: 1 }}>Address</Typography>
                        <textarea placeholder="Address"
                            className="textArea" {...register("address")} defaultValue={customerData?.address}
                        ></textarea>
                    </Box>
                </Grid>
            </Grid>

            {/* country and city  */}
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }} sx={{ marginBottom: 3 }}>
                <Grid item xs={4} sm={8} md={6} lg={6}>
                    <CountrySelect country={country} setCountry={setCountry} />
                </Grid>
                <Grid item xs={4} sm={8} md={6} lg={6}>
                    <FormControl variant="filled" sx={{ width: '100%' }}>
                        <Typography sx={{ marginBottom: 1 }}>City</Typography>
                        <input className="input" placeholder="City" defaultValue={customerData?.city} {...register("city")} />
                    </FormControl>
                </Grid>
            </Grid>

            {/* post office and zip code */}
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }} sx={{ marginBottom: 3 }}>
                <Grid item xs={4} sm={8} md={6} lg={6}>
                    <FormControl variant="filled" sx={{ width: '100%' }}>
                        <Typography sx={{ marginBottom: 1 }}>Post Office</Typography>
                        <input className="input" placeholder="Post Office" defaultValue={customerData?.postOffice}  {...register("postOffice")} />
                    </FormControl>
                </Grid>
                <Grid item xs={4} sm={8} md={6} lg={6}>
                    <FormControl variant="filled" sx={{ width: '100%' }}>
                        <Typography sx={{ marginBottom: 1 }}>Zip Code</Typography>
                        <input className="input" placeholder="Zip Code" defaultValue={customerData?.code} {...register("code")} />
                    </FormControl>
                </Grid>
            </Grid>

            {/* buttons  */}
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end', height: '100%' }} >
                <FormButton text="Update Customer" />
            </Box>
        </form>
    );
}

export default UpdateCustomerForm;