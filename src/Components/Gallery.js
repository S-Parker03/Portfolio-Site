import React from "react";

export default function Gallery({data}){
    return(
        <section className="gallery">
        <ul>
          { data.map((item) => (
            <li key = {item.id}>
                <img
                    alt={item.name}
                    src={item.imageURL}
                />
                <h2 className="subtitle">{item.name}</h2>
                <p className="body">{item.description}</p>
            </li>
          ))}
        </ul>
        </section>
    );
}