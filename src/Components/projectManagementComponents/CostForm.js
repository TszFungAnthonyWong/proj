import React from 'react'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormTitle from '../../UI/FormTitle';

function CostForm({ costType, cost, handleCostChange }) {
    let total = 0
    const list = costType.map((type, i) => {
        total += cost[type] ? cost[type] : 0
        return (
            <Grid key={type + i} style={{ padding: "10px" }}>
                <TextField
                    value={cost[type]}
                    onChange={(e) => {
                        handleCostChange(e.target.valueAsNumber, type)
                    }}
                    label={type}
                    type="number"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="end">
                                <AttachMoneyIcon color="action" fontSize="small" />
                            </InputAdornment>
                        ),
                    }}
                />
            </Grid>
        )
    })
    return (
        <Grid>
            <FormTitle title={"Cost"} />
            <div style={{ columns: "2 auto" }}>
                {list}
            </div>
            <FormTitle title={"Total:" + total} />
        </Grid>
    )
}

CostForm.propTypes = {

}

export default CostForm

