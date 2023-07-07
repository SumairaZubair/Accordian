import React, { useState } from 'react';
import {questions} from './Question';
import Accordian from './Accordian';

 function Question() {
    const [data,setData]=useState(questions);
  return (
    <div>
        <section className='main-div'>
        {data.map((currenEle)=>{
            const{id}=currenEle
            return <Accordian key={id} {...currenEle}/>
        })}
        </section>
    </div>
  )
}
export default Question 