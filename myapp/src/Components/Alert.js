import React from 'react'

function Alert(props) {
  const FirstletterUpper=(word)=>{
    const lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
  }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{FirstletterUpper(props.alert.type)}</strong>{props.alert.message}
</div>
  )
}

export default Alert
