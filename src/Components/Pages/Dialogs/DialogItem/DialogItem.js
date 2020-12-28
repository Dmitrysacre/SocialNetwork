import React from 'react'
import { NavLink } from 'react-router-dom'

const DialogItem = ({ dialog, index}) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <img src="..." class="img-thumbnail size"></img>
                <NavLink to={"dialogs/" + dialog.id}>{dialog.name}</NavLink>
                <span className="badge badge-primary badge-pill ml-4">{dialog.count}</span>
        </li>
    )
}

export default DialogItem