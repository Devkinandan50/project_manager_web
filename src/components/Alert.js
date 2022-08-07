import React from 'react'

export default function Alert(props) {
    return (
        // props.alert agar true hai to div evalvate hoga
        props.alert && <div className={"alert alert-" + (props.alert.type)} role="alert">
            {props.alert.msg}
        </div>
    )
}
