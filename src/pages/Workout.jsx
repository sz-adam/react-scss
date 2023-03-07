import '../styles/Workout.scss'
import React, { useState } from 'react';
const BeginnerData = require('../data/Beginner_training_plan.json')
const AdvancedData = require('../data/Advanced_training_plan.json')
export default function Workout() {

  const [currentDayBeginner, setCurrentDayBeginner] = useState(1);
  const [currentDayAdvanced, setCurrentDayAdvanced] = useState(1);


  const handleNextDayBeginner = () => {
    if (currentDayBeginner === BeginnerData.length) {
      setCurrentDayBeginner(1);
    } else {
      setCurrentDayBeginner(currentDayBeginner + 1);
    }

  }

  const handlePreviousDayBeginner = () => {
    if (currentDayBeginner === 1) {
      setCurrentDayBeginner(BeginnerData.length);
    } else {
      setCurrentDayBeginner(currentDayBeginner - 1);
    }
  }

  const handleNextDayAdvanced = () => {
    if (currentDayAdvanced === AdvancedData.length) {
      setCurrentDayAdvanced(1);
    } else {
      setCurrentDayAdvanced(currentDayAdvanced + 1);
    }
  }
  const handlePreviousDayAdvanced = () => {
    if (currentDayAdvanced === 1) {
      setCurrentDayAdvanced(AdvancedData.length);
    } else {
      setCurrentDayAdvanced(currentDayAdvanced - 1);
    }
  }

  return (

    <div className='tableData'>
        
        <p className='tableInfo'>Két darab edzéstervet mutatok , egy kezdőt és egy haladót, ezeket természetessen saját erőszintetek és tudásotok alapján változtathatjátok . </p>
        <table >
          <caption>Kezdő Edzésterv</caption>
          <thead>
            <tr className='tableAdress'>
              <th>Nap</th>
              <th>Név</th>
              <th>Gyakorlat</th>
              <th>Sorozat</th>
              <th>Ismétlés</th>
            </tr>
          </thead>
          <tbody>
            {BeginnerData[currentDayBeginner - 1].excercises.map((exercise, index) => (
              <tr key={index} className={(index % 2 === 1) ? 'color-row' : ''}>
                <td >{BeginnerData[currentDayBeginner - 1].day} </td>
                <td>{BeginnerData[currentDayBeginner - 1].dayName}</td>
                <td>{exercise.name}</td>
                <td>{exercise.series}</td>
                <td>{exercise.repeat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      
        <div className='tableButton'>
          <button onClick={handlePreviousDayBeginner}>Előző Nap</button>
          <button onClick={handleNextDayBeginner}>Következő nap</button>
        </div>

      

      {/**Advanced */}
   

        <table className='tables'>
          <caption> Haladó Edzésterv</caption>
          <thead>          
            <tr className='tableAdress'>
              <th>Nap</th>
              <th>Név</th>
              <th>Gyakorlat</th>
              <th>Sorozat</th>
              <th>Ismétlés</th>
            </tr>
          </thead>
          <tbody>
            {AdvancedData[currentDayAdvanced - 1].excercises.map((exercise, index) => (
              <tr key={index} className={(index % 2 === 1) ? 'color-row' : ''}>
                <td >{AdvancedData[currentDayAdvanced - 1].day} </td>
                <td>{AdvancedData[currentDayAdvanced - 1].dayName}</td>
                <td>{exercise.name}</td>
                <td>{exercise.series}</td>
                <td>{exercise.repeat}</td>
              </tr>
            ))}
          </tbody>
        </table>
       
        <div className='tableButton'>
          <button onClick={handlePreviousDayAdvanced}>Előző Nap</button>
          <button onClick={handleNextDayAdvanced}>Következő nap</button>
        </div>
      

    </div>
  );
}