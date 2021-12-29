import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import MenuItem from "../menu-item/menu-item";
import './directory.scss'

const Directory = ({ sections }) => (
 
        <div className="directory-menu">
            {
            sections.map(({title, imageUrl, id, size, linkUrl}) =>(<MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>) )
            }

        </div>
);

/*
You can do this in 2 ways 
{
  this.state.sections.map(({ id, ...otherSectionProps }) => ( 
    <MenuItem key={id} {...otherSectionProps} />) )
}
*/


const mapStatetoProps = createStructuredSelector({
  sections: selectDirectorySections
})
export default connect(mapStatetoProps)(Directory);
