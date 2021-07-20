import React from "react";
import {Link} from 'react-router-dom'
const Card = ({ data }) => {
  return (
    <article>
      <div className="row mt-md-2 mt-2 g-4">
        {data ? (
          data?.map((p) => (
            <div className="col-md-auto col-auto mx-md-0 mx-auto " key={p.id}>
              <section className="card shadow-lg p-2" style={{width:'15em'}}>
                <div className="card-header">
                  <h4 className="text-center text-secondary">{p.name}</h4>
                </div>
                <div className="card-body">
                  <img src={p.image} alt="" className="img-thumbnail mb-3" />
                  <h4
                    className={
                      p.status === "Alive" ? `text-success` : `text-danger`
                    }
                  >
                    <span className="text-dark">State: </span>{p.status}
                  </h4>
                </div>
                <div className="card-footer">
                  <Link
                    to={"/profile/"+p.id}
                    className="btn btn-sm btn-outline-primary d-block mx-auto "
                  >
                    Más información
                  </Link>
                </div>
              </section>
            </div>
          ))
        ) : (
          <div className="d-flex  mt-5 justify-content-center">
            <div
              className="spinner-border"
              style={{"width": "8rem", "height": "8rem"}}
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default Card;
