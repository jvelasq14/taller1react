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
                          <div className='col-6'>
                          <div className="card" key={item.id} onClick={()=>infoPokemon(item)}>
                            <img src={item.sprites.front_default} height="250px" width="100px" className='card-img-top' />
                              <div className='card-body'>
                                <ul>
                                  <li>{item.id}</li>
                                  <li>{item.name}</li>
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