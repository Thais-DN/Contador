

function Cronometro() {
  return (
    <div className='px-2 lg:container bg-white w-full h-60'>
        <div className="grid grid-cols-3">
            <p className="col-span-3 ">dias</p>
            <p className="col-span-1">horas</p>
            <p className="col-span-1">minutos</p>
            <p className="col-span-1">segundos</p>
        </div>
    </div>
  )
}

export default Cronometro