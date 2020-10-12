import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './login.css'


class Login extends Component {


    render() {
        return (
            <div>

                <div >
                    <p>Login</p>
                    <div>
                        <TextField variant="standard" placeholder="asd"></TextField>
                    </div>
                    <div>
                    <TextField  variant="standard" placeholder="Add" onChange={(e) => { }} />

                    </div>
                    <div>
                        <Button>Login</Button>
                    </div>

                </div>
            </div>

        )
    }

}

export default Login