import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import 'tw-elements';
import Item from './Item';
import uri from ".";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    document.title = `Werkplekkie | CleanAir`;
  }, []);

  const fetchData = () => {
    fetch(uri+"/classrooms/get")
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.log('error'));
  }

  useEffect(() => {
    fetchData();
  }, []); 

  return (
    <div className="App">
      <header className="App-header bg-white flex flex-row items-center px-4 md:px-8 justify-between drop-shadow-md">
        <Link to="/"><h1 className='text-4xl md:text-5xl text-emerald-900 font-normal leading-normal py-4 mt-0 mb-2 text-center'>Werkplekkie</h1></Link>
        <span className="text-emerald-900 text-lg text-right md:text-xl">Ingelogd als Ali (0949886)</span>
      </header>
      <section className='h-full w-full bg-stone-300 m-auto py-8'>
        <div className='m-4 md:w-4/5 lg:w-5/6 xl:w-2/3 md:mx-auto grid gap-8 accordion' id='accordionList'>
          {data && data.map((element, index)=> (
            <Item key={index} classroom_id={element.room_id} classroom={element.name} index={index+1} location={element.location_name} description={element.description} img={process.env.PUBLIC_URL+'/img/'+element.image} seats={element.total_seats} score={element.climate_score} temp={element.temperature} co2={element.co2} humidity={element.humidity} sound={element.noise} particles={element.particles}></Item>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
