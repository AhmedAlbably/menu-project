import { Col, Row } from "react-bootstrap"


const Title = () => {
  return (
    <div>
      <Row className="mt-3 mb-3">
        <Col sm='12' className="text-center justify-content-center">
          <div className="">
            <h2 className="text-success">قائمه المطعم</h2>
            <p className="underline"></p>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Title