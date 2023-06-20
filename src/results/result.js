import React, { useEffect, useState } from 'react';
import './result.css';
import { updateData } from '../Apis/Api';
import { Link } from 'react-router-dom';
import f from '../assests/friend.jpg';
import l from '../assests/love.jpg';
import a from '../assests/affectinate.jpg';
import m from '../assests/marrige.jpg';
import e from '../assests/enemy.gif';
import s from '../assests/sister.jpg';

const Result = () => {

  const[show,setShow]=useState(false);
  const [path,setPath]=useState('');
  const [value,setValue]=useState('');


  const result=JSON.parse(localStorage.getItem('result'));
  const userId=localStorage.getItem('id');

  const flames=['f','l','a','m','e','s'];
  const index=flames.indexOf(result);

  const imgSrc=[f,l,a,m,e,s];
  const results=[
    ` Friends`,
    ` Lovers`,
    `Affectionates `,
    `Marriage`,
    ` Enemies`,
    ` Siblings`
    ]
  
   useEffect(()=>{
    updateData(results[index],userId).then(response=>{
      setPath(imgSrc[index]);
      setValue(results[index]);
      setShow(true);
      localStorage.clear();
  })
  .catch(err=>{console.log(err)}) },[]);

  return (
      <div className='img_container'>
        {show?<img src={path} alt ="result will load here" className='result'></img>:null}
        {show?<h2>{value}</h2>:null}
        <div  className='home_link'>
          <Link to='/'>Click here to home page</Link>
        </div>
    </div>
    
  )
}

export default Result;

