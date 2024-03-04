import React from "react";

export default function Gallery({data}){
    return(
        <div className="gallery" overflow = "scroll">
          {( data.map((item) => (
            <div className="galleryItem" key = {item.id}>
                <img
                    alt={item.name}
                    src={item.image}
                />
                <h2 className="subtitle">{item.name}</h2>
                <p className="body">{item.description}</p>
            </div>
          )))}
        </div>
    );
}