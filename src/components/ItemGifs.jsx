import React from 'react'

export const ItemGifs = ({ item }) => {
    return (
        <div className="col-12 col-sm-6 col-md-4">
            {/* tarjeta */}
            <div className="card m-3 shadow">
                <img src={item.images.downsized_medium.url} className="card-img-top" alt={item} />
                <div className="card-body">
                    <p className="card-text text-dark">{item.title}</p>
                </div>
            </div>
        </div>
    )
}
