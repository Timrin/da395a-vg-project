import DrinkCard from "./DrinkCard";
import SectionHeader from "./SectionHeader";

function PinnedSection(props) {

    let savedDrinks = props.data;

    return (
        <div id='Section-Pinned' className='section'>
            <SectionHeader sectionTitle='Pinned' sectionIcon='push_pin'></SectionHeader>

            <div className='sectionBody container' style={{}}>
                <div style={{ display: "flex", flexDirection: "row", gap: "25px", overflow: "scroll", padding: "30px" }}>
                    {
                        savedDrinks?.map((e) => {
                            return (
                                <DrinkCard style={{ minWidth: "250px" }} drink={e}></DrinkCard>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default PinnedSection;