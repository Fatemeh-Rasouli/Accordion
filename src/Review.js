import React, { useState } from 'react'
import data from './data'
import { FaChevronLeft,FaChevronRight,FaQuoteRight } from 'react-icons/fa'
import './index.css'

function Review() {
    const[index,setIndex]=useState(0)
    const{name,job,image,text}= data[index]
    const nextSlide = ()=>{
        setIndex((index)=>{
            let NewIndex =index+1;
            return  checkNumber(NewIndex)
        })
    }
    const preveSlide = ()=>{
        setIndex((index)=>{
            let NewIndex =index-1;
            return checkNumber(NewIndex)
        })
    }

    const checkNumber= (number)=>{
        if (number> data.length -1){
            return 0;
        } if (number < 0){
            return data.length -1
        }
        return number
            
    } 
    const randomPerson=()=>{
        let randomNumber = Math.floor(Math.random() * data.length);
        if(randomNumber === index){
            randomNumber = index +1
        }setIndex(checkNumber(randomNumber))
    }
return (
    <div className='reviews'>
        <div className='review-img'>
            <img src={image} alt="profile" />
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='review-button'>
            <button onClick={nextSlide}><FaChevronRight/></button>
            <button onClick={preveSlide}> <FaChevronLeft/></button>
        </div>
            <button className='random-btn' onClick={randomPerson}>عشقی</button>

    </div>
)
}

export default Review
