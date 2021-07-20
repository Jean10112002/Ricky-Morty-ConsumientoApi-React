import React from "react";

const CardCharacteres = ({ capitulos }) => {
  return (
    <div className="row">
      <div className="col-md-8 mx-auto col-12 mt-5">
        <section className="card mb-3 shadow " style={{ maxWidth: "1000px" }}>
          <div className="row g-3">
            <>
              <div className="col-md-10 col-10 mx-auto">
                <div className="card-body">
                  <div className="row g-3">
                    {capitulos.length > 0 &&
                      capitulos?.map((c, index) => (
                        <div className="col-md-4 col-8 mx-auto" key={index}>
                          <div className="card shadow border-info mb-3">
                            <div className="card-header text-warning"> {c.name} </div>
                            <div className="card-body text-secondary">
                              <h5 className="card-title"> {c.episode} </h5>
                              <p className="card-text">{c.air_date}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CardCharacteres;
