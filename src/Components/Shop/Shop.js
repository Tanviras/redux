import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux2/Actions/cartActions';
import Product from '../Product/Product';

const Shop = (props) => {//app.js er moddhe jekhane <Shop> ke daka hoisilo,sekhane kono props deya hoy ni. tobou se props show kortese. Ei kajtai koreche redux+ react-redux
    // console.log(props);
    const {products}=props;
    return (
        <div>
            <h2>This is Shop</h2>
            {
                products.map(pd=><Product 
                                  product={pd} 
                                  key={pd.id} 
                                  addToCart={addToCart}>

                                  </Product>)
            }
        </div>
    );
};



//connecting components
//documentation: https://react-redux.js.org/introduction/basic-tutorial#connecting-the-components
const mapStateToProps=state=>{
      return{
          products: state.products
      }
}

const mapDispatchToProps ={
    addToCart: addToCart,
}

// connect(mapStateToProps,mapDispatchToProps)(Shop);

export default connect(mapStateToProps,mapDispatchToProps)(Shop);