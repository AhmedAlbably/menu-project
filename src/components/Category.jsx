import { Button, Col, Row } from "react-bootstrap";

const Category = ({ filterByCategory, allCategory }) => {
  return (
    <div>
      <Row className="my-2 mb-5">
        <Col sm="12" className="d-flex justify-content-center">
          <div className="options">
            {
              allCategory.length > 0 ? (
                allCategory.map((category, index) => (
                  <Button key={index} className="mx-2" onClick={() => filterByCategory(category)}>
                    {category}
                  </Button>
                ))
              ) : (
                <h1>لا يوجد تصنيفات</h1>
              )
            }
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Category;
