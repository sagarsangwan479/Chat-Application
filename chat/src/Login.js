import { Button } from '@material-ui/core';
import React from 'react'
import Photo from "./clipart4548222.png"

const Login = () => {



    return (
        <div className="login pt-5">
            <div>
                <img src={Photo} alt="" width="50%" className="mx-auto d-block" />
            </div>
            <Button>
                  <h6>Sign in with Phone number</h6>
                  <input type="number" className="form-control" />
                  <button type="submit">Submit</button>
            </Button>
        </div>
    )
}

export default Login;
