import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { getNewSuggestions } from "./ApiUtility";
import DrinkCard from "./DrinkCard";
import SectionHeader from "./SectionHeader";
import { getPinnedSuggestions } from "./StorageUtility";

function SuggestionSection(props) {

    const [drinks, setDrinks] = useState([]);
    const [suggestPinned, setSuggestPinned] = useState(false);

    useEffect(() => { 
        suggestPinned ? getPinnedSuggestions(setDrinks) : getNewSuggestions(setDrinks);
    }, [suggestPinned])

    return (
        <div id='Section-Suggestion' className='section'>

            <SectionHeader sectionTitle="Suggestions" sectionIcon="view_carousel">
                <label htmlFor="PinnedSuggestionsCheckbox" style={{marginRight: "10px"}}> Only Pinned</label>
                <input type="checkbox" className="checkboxSwitch" id="PinnedSuggestionsCheckbox" value="SuggestPinned" onChange={(e)=>{setSuggestPinned(e.target.checked)}}></input>
            </SectionHeader>

            <div className='sectionBody container'>
                <div className="suggestionWrapper" style={{ margin: "30px 0px" }}>
                    {
                        drinks?.map((e,index) => {
                            console.log(drinks);
                            return (
                                <DrinkCard key={e.id+""+index} drink={e}></DrinkCard>
                            );
                        })
                    }
                </div>

                <Button onClick={() => { suggestPinned ? getPinnedSuggestions(setDrinks) : getNewSuggestions(setDrinks) }} style={{
                    display: "flex",
                    color: "#fff",
                    fontWeight: "600",
                    backgroundColor: "#000",
                    border: "none",
                    borderRadius: "100px",
                    padding: "1rem 1.5rem",
                    margin: "auto",
                    marginBottom: "30px"
                }}>
                    New Suggestions
                    <span className="material-symbols-outlined" style={{paddingLeft: "3px"}}>refresh</span>
                </Button>

            </div>

        </div>
    );
}

export default SuggestionSection;