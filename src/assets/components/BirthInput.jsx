export default function BirthInput({ setDay, setMonth, setYear, setBirthTime }) {
    function handleSubmit(event) {
        event.preventDefault()
        const data = new FormData(event.target)
        const dataObj = Object.fromEntries(data)

        if(dataObj.day >= 1 && dataObj.day <= 31 && dataObj.month >= 1 && dataObj.month <= 12 && dataObj.year >= 1800 && dataObj.year <= 2023) {
            setBirthTime(new Date(dataObj.year, dataObj.month, dataObj.day).getTime())
        }

    }

    return (
        <div>
            <form className="Inputs" onSubmit={handleSubmit}>
                <div className="inputInfos">
                    <div className="inputInfo">
                        <p>DAY</p>
                        <input name="day" type="number" placeholder="DD" />
                    </div>
                    <div className="inputInfo">
                        <p>MONTH</p>
                        <input name="month" type="number" placeholder="MM" />
                    </div>
                    <div className="inputInfo">
                        <p>YEAR</p>
                        <input name="year" type="number" placeholder="YYYY" />
                    </div>
                </div>
                <div className="btn">
                    <button type="submit"><img src="/images/arrowdown.svg" alt="Calculate Button" /></button>
                </div>
            </form>
        </div>
    )
}