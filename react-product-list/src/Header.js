
import './Header.css'


function Header(props) {
    const { title, Prolist, Catolist } = props

    return (
        <div className="Header">
            <h1 id="head">{title}</h1>
            <p> Product Count:{Prolist} </p>
            <p>Category Count:{Catolist} </p>


        </div>

    )
}

export default Header