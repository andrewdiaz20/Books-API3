function index (data){
    let placesFormatted = data.places.map((place) => {
        return(
            <div>
                <h2>
                <a href={`/places/${place.id}`}>
                {place.name}
                </a>
                </h2>
                <img src={place.pic}alt={place.name}></img>
            </div>
        )
    })
    return(
        <def>
            <main>
                <h1>PLACES INDEX PAGE</h1>
                {placesFormatted}
            </main>
        </def>
    )
}
module.exports = index