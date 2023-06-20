import React, { useEffect, useState } from 'react';
import './result.css';
import { updateData } from '../Apis/Api';
import { Link } from 'react-router-dom';


const Result = () => {

  const[show,setShow]=useState(false);
  const [path,setPath]=useState('');
  const [value,setValue]=useState('');


  const result=JSON.parse(localStorage.getItem('result'));
  const userId=localStorage.getItem('id');

  const flames=['f','l','a','m','e','s'];
  const index=flames.indexOf(result);
  const imgSrc=[
    "https://images.pexels.com/photos/2738167/pexels-photo-2738167.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2494701/pexels-photo-2494701.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/10362063/pexels-photo-10362063.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://thumbs.gfycat.com/CloudyAmazingGangesdolphin-size_restricted.gif",
    "https://images.pexels.com/photos/220413/pexels-photo-220413.jpeg?auto=compress&cs=tinysrgb&w=600"
  ];
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

