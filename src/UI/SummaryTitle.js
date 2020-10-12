import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import EditIcon from '@material-ui/icons/Edit';

function SummaryTitle({ title, jumptoStep }) {
    return (
        <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
        >
            <Typography variant="h6" >
                <Box textAlign="left" m={1}>
                    {title}
                </Box>
            </Typography>
            <Tooltip title="Edit">
                <IconButton onClick={jumptoStep} color="inherit" aria-label="menu">
                    <EditIcon />
                </IconButton>
            </Tooltip>
        </Grid>
    )
}

export default SummaryTitle

