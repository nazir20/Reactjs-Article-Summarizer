import React, { useState } from 'react';


const SummarizedArticle = ({text}) => {

    const [isCopied, setIsCopied] = useState('Copy Article');
    const handleCopyToClipboard = async (text) => {
        try {
            const textToCopy = text;
            await navigator.clipboard.writeText(textToCopy);
            setIsCopied('Copied!');
        } catch (error) {
        console.error('Failed to copy text:', error);
        }
    };

  return (
    <div className='summarized_article__container'>
        <div className="article_info">
            <h3>Summary of the Article</h3>
            <button type='button' onClick={()=>handleCopyToClipboard(text)}>{isCopied}</button>
        </div>
        <div>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default SummarizedArticle