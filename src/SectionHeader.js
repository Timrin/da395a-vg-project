function SectionHeader(props) {

    const sectionTitle = props.sectionTitle;
    const sectionIcon = props.sectionIcon;
    const sectionIconAction = props.sectionIconAction ?? null;

    return (
        <div className="sectionHeader container">
            <div className={"sectionIcon" + (sectionIconAction ? " clickable" : "")} onClick={sectionIconAction}>
                <span className="material-icons-outlined">{sectionIcon}</span>
            </div>
            <h1 className="sectionTitle">{sectionTitle}</h1>
            <div>
                {props.children}
            </div>
        </div>
    );
}

export default SectionHeader;