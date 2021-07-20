import React, { useState, useEffect, useCallback } from "react";

import { useParams, Link } from "react-router-dom";
import CardCharacteres from "../components/CardCharacteres";
const Profile = () => {
  const [personaje, setPersonaje] = useState(null);
  const [capitulos, setCapitulos] = useState([]);
  const { id } = useParams();

  const peticion = useCallback(async () => {
    const peti = await fetch("https://rickandmortyapi.com/api/character/" + id);
    const json = await peti.json();
    setPersonaje(json);
  }, [id]);

  useEffect(() => {
    peticion();
  }, [id, peticion]);

  const onClickCapitulos = () => {
    if(capitulos.length<=0){
      personaje.episode.map(async (e) => {
        const peticion = await fetch(e);
        await peticion
          .json()
          .then((res) => {
            setCapitulos((capitulos) => [...capitulos, res]);
          })
          .catch((err) => console.log(err));
      });
    }
  };

  return (
    <article className="container-fluid">
      <div className="row ">
        <div className="col-md-8 mx-auto col-12 mt-5">
          {personaje ? (
            <section
              className="card mb-3 shadow"
              style={{ maxWidth: "1000px" }}
            >
              <div className="row g-3">
                <>
                  <div className="col-md-4">
                    <img
                      src={personaje?.image}
                      className="img-fluid w-100"
                      alt="Foto personaje"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h4 className="card-title text-center text-warning">
                        {personaje.name}
                      </h4>
                      <p className="card-text">Genero: {personaje.gender}</p>
                      <p className="card-text">Especie: {personaje.species}</p>
                      <p className="card-text d-flex justify-content-between align-items-center">
                        Status: {personaje.status}
                        {personaje.status === "Alive" ? (
                          <span
                            className="mx-3 spinner-border text-success"
                            role="status"
                          >
                            <span className="visually-hidden">Loading...</span>
                          </span>
                        ) : (
                          <span
                            className="mx-3 spinner-border text-danger"
                            role="status"
                          >
                            <span className="visually-hidden">Loading...</span>
                          </span>
                        )}
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Created: {personaje.created}
                        </small>
                      </p>
                      <button
                        className="btn btn-secondary btn-sm d-block mt-5 mx-auto"
                        onClick={onClickCapitulos}
                      >
                        Click para ver los capitulos en los que participa
                      </button>
                    </div>
                  </div>
                </>
              </div>
            </section>
          ) : (
            <div className="d-flex mt-5 justify-content-center">
              <div
                className="spinner-border"
                style={{ width: "8rem", height: "8rem" }}
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <CardCharacteres capitulos={capitulos} />

      <Link
        to="/"
        className="btn btn-outline-warning d-block mx-auto w-md-25 w-50 my-5"
      >
        Volver a ver personajes
      </Link>
    </article>
  );
};

export default Profile;
