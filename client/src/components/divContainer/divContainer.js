import './divContainer.css'
const divCointainer = ({beers}) => {
    return (
    <div className="main">
            {beers && beers.length > 0 && beers.map((beerObj, index) => (
                <div
                key={beerObj.id} className='beer-container pb-2'>
                    <div className='image-container'>
                        <img src = {beerObj.image_url} 
                alt = 'img' 
                className='beer-image'></img>
                </div>
                <div className='item-container'>
                    <p className='text-bold'>{beerObj.name}</p>
                    <p>{beerObj.tagline}</p>
                    <p>First brewed: {beerObj.first_brewed}</p>
                    <p>Food pairing: {beerObj.food_pairing}</p>
                    <p className='text-italic'>Description: {beerObj.description}</p>
                </div>         
                </div>
            ))}
    </div>
    )
}

export default divCointainer;