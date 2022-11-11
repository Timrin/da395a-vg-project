function FilterToggle(props) {
    return (
        <>
            <input type="checkbox" id={props.id} className="checkbox" onChange={props.toggleCallback} checked={props.checked}></input>
            <label htmlFor={props.id} className="toggle">
                {props.filter}
            </label>
        </>
    );
}

export default FilterToggle;