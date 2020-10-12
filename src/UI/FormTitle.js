import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function FormTitle({title}) {
    return (
        <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Typography variant="h6" >
              <Box textAlign="left" m={1}>
                {title}
            </Box>
            </Typography>
          </Grid>
    )
}

export default FormTitle

