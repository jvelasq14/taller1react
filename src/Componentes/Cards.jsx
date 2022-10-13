import React from 'react'
const Cards = ({ pokemon, loading,infoPokemon}) => {
  return (
    <div>
          {
            loading ? <h1>Loading...</h1> :
                pokemon.map((item) => {
                    return (
                        <>
                        <div className='row'>
                          <div className='col mb-2 ' >
                          <div className='card'  key={item.id} onClick={()=>infoPokemon(item)}>
                            <img src={item.sprites.front_default} height="250px" width="100px" className='card-img-top' />
                              <div className='card-body'>
                                <ul className="list-group list-group-flush">
                                  <li className="list-group-item">ID: {item.id}</li>
                                  <li className="list-group-item">NOMBRE: {item.name}</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                          
                        </>
                    )
                })
        }
    </div>
  )
}

export default Cards