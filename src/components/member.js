import React from "react";

function Member() {
  const array = [1, 2, 3];
  const people = [
    {
      name: "john de",
      position: "Web developer",
      about:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores dicta animi velit voluptates repellat quis saepe, atque laborum iusto, necessitatibus quia accusantium praesentium omnis eveniet facere veniam quidem, maiores neque.",
    },
    {
      name: "mark jugler",
      position: "Web developer",
      about:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores dicta animi velit voluptates repellat quis saepe, atque laborum iusto, necessitatibus quia accusantium praesentium omnis eveniet facere veniam quidem, maiores neque.",
    },
    {
      name: "jessica ",
      position: "Web developer",
      about:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores dicta animi velit voluptates repellat quis saepe, atque laborum iusto, necessitatibus quia accusantium praesentium omnis eveniet facere veniam quidem, maiores neque.",
    },
  ];
  // content = ["hello this is vinay ","hello this is vishal","hello this is me"]
  return (
    <div id="member">
      <div className="main-wrapper">
        <h1 className="sub-title1">
          Unveiling Excellence: Meet Our Dedicated Society Team Members
        </h1>
        <div className="wrapper">
          {array.map((ele, index) => (
            <div className="singlecard">
              <div
                className={`front ${index === 0 ? "front1" : ""}  ${
                  index === 1 ? "front2" : ""
                } ${index === 2 ? "front3" : ""} `}
              >
                {/* eslint-disable-next-line */}
                {/* <img src="man.jpg" /> */}
              </div>
              <div className="back">
                <div className="content1">
                  <h2>{people[index]?.name}</h2>
                  <br />
                  <h4>{people[index]?.position}</h4>
                  <br />
                  <p>{people[index]?.about}</p>
                  <p className="social">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-square-instagram"></i>
                    <i class="fa-brands fa-twitter"></i>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Member;
