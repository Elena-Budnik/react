import { Grid, Typography } from '@mui/material'

import ProductsListItem from './ProductsListItem'
type Props = {}
function ProductsList({}: Props) {
    return (
        <>
            <Typography variant="h3" align="center" component="h2">
                ProductsList
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem
                        title="iphone 14 Pro"
                        description="This is iPhone 14 Pro"
                        type="phone"
                        capacity="512"
                        price={1200}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem
                        title="iphone 13 Pro"
                        description="This is iPhone 13 Pro"
                        type="phone"
                        capacity="256"
                        price={1000}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem
                        title="iphone 12 Pro"
                        description="This is iPhone 12 Pro"
                        type="phone"
                        capacity="128"
                        price={500}
                    />
                </Grid>
            </Grid>
        </>
    )
}
export default ProductsList
