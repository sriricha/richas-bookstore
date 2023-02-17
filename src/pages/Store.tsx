import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import storeItems from "../data/items.json"
import '../font.css'

export function Store() {
    return (
        <>
        <div className="my-custom-font">
            <h1>Store</h1>
                <Row md={2} xs={1} lg={3} className = "g-3">
                    {Object.values(storeItems).map((item: any) => (
                        <Col key={item.id}>
                            <StoreItem {...item} />
                        </Col>
                    ))}
                </Row>
        </div>
        </>
    )
}