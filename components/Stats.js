import useStats from "../utils/useStats.js"

function Stats() {
    const stats = useStats('http://covid19.mathdro.id/api/');
    if(!stats) return <p>Loading...</p>
    return (
    <div>
        <div className="statBox">
            <h3>Confirmed:</h3>
            <span>{stats.confirmed.value}</span>
        </div>
        <div className="statBox">
            <h3>Deaths:</h3>
            <span>{stats.deaths.value}</span>
        </div>
        <div className="statBox">
            <h3>Recovered:</h3>
            <span>{stats.recovered.value}</span>
        </div>
    </div>
    )
}

export default Stats