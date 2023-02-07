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
                    <ProductsListItem />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem />
                </Grid>
            </Grid>
        </>
    )
}
export default ProductsList
