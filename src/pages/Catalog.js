import React, { Component } from "react"
import { withRouter } from 'react-router-dom';
import { SideBarFilters } from "../components/Client/SideBarFilters";
import '../styles/sideBarFilters.scss'
{/* <div className='2'>{this.props.match.params.category}</div> */ }

class Catalog extends Component {
    render() {
        const category = this.props.match.params.category
        return (
            <React.Fragment>
                <SideBarFilters category={category}></SideBarFilters>
            </React.Fragment>
        )
    }
}

export default withRouter(Catalog)