

import React from "react";
import galleryImages from "./galleryImages";
import Masonry, {responsiveMasonry} from "react-responsive-masonry"

const MasonryImagesGallery = () => {
    return(
        <responsiveMasonry columnsCountBreakPoints ={{ 350: 1, 768: 3, 992: 4 }}>
            <Masonry gutter = "1rem">
                {galleryImages.map((item, index) => (
                    <img
                    className="masonry_img"
                    src={item}
                    key={index}
                    alt=""
                    style={{width: '100%', display: 'block', borderRadius:'10px'}}
                    />               
                )) }
            </Masonry>
        </responsiveMasonry>
    );
};

export default MasonryImagesGallery;