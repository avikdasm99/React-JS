import { useState } from "react";

function Count_Vowel(props){
    const[sen,setsen]=useState('');
    const[vowel,setvowel]=useState(0);
    const[word,setword]=useState(0);

  const valupd=(e)=>{
    setsen(e.target.value);
  }

  const countWord=()=>{
    let l=sen.length;
    setword(sen.split(' ').length);
  }

  const countVowel=()=>{
    let res=sen.match(/[aeiou]/gi);
    setvowel(res.length);
  }
  return(
    <>
    Write a sentence <input type="text" onChange={valupd} name="sen"/>
    <br></br>
    <button onClick={countWord}>Word Count</button>
    <button onClick={countVowel}>Vowel Count</button>
    <h1>Total Word = {word}</h1>
    <h1>Total Vowel = {vowel}</h1>
    </>
  )
}

export default Count_Vowel;