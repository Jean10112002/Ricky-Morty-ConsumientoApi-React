import React from "react";

const Search = ({setSearch,search,searchPersonaje}) => {
    const OnChangeData=(e)=>{

        setSearch(e.target.value)
    }
  return (
    <div>
      <div className="row">
        <div className="col-md-4 col-12">
          <div className="input-group my-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search the personaje"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={OnChangeData}
              value={search}
            />
            <button className="btn btn-secondary mx-2 " id="basic-addon1" onClick={searchPersonaje}>
              Buscar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
