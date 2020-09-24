import React from "react";
import "./Styles.css";

const Card = ({ user }) => {
  return (
    <div className="App">
      <div className="container1">
        <div className="row">
          <div className="col-md-12 mx-auto mt-1 col-md-9 mx-auto col-sm-6">
            <div className="card">
              <div className="card-block p-2">
                <div className="card-text ">
                  <p style={{"font-size":"20px"}}>{user.id}</p>
                  <p style={{"font-size":"15px"}}>
                    <i>{user.name}</i>
                  </p>
                  <br/>
                  <p style={{"font-size":"15px"}}>{user.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
