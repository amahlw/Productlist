import { catsAndCounts } from './data'
import './Catolist.css'


function Catolist() {
    return (
        <div classname="Catolist">
            {catsAndCounts.map(obj => {
                return (
                    <button>
                        {obj.name}
                        <span> {obj.count}</span>
                    </button>
                )

            })}
        </div>
    )
}

export default Catolist