import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductsListItem.scss'
type Props = {}
const ProductsListItem = (props: Props) => {
    return (
        <Card variant="outlined">
            <CardContent>
                <div className="product-title">iPhone 14 pro</div>
                <div className="product-desc">This iPhone 14 pro</div>
                <div className="product-title">Type: phone</div>
                <div className="product-title">Capacity: 256 Gb</div>
                <div className="product-price">1200 $</div>
            </CardContent>
            <CardActions className="product-btn-wrap">
                <Button variant="outlined">Add to cart</Button>
            </CardActions>
        </Card>
    )
}
export default ProductsListItem
