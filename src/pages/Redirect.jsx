import React, { useEffect, useState } from 'react'

export default function Redirect() {
  const [token, setToken] = useState('')
  
  const getParamsFromHash = (hash) => {
    const hashContent = hash.substring(1) // remove #
    const paramsSplit = hashContent.split('&');
    let params = {};
    let values = [];

    paramsSplit.forEach((param) => {
      values = param.split('=')
      params[values[0]] = values[1]
    })    
    return params
  }


  useEffect(() => {
    setToken(localStorage.getItem('token'));
  },[token])

  useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash;
      const tokens = getParamsFromHash(hash);
      localStorage.setItem('token', tokens.access_token)
      setToken(tokens.access_token)
      window.location.replace('/main')
    }
  }, [])
  return (
    <>
      Redirecting...      
    </>
    )
}
