import { useContext, useState } from "react";
import DrinkCard from "./DrinkCard";
import { PinnedDrinkContext } from "./PinnedDrinkContext";
import SectionHeader from "./SectionHeader";

function PinnedSection(props) {

    const [searchTerm, setSearchTerm] = useState("");

    let pinnedDrinks = useContext(PinnedDrinkContext);

    function searchDrinks(searchTerm) {
        return pinnedDrinks.state?.filter((e) => {return e.name.toLowerCase().includes(searchTerm.toLowerCase())})
    }

    return (
        <div id='Section-Pinned' className='section'>
            <SectionHeader sectionTitle='Pinned' sectionIcon='push_pin'>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={
                        (e) => {
                            setSearchTerm(e.target.value);
                        }
                    }
                    style={{
                        '&:focusVisible': { outline: "none" },
                        outline: "none",
                        border: "none",
                        borderBottom: "1px solid #D9D9D9",
                        fontSize: "20px"
                    }}>
                </input>
            </SectionHeader>

            <div className='sectionBody container' style={{}}>
                <div style={{ display: "flex", flexDirection: "row", gap: "25px", overflow: "scroll", padding: "30px" }}>
                    {
                        searchDrinks(searchTerm).map((e) => {
                            return (
                                <DrinkCard key={e.id} style={{ minWidth: "250px" }} drink={e}></DrinkCard>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default PinnedSection;