const IconSwitch = (props) => {
    const { icon, onSwitch} = props;


    const renderBtn = (icon, onSwitch) => {
        return(
            <button
                    className={`btn-k ${icon}`}
                    onClick={() => {
                       
                        onSwitch(icon)}}>
            </button>
        )
    }  
    return(
        <div>
            {renderBtn(icon, onSwitch)}
        </div>
            
    )

}

export default IconSwitch