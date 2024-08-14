import { Card, Col, Row } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";

const ListItem = ({ item }) => {
  return (
    <div>
      <Row>
        <Zoom left>
          <div>
            {item.length > 0 ? (
              item.map((item) => (
                <Col sm="12" className="mb-3" key={item.id}>
                  <Card className="d-flex flex-row">
                    <Card.Img
                      variant="top"
                      src={item.img}
                      alt={item.name}
                      className="image"
                    />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                      <div className="price fs-3">{item.price} جنيه</div>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <h1 className="text-center"> لا يوجد طعام </h1>
            )}
          </div>
        </Zoom>
      </Row>
    </div>
  );
};

export default ListItem;
