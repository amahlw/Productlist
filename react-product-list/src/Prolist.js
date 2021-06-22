import data from './data'
import './Prolist.css'

function Prolist(props) {
    const { catSelect } = props
    return (
        <div className="Prolist">
            {data.filter(obj => obj.catSelect === catSelect).map(obj => {
                return (
                    <div>
                        <h2>{obj.name}</h2>
                        <p>{obj.description} </p>
                        <p>{obj.price} </p>
                        <small>Category:{obj.category} Units:{obj.units} </small>
                    </div>
                )
            })}
        </div>
    )
}

export default Prolist