import React from 'react'

const  DelayLoading = ({ pastDelay, error }) => {
    if (error) {
        return <div>Error!</div>;
      } else {
        return <div>Loading...</div>;
      }
}
export default DelayLoading