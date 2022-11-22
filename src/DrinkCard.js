import { Accordion, Button, Card, ListGroup } from "react-bootstrap";
import { ACTION_TYPES } from "./DrinksReducer";

function DrinkCard(props) {

    let drink = props.drink;

    return (
        <Card style={{ height: "600px", overflow: "scroll", borderRadius: "20px", border: "none", borderRadius: "20px", boxShadow: "0px 4px 20px 0px rgb(0 0 0 / 50%)", textAlign: "left", ...props.style }}>

            {
                    drink.pinned ? 
                    <div className="sectionIcon" onClick={() => { props.pinnedDispatch({ type: ACTION_TYPES.REMOVE_DRINK, payload: drink }) }} style={{ position: "absolute", top: "10px", right: "10px", backgroundColor: "#000", color: "#fff", boxShadow: "0px 4px 4px 0px rgb(0 0 0 / 50%)" }}>
                        <span className="material-icons">push_pin</span>
                    </div>
                    :
                    <div className="sectionIcon" onClick={() => { props.pinnedDispatch({ type: ACTION_TYPES.ADD_DRINK, payload: drink }) }} style={{ position: "absolute", top: "10px", right: "10px", backgroundColor: "#000", color: "#fff", boxShadow: "0px 4px 4px 0px rgb(0 0 0 / 50%)" }}>
                        <span className="material-icons-outlined">push_pin</span>
                    </div>
            }

            <Card.Img variant="top" src={drink.imageLink} style={{ height: "250px", objectFit: "cover", objectPosition: "top" }} />

            <Card.Body style={{ flex: "inherit" }}>
                <Card.Title>{drink.name}</Card.Title>
                <Card.Text>{drink.alcoholic} • {drink.type}</Card.Text>
            </Card.Body>

            <Accordion flush style={{ borderTop: "1px solid #dee2e6", borderBottom: "1px solid #dee2e6" }}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <span className="material-symbols-outlined" style={{ paddingRight: "var(--bs-accordion-btn-padding-x)" }}>liquor</span>
                        Ingredients
                    </Accordion.Header>
                    <Accordion.Body>
                        <ListGroup variant="flush">
                            {
                                drink.ingredients.map((ingredient, index) => {
                                    return (<ListGroup.Item key={index}>{ingredient.amount} {ingredient.name}</ListGroup.Item>);
                                })
                            }
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <span className="material-symbols-outlined" style={{ paddingRight: "var(--bs-accordion-btn-padding-x)" }}>menu_book</span>
                        Instructions
                    </Accordion.Header>
                    <Accordion.Body>
                        {drink.instructions}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </Card>
    );
}

export default DrinkCard;