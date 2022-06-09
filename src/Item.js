
function Item(props) {
  return (
    <div className="Item">
        <div className='bg-stone-100 p-8 rounded-md'>
            <div className='grid grid-cols-2 gap-4'>
              <div className='w-full'>
                <img className='object-cover rounded-md' src={props.img}></img>
              </div>
              <div className='flex flex-col justify-between'>
                <div>
                  <h3 className='text-4xl font-normal leading-normal mt-0 mb-2'>Lokaal {props.classroom}</h3>
                  <span className='block text-2xl text-green-500'>{props.seats} plekken beschikbaar</span>
                  <span className='block text-2xl'>Klimaatscijfer: <span className='text-green-500'>{props.score}</span></span>
                </div>
                <div className=''>
                  <div>
                    <span className='font-bold'>Temp: </span><span>{props.temp} °C</span>
                  </div>
                  <div>
                    <span className='font-bold'>CO2: </span><span>{props.co2} PPM</span>
                  </div>
                  <div>
                    <span className='font-bold'>Luchtvochtigheid: </span><span>{props.humidity} %</span>
                  </div>
                  <div>
                    <span className='font-bold'>Fijnstof: </span><span>{props.particles} µg/m3</span>
                  </div>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                  <div>
                    <a className='block w-full rounded-md p-4 drop-shadow-md text-xl text-white text-center bg-gray-800' href='#'>Meer info</a>
                  </div>
                  <div>
                    <a className='block w-full rounded-md p-4 drop-shadow-md text-xl text-white text-center bg-green-800' href='#'>Reserveren</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  );
}

export default Item;