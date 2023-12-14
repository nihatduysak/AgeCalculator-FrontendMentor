import { useState, useEffect } from "react"
import BirthInput from "./assets/components/BirthInput"
import Result from "./assets/components/Result"

export default function App() {
    const [day, setDay] = useState(0)
    const [month, setMonth] = useState(0)
    const [year, setYear] = useState(0)
    const [birthTime, setBirthTime] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)

    useEffect(() => {
        const today = new Date()
        setCurrentTime(today.getTime())
        const diffTime = currentTime - birthTime;
        setYear(Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365)))
        setMonth(Math.ceil((diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30.44)))
        setDay(Math.floor((diffTime % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24)))
    }, [birthTime])

    console.log(day, month, year);

    return (
        <div className="container">
            <div className="calculator">
                <BirthInput setBirthTime={setBirthTime}  day={day} setDay={setDay} month={month} setMonth={setMonth} year={year} setYear={setYear} />
                <Result birthTime={birthTime} setCurrentTime={setCurrentTime} day={day} month={month} year={year}/>
            </div>
        </div>
    )
}