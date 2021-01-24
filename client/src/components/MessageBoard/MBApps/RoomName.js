import React from "react";


function RoomName() {
  return (
    <>
      <label className="header">Select Room
        <select>
          <option id="chatAPI" value="API">API</option>
          <option id="chatHTMLCSS" value="HTMLCSS">HTML</option>
          <option id="chatJavaScript" value="JavaScript">Javascript</option>
          <option id="chatJQuery" value="JQuery">JQuery</option>
          <option id="chatMongoDB" value="MongoDB">MongoDB</option>
          <option id="chatMySQL" value="MySQL">MySQL</option>
          <option id="chatNodeJS" value="NodeJS">NodeJS</option>
          <option id="chatReact" value="React">React</option>
          <option id="chatSequelize" value="Sequelize">Sequelize</option>
        </select>
      </label>
    </>
  );
}

export default RoomName;