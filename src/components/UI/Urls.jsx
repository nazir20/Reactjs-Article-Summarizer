import React, { useEffect, useState } from 'react';
import {BiCopy} from 'react-icons/bi';
import {RiDeleteBackLine} from 'react-icons/ri';
import {MdOutlineDownloadDone} from 'react-icons/md';

const Urls = ({data, handleDeleteUrl}) => {

    const [isCopied, setIsCopied] = useState(false);
    const handleCopyToClipboard = async (url) => {
        try {
            const urlToCopy = url;
            await navigator.clipboard.writeText(urlToCopy);
            setIsCopied(true);
        } catch (error) {
        console.error('Failed to copy text:', error);
        }
    };

    useEffect(() => {
        let timeout;

        if (isCopied) {
        timeout = setTimeout(() => {
            setIsCopied(false);
        }, 2000);
        }

        return () => clearTimeout(timeout);

    }, [isCopied]);

  return (
    <div className='urls__container'>
        {isCopied && <div className="copy__container">
                        <MdOutlineDownloadDone className='copy-to-clipboard'/>
                        <span>Copied URL!</span>
                    </div>
        }
        {data.map((item, index)=>{
            return (
                <div className="url__container" key={index}>
                    <button type='button' className='copy-btn' onClick={()=>handleCopyToClipboard(item.url)}><BiCopy/></button>
                    <button className='url-btn' onClick={()=>window.open(item.url)}>{item.url}</button>
                    <button type='button' className='delete-btn' onClick={()=>handleDeleteUrl(item.url)}><RiDeleteBackLine/></button>
                </div>
            )
        })}
    </div>
  )
}

export default Urls