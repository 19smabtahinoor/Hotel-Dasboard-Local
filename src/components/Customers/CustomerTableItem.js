import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import { Box, TableCell, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCustomers from '../../hooks/useCustomers';

function CustomerTableItem({ row, index }) {
    const navigate = useNavigate()
    const { handleDelete } = useCustomers();


    return (
        <>
            {/* no  */}
            <TableCell>
                <Typography variant="subtitle1" gutterBottom component="div" sx={{ overflow: 'hidden', color: '#5a5c5e' }}>
                    {index}
                </Typography>
            </TableCell>

            {/* name  */}
            <TableCell >
                <Typography variant="subtitle1" gutterBottom component="div" sx={{ overflow: 'hidden', color: '#000' }}>
                    {row?.firstname}  {row?.surname}
                </Typography>
            </TableCell>

            {/* email  */}
            <TableCell>
                <Typography variant="subtitle1" gutterBottom component="div" sx={{ overflow: 'hidden', color: '#5a5c5e' }}>
                    {row?.email}
                </Typography>
            </TableCell>

            {/* address  */}
            <TableCell >
                <Typography variant="subtitle1" gutterBottom component="div" sx={{ overflow: 'hidden', color: '#5a5c5e' }}>
                    {row?.address}
                </Typography>
            </TableCell>

            {/* phone  */}
            <TableCell >
                <Typography variant="subtitle1" gutterBottom component="div" sx={{ overflow: 'hidden', color: '#5a5c5e' }}>
                    {row?.phone}
                </Typography>
            </TableCell>

            {/* country  */}
            <TableCell >
                <Typography variant="subtitle1" gutterBottom component="div" sx={{ overflow: 'hidden', color: '#5a5c5e' }}>
                    {row?.country}
                </Typography>
            </TableCell>

            {/* city  */}
            <TableCell >
                <Typography variant="subtitle1" gutterBottom component="div" sx={{ overflow: 'hidden', color: '#5a5c5e' }}>
                    {row?.city}
                </Typography>
            </TableCell>

            {/* postOffice  */}
            <TableCell >
                <Typography variant="subtitle1" gutterBottom component="div" sx={{ overflow: 'hidden', color: '#5a5c5e' }}>
                    {row?.postOffice}
                </Typography>
            </TableCell>

            {/* code  */}
            <TableCell >
                <Typography variant="subtitle1" gutterBottom component="div" sx={{ overflow: 'hidden', color: '#5a5c5e' }}>
                    {row?.code}
                </Typography>
            </TableCell>

            {/* action  */}
            <TableCell>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
                    <EditIcon sx={{ marginRight: 1, cursor: 'pointer' }} onClick={() => navigate(`/customers/updateCustomer/${row?.id}`)} />
                    <DeleteOutlineIcon sx={{ cursor: 'pointer' }} onClick={() => handleDelete(row?.code)} />
                </Box>
            </TableCell>
            {/* </TableRow> */}
        </>
    );
}

export default CustomerTableItem;