import React, {useEffect, useState} from 'react'
import axios from 'axios'

function Getcountry() {    
const [newdata , setNewdata] = useState([])
const Getdata = async () =>{ 
    await axios.get(`https://api.covid19api.com/summary`)
    .then((res)=> {setNewdata(res.data.Countries)
    })
    .catch((err)=> console.log(err)) 

}
    useEffect(()=>{
        Getdata();
    },[])
    const [country, setCountry] = useState('')
const data1 = (

    newdata.filter((val) => {
        if(country === '' )
           return val
       else if( val.Country.toLowerCase().includes(country.toLowerCase()))
           return val;
        
       
    } ).map((key)=> {
            return(
                <tr>    
                    <td>{key.Country}</td>
                    <td>{key.TotalConfirmed}</td>
                    <td>{key.TotalConfirmed - key.TotalRecovered}</td>
                    <td>{key.TotalRecovered}</td>
                    <td>{key.TotalDeaths}</td>    
                </tr>
            )
        }))
    return (
        <>
        <div className="jumbotron text-center"><h1 className="text-primary">
            <span className="text-danger">Covid </span> 
            Stats Along All The Countries<br/>
            </h1>
        </div>
        <div className="row">
            <input type="text" 
                className ="form-control col-md-6 mt-2 ml-4 mb-1"
                value={country}
                onChange =  {(e)=> setCountry(e.target.value)}
                placeholder = "Search By Country Name "        
            />
        </div>
        <div className="row p-4">
        <table className=" text-center col-md-10 table table-dark table-bordered">
            <thead>
                <tr>
                    <th>
                        <button className = "btn btn-primary" >
                            Country
                        </button>
                    </th>
                    <th>
                        <button 
                            className = "btn btn-warning"
                           
                        >Confirmed</button>
                    </th>
                    <th><button className = "btn btn-info">Active</button></th>
                    <th><button className = "btn btn-success">Recovered</button></th>
                    <th><button className = "btn btn-danger">Death</button></th>
                </tr>
            </thead>
            <tbody>
                {data1}
            </tbody>
        </table>
        </div>
        </>
    )
}

export default Getcountry
