import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import { Box, TableCell, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useRoom from '../../hooks/useRoom';

function RoomTableItem({ row, index }) {
    const navigate = useNavigate()
    const { handleDelete } = useRoom();

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
                <Typography variant="subtitle1" gutterBottom component="div" sx={{ overflow: 'hidden', color: '#5a5c5e' }}>
                    {row?.hotelName}
                </Typography>
            </TableCell>

            {/* roomNumber  */}
            <TableCell>
                <Typography variant="subtitle1" gutterBottom component="div" sx={{ overflow: 'hidden', color: '#000' }}>
                    {row?.roomNumber}
                </Typography>
            </TableCell>

            {/* telephone  */}
            <TableCell >
                <Typography variant="subtitle1" gutterBottom component="div" sx={{ overflow: 'hidden', color: '#5a5c5e' }}>
                    {row?.telephone}
                </Typography>
            </TableCell>

            {/* action  */}
            <TableCell>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
                    <EditIcon sx={{ marginRight: 1, cursor: 'pointer' }} onClick={() => navigate(`/rooms/updateRoom/${row?.id}`)} />
                    <DeleteOutlineIcon sx={{ cursor: 'pointer' }} onClick={() => handleDelete(row?.roomNumber)} />
                </Box>
            </TableCell>
        </>
    );
}

export default RoomTableItem;