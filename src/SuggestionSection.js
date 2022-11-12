import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { getNewSuggestions } from "./ApiUtility";
import DrinkCard from "./DrinkCard";
import SectionHeader from "./SectionHeader";


function SuggestionSection(props) {

    const [drinks, setDrinks] = useState([]);

    useEffect(() => { getNewSuggestions(setDrinks) }, [])

    return (
        <div id='Section-Suggestion' className='section'>

            <SectionHeader sectionTitle="Suggestions" sectionIcon="view_carousel"></SectionHeader>

            <div className='sectionBody container'>
                <div className="suggestionWrapper" style={{ margin: "30px 0px" }}>
                    {

                        drinks?.map((e) => {
                            console.log(drinks);
                            return (
                                <DrinkCard drink={e}></DrinkCard>
                            );
                        })
                    }
                </div>

                <Button onClick={() => { getNewSuggestions(setDrinks) }} style={{
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
                    <span class="material-symbols-outlined" style={{paddingLeft: "3px"}}>refresh</span>
                </Button>

            </div>

        </div>
    );
}

export default SuggestionSection;