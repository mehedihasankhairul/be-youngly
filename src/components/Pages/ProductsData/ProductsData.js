import React from 'react';
import Products from '../Products/Products';



const ProductsData = () => {
    return (
        <div>
            <div className="col-md-3">
                {
                    Products.map(blog => <ProductsData />)
                }
            </div>
        </div>
    );
};

export default ProductsData;