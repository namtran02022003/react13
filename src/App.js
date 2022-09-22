import './App.css';


function App(){
    return (
        <div>
        <div className="header">
          <img src="https://www.w3schools.com/w3images/beach3.jpg" width="100%" />
          <div className="text-header">
            <h2 className="style-h2">
              <b>
                4 Good Reasons
                <br />
                For travelling with us
              </b>
            </h2>
          </div>
        </div>
        <div className="menu-float">
          <div className="menu-float-small">
            <div className="content-menu-float">
              <img src="https://www.w3schools.com/w3images/cellphone.jpg" width="100%" />
              <h2>Smart Vacation</h2>
              <p>Full vacation control from your cell phone.</p>
            </div>
          </div>
          <div className="menu-float-small">
            <div className="content-menu-float">
              <img src="https://www.w3schools.com/w3images/sealions.jpg" width="100%" />
              <h2>Super Offers</h2>
              <p>Up to 50% offers. Always 25% student offers.</p>
            </div>
          </div>
        </div>
        {/*end 1*/}
        <div className="menu-float">
          <div className="menu-float-small">
            <div className="content-menu-float">
              <img src="https://www.w3schools.com/w3images/truck.jpg" width="100%" />
              <h2>Car Rental Included</h2>
              <p>Wherever you travel our car rental is included.</p>
            </div>
          </div>
          <div className="menu-float-small">
            <div className="content-menu-float">
              <img src="https://www.w3schools.com/w3images/nowornever.jpg" width="100%" />
              <h2>Realize Your Dreams</h2>
              <p>Don't wait until it is to late.</p>
            </div>
          </div>
        </div>
      </div>
    )
}
export default App;