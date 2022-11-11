import { Accordion, Button, Card, ListGroup } from "react-bootstrap";

function DrinkCard(props) {

    let drink = props.drink;

    return (
        <Card style={{ height: "600px", overflow: "scroll", borderRadius: "20px", border: "none", borderRadius: "20px", boxShadow: "0px 4px 20px 0px rgb(0 0 0 / 50%)", textAlign: "left" }}>

            <Card.Img variant="top" src={drink.imageLink} style={{ height: "250px", objectFit: "cover", objectPosition: "top" }} />

            <Card.Body style={{ flex: "inherit" }}>
                <Card.Title>{drink.name}</Card.Title>
                <Card.Text>{drink.alcoholic} • {drink.type}</Card.Text>
            </Card.Body>

            <ListGroup variant="flush">
                {
                    drink.ingredients.map((ingredient) => {
                        return (<ListGroup.Item>{ingredient.amount} {ingredient.name}</ListGroup.Item>);
                    })
                }
            </ListGroup>

            <Card.Body>
                {drink.instructions}
            </Card.Body>

        </Card>
    );
}

export default DrinkCard;