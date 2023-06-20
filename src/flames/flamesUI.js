import { useState } from 'react';

import './flamesUI.css';
import flame from './logic';
import { Link } from 'react-router-dom';
import {sendData} from '../Apis/Api';


function FlamesUI() {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [loading,setLoading]=useState(false);
  const [showres,setShowres]=useState(false);

  
  const clearForm = () => {
    setName1('');
    setName2('');
  };

  const handleSubmit= (e)=>{
    e.preventDefault();
    setLoading(true);

    sendData(name1,name2).then(response=>{
      localStorage.setItem('id',response.data.id);
      const result=flame(name1,name2);
      localStorage.setItem('result',JSON.stringify(result));
      // localStorage.setItem('user',JSON.stringify(name1));
      // localStorage.setItem('partner',JSON.stringify(name2));
      setTimeout(()=>{ setLoading(false)},1500);
    })
    .catch(error=>console.log(error))

    setShowres(true);
  }

  

  return (
    <div className="container">
     {loading?<img src="https://media.tenor.com/axAeNjNIUBsAAAAC/spinner-loading.gif" alt='loading'></img>:null}
      <h2>Welcome to Flames</h2>
      <form id="myForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name1">Your name:</label>
          <input
            type="text"
            id="name1"
            name="myName"
            required
            value={name1}
            onChange={(e) => setName1(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name2">Your Partner name:</label>
          <input
            type="text"
            id="name2"
            name="mineName"
            required
            value={name2}
            onChange={(e) => setName2(e.target.value)}
          />
        </div>
        <div className='btn-container'>
          <button type="submit" className="btn" disabled={loading&&!showres}>Submit</button>
          <button type="button" className="btn" disabled={loading} onClick={clearForm}>Clear</button>
        </div>
        {loading?<h4>Calculating result....</h4>:null}
      </form>
      <br/>
     {showres&& !loading? <div className='res'><Link to='result'>click here to see result</Link></div>:null}
     </div>
  );
}

export default FlamesUI;
