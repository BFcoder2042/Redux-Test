import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { fetchedProducts } from "../../redux/actions";
import '../../styles/products.scss'

const Product = ({ syncProducts }) => {
    const dispatch = useDispatch()
    dispatch(fetchedProducts())
    let obj = {}
    syncProducts.forEach(el => [obj[el.type] = el])
    console.log(obj);
    return (
        <div className="products">
            {Object.keys(obj).length != 0 &&
                <div className='products_container'>
                    <div className="products--technics--services--accessories">
                        <div className='products--technics--services'>
                            <div className='products--technics short_item' style={{ background: `url(${obj.technics.image})` }}><span>{obj.technics.title}</span></div>
                            <div className='products--services short_item' style={{ background: `url(${obj.services.image})` }}><span>{obj.services.title}</span></div>
                        </div>
                        <div className='products--accessories long_item' style={{ background: `url(${obj.accessories.image})` }}><span>{obj.accessories.title}</span></div>
                    </div>
                    <div className="products--games" style={{ background: `url(${obj.games.image})` }}><span>{obj.games.title}</span></div>
                </div>
            }

        </div>
    )
}

const mapStateToProps = state => {
    return {
        syncProducts: state.products.fetchedProducts
    }
}

export default connect(mapStateToProps, null)(Product)