import React, { useRef, useState} from 'react';
import './Header.css';
import {FiLink2} from 'react-icons/fi';
import {AiOutlineEnter} from 'react-icons/ai';
import Loading from '../UI/Loading';
import Error from '../UI/Error';
import Urls from '../UI/Urls';
import SummarizedArticle from '../UI/SummarizedArticle';

const savedData = localStorage.getItem('summarizedData');

const Header = () => {

  const articleUrl = useRef();
  const [summarizedArticle, setSummarizedArticle] = useState({
    url:'',
    summarizedText:'',
  });
  const [isSummarizing, setIsSummarizing] = useState(false);
  const [isError, setIsError] = useState(false);
  const [summarized, setSummarized] = useState(false);
  const [summarizedData, setSummarizedData] = useState(JSON.parse(savedData));


  // functions
  const handleSubmit = async(e)=>{
    e.preventDefault();
    let newArticleUrl = articleUrl.current.value;

    const url = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${newArticleUrl}&length=3`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': `${process.env.REACT_APP_RAPID_API_KEY}`,
        'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
      }
    };
    articleUrl.current.value = '';
    setIsSummarizing(true);
    setIsError(false);

    try {
      const response = await fetch(url, options);
      if(!response.ok){
        setIsError(true);
        setIsSummarizing(false);
      }else{
        const result = await response.json();
        setSummarizedArticle({
          ...summarizedArticle,
          url: newArticleUrl,
          summarizedText: result.summary
        });

        const newSummarizedData = [
          ...summarizedData,
          { url: newArticleUrl, summarizedText: result.summary },
        ];

        handleSaveUrlToLocalStorage(newArticleUrl,result.summary);
        setSummarized(true);
        setIsSummarizing(false);
      }
    } catch (e) {
      console.error(e);
      setIsError(true);
      setIsSummarizing(false);
      setSummarized(false);
    }
  }


  const handleSaveUrlToLocalStorage = (newUrl, newSummarizedText) => {
    const existingUrl = summarizedData.find((item) => item.url === newUrl);
    if (existingUrl) {
      return;
    }
    const newSummarizedData = [
      ...summarizedData,
      { url: newUrl, summarizedText: newSummarizedText },
    ];
    localStorage.setItem('summarizedData', JSON.stringify(newSummarizedData));
    setSummarizedData(newSummarizedData);
  };

  const handleDeleteUrl = (url) => {
    const updatedSummarizedData = summarizedData.filter((item) => item.url !== url);
    localStorage.setItem('summarizedData', JSON.stringify(updatedSummarizedData));
    setSummarizedData(updatedSummarizedData);
  };

  const getUrlData = (url) => {
    const existingUrlData = summarizedData.find((item) => item.url === url);
    if (existingUrlData) {
      console.log('URL:', existingUrlData.url);
      console.log('Summarized Text:', existingUrlData.summarizedText);
    } else {
      console.log('URL not found:', url);
    }
  };

  return (
    <header>
        {/* <div className="header__btn">
          <button type='button'><b>Try  it for free!</b></button>
        </div> */}

        <form onSubmit={handleSubmit}>
          <FiLink2 className='link__icon'/>
          <input 
            type="url" 
            placeholder="Enter The Article's URL" 
            ref={articleUrl}
          />
          <button type='submit'>
            <AiOutlineEnter className='enter__icon'/>
          </button>
        </form>

        {isSummarizing && <Loading/>}
        {isError && <Error/>}
        <Urls data={summarizedData} handleDeleteUrl={handleDeleteUrl}/>
        {summarized && <SummarizedArticle text={summarizedArticle.summarizedText}/>}

    </header>
  )
}

export default Header