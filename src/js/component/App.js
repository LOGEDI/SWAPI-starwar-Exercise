import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";

function App () {
    const [people,setPeople] = useState (['']);
    const [planets,setPlanets] = useState (['']);
    useEffect(()=>{
     async function fetchePeople () {
     let res = await fetch ('https://www.swapi.tech/api/people1/?format=json');
     let data = await res.json();
     setPeople(data.results);
     }
     async function fetchePlanets () {
        let res = await fetch ('https://www.swapi.tech/api/planets/?format=json');
        let data =await res.json();
        setPlanets(data.results);
        }
        fetchePeople();
        fetchePlanets();
    },[])
   return (
    <div className="App">
        hello world!
    </div>
    );
}

export default App;