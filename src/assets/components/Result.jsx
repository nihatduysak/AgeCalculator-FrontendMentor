export default function Result({ day, month, year, setCurrentTime}) {

    return (
        <div className="resultSection">
            <div className="calculateResult">
                <h3>
                    {
                        year <= 0 ? " - - " : year
                    }
                </h3>
                <h2>years</h2>
            </div>
            <div className="calculateResult">
                <h3>
                    {
                        month <= 0 ? " - - " : month
                    }
                </h3>
                <h2>months</h2>
            </div>
            <div className="calculateResult">
                <h3>
                    {
                        day <= 0 ? " - - " : day
                    }
                </h3>
                <h2>day</h2>
            </div>
        </div>
    )
}