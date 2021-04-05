import React, { useState } from 'react'

const createClient = require('ipfs-api');
// const createClient = require('ipfs-http-client');

const ipfs = createClient({ host: 'ipfs.infura.io', 
                            port: 5001, 
                            protocol: 'https'})

const SendIpfs = () => {

  const [ data, setData ] = useState([])
  

  const upLoadImage = async (e) => {
    const file = e.target.files[0]
    const buffer = await convertBuffer(file)
    console.log(buffer)
    setData(buffer)
    // console.log(data)
  }

  const convertBuffer = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = () => {
        resolve(Buffer(fileReader.result))
      }

      fileReader.onerror = (error) => {
        reject(error);
      }
    })
  }

  const sendToIpfs = async (data) => {

    console.log('Submitting file...')
    
    const file = await ipfs.add(data, (error, result) => {
      console.log(result)
      if(error) {
        console.error(error)
        return
        }
    })
    return file
  }
  
  return (
    <>
      <div>
        Volume Library
      </div>
      <input type='file' onChange={upLoadImage}  name='volume' id='volume' />
      <input type='submit' onClick={(e) => {sendToIpfs(data)}} />
    </>  
  )
}

export default SendIpfs;
