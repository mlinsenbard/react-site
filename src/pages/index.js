import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default () => (
    <div>
        <Header headerText="Welcome" />
        Hello <b>idiot!</b><hr></hr>
        <Link to="/yeet/">boy howdy</Link>
    </div>
)
