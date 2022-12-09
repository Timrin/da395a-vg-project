import { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { getNewSuggestions } from "./ApiUtility";
import DrinkCard from "./DrinkCard";
import { PinnedDrinkContext } from "./PinnedDrinkContext";
import SectionHeader from "./SectionHeader";
import { getPinnedSuggestions, readSetting, writeSetting } from "./StorageUtility";

function useToggleMode(onPinned, onRandom) {
    const [suggestPinned, setSuggestPinned] = useState(()=>{return readSetting('suggestPinned')});

    function toggler() {
        const nextSuggestPinned = !suggestPinned;
        setSuggestPinned(nextSuggestPinned);
        
        writeSetting('suggestPinned', nextSuggestPinned);

        if(nextSuggestPinned) {
            onPinned();
        } else {
            onRandom();
        }
    }

    return [suggestPinned, toggler]
}

function SuggestionSection(props) {

    const [drinks, setDrinks] = useState([]);

    let pinnedDrinks = useContext(PinnedDrinkContext).state;

    const [suggestPinned, suggestPinnedToggler] = useToggleMode(getRandomPinnedSuggestions, ()=>{getNewSuggestions(setDrinks)})

    function getRandomPinnedSuggestions(amount = 3) {
        amount = amount > pinnedDrinks.length ? pinnedDrinks.length : amount; //amount can't be greater than available selection

        let randomDrinks = [];
        let randomDrinkIndices = [];
        while (randomDrinkIndices.length < amount) {
            console.log("randomDrinkIndices lenght: " + randomDrinkIndices.length)
            let randomIndex = Math.floor(Math.random() * pinnedDrinks.length);
    
            if (randomDrinkIndices.indexOf(randomIndex) === -1) {
                randomDrinkIndices.push(randomIndex);
                randomDrinks.push(pinnedDrinks[randomIndex])
            }
        }
    
        setDrinks(randomDrinks);
    }

    useEffect(() => { 
        suggestPinned ? getRandomPinnedSuggestions() : getNewSuggestions(setDrinks);
    }, [])

    return (
        <div id='Section-Suggestion' className='section'>

            <SectionHeader sectionTitle="Suggestions" sectionIcon="view_carousel">
                <SectionHeader.QuickAction>
                    <label htmlFor="PinnedSuggestionsCheckbox" style={{marginRight: "10px"}}> Only Pinned</label>
                    <input type="checkbox" className="checkboxSwitch" id="PinnedSuggestionsCheckbox" value="SuggestPinned" onChange={suggestPinnedToggler} checked={suggestPinned}></input>
                </SectionHeader.QuickAction>
            </SectionHeader>

            <div className='sectionBody container'>
                <div className="suggestionWrapper" style={{ margin: "30px 0px" }}>
                    {
                        drinks?.map((e,index) => {
                            console.log(e);
                            return (
                                <DrinkCard key={e.id+""+index} drink={e}></DrinkCard>
                            );
                        })
                    }
                </div>

                <Button onClick={() => { suggestPinned ? getRandomPinnedSuggestions() : getNewSuggestions(setDrinks); }} style={{
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
                    <span className="material-symbols-outlined" style={{ paddingLeft: "3px" }}>refresh</span>
                </Button>

            </div>

        </div>
    );
}

export default SuggestionSection;