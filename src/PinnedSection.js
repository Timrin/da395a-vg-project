import { useContext, useState } from "react";
import DrinkCard from "./DrinkCard";
import { PinnedDrinkContext } from "./PinnedDrinkContext";
import SectionHeader from "./SectionHeader";

function PinnedSection(props) {

    const [searchTerm, setSearchTerm] = useState("");

    let pinnedDrinks = useContext(PinnedDrinkContext);

    function searchDrinks(searchTerm) {
        return pinnedDrinks.state?.filter((e) => { return e.name.toLowerCase().includes(searchTerm.toLowerCase()) })
    }

    return (
        <div id='Section-Pinned' className='section'>
            <SectionHeader sectionTitle='Pinned' sectionIcon='push_pin'>
                <SectionHeader.Body>
                    <input
                        className="searchBar"
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={
                            (e) => {
                                setSearchTerm(e.target.value);
                            }
                        }>
                    </input>
                </SectionHeader.Body>
            </SectionHeader>

            <div className='sectionBody container'>
                <div className="pinnedWrapper">
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