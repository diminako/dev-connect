import React from "react";


function RoomName() {
  return (
    <>
      <div className="grid-container chat-box">
        <div className="grid-x grid-padding-x">
          <div className="small-3 cell"></div>
          <div className="small-6 cell">
            <div className="callout">
              <h5 className="text-center header">Current Room</h5>
              <label className="header">Select Room
                <select>
                      <option id="chatAPI" value="API">API</option>
                      <option id="chatAJAX" value="AJAX">AJAX</option>
                      <option id="chatCSS" value="CSS">CSS</option>
                      <option id="chatHTML" value="HTML">HTML</option>
                      <option id="chatJava" value="Java">Java</option>
                      <option id="chatJavaScript" value="JavaScript">Javascript</option>
                      <option id="chatJQuery" value="JQuery">JQuery</option>
                      <option id="chatMongoDB" value="MongoDB">MongoDB</option>
                      <option id="chatMySQL" value="MySQL">MySQL</option>
                      <option id="chatNodeJS" value="NodeJS">NodeJS</option>
                      <option id="chatPython" value="Python">Python</option>
                      <option id="chatReact" value="React">React</option>
                      <option id="chatSequelize" value="Sequelize">Sequelize</option>
              </select>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RoomName;