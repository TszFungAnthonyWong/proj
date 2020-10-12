import React from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FormTitle from '../../UI/FormTitle';




function MemberForm({ member, handleMemberChange }) {

    const memberTypeList = Object.keys(member).map((type, i) => {
        return (
            <div key={type + i} style={{ width: "500px", paddingBottom: "20px", margin: "8px" }}>
                <Typography variant="h6" >
                    <Box textAlign="left">
                        {type}
                    </Box>
                </Typography>

                <Grid m={1}>
                    {
                        Object.keys(member[type]).map((role) => {

                            return (
                                <Autocomplete
                                    style={{ paddingBottom: "10px" }}
                                    key={role + i}
                                    multiple
                                    id="tags-filled"
                                    options={[
                                        { title: 'The Shawshank Redemption', year: 1994 },
                                        { title: 'The Godfather', year: 1972 }].map((option) => option.title)}
                                    value={member[type][role]}
                                    onChange={(event, newValue) => {
                                        handleMemberChange(type, role, newValue)
                                    }}
                                    freeSolo
                                    renderTags={(value, getTagProps) =>
                                        value.map((option, index) => (
                                            <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                                        ))
                                    }
                                    renderInput={(params) => (
                                        <TextField {...params} variant="standard" label={role} placeholder="Add" onChange={(e) => { }} />
                                    )}
                                />
                            )
                        })
                    }
                </Grid>

            </div>
        )
    })


    return (
        <div>
            <FormTitle title={'Member'} />
            {memberTypeList}
        </div>
    )

}

MemberForm.propTypes = {

}

export default MemberForm

