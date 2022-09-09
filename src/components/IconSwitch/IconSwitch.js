import './IconSwitch.css'

const IconSwitch = (props) => {
    const { icon, onSwitch} = props;


    const renderBtn = (icon, onSwitch) => {
        return(
            <span
                    className="material-icons"
                    onClick={() => {
                       
                        onSwitch(icon)}}>{icon}
            </span>
        )
    }  
    return(
        <div className="icon-block">
            {renderBtn(icon, onSwitch)}
        </div>
            
    )

}

export default IconSwitch