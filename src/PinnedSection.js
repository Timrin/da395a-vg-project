import DrinkCard from "./DrinkCard";
import { data } from "./MockDrinkData";
import SectionHeader from "./SectionHeader";

function PinnedSection() {

    let savedDrinks = data.concat(data).concat(data);

    return (
        <div id='Section-Pinned' className='section'>
            <SectionHeader sectionTitle='Pinned' sectionIcon='push_pin'></SectionHeader>

            <div className='sectionBody container' style={{}}>
                <div style={{display: "flex", flexDirection: "row", gap: "25px", overflow: "scroll", padding: "30px"}}>
                    {
                        savedDrinks?.map((e) => {
                            return (
                                <DrinkCard style={{minWidth: "250px"}} drink={e}></DrinkCard>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default PinnedSection;