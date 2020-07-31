import React from 'react'

// styles
import "../../scss/Update.scss";

// components
import Input from '../Input';
import { PrimaryButton } from '../Button';

const Update = () => {
    return (
        <div className="update">
            <small>Great updates</small>
            <h1>Sign up to our newsletter to get updates on events, news and opportunities</h1>
            <form>
                <Input placeholder="Username or email" />
                <PrimaryButton name="Subscribe" />
            </form>
        </div>
    )
}

export default Update
