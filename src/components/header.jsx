import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { change_color } from "../redux/slice/colorSlice";
import "./style.css";

const Aside1 = () => {
  const validColors = [
    "aliceblue",
    "antiquewhite",
    "aqua",
    "aquamarine",
    "azure",
    "beige",
    "bisque",
    "black",
    "blanchedalmond",
    "blue",
    "blueviolet",
    "brown",
    "burlywood",
    "cadetblue",
    "chartreuse",
    "chocolate",
    "coral",
    "cornflowerblue",
    "cornsilk",
    "crimson",
    "cyan",
    "darkblue",
    "darkcyan",
    "darkgoldenrod",
    "darkgray",
    "darkgreen",
    "darkkhaki",
    "darkmagenta",
    "darkolivegreen",
    "darkorange",
    "darkorchid",
    "darkred",
    "darksalmon",
    "darkseagreen",
    "darkslateblue",
    "darkslategray",
    "darkturquoise",
    "darkviolet",
    "deeppink",
    "deepskyblue",
    "dimgray",
    "dodgerblue",
    "firebrick",
    "floralwhite",
    "forestgreen",
    "fuchsia",
    "gainsboro",
    "ghostwhite",
    "gold",
    "goldenrod",
    "grey",
    "gray",
    "green",
    "greenyellow",
    "honeydew",
    "hotpink",
    "indianred",
    "indigo",
    "ivory",
    "khaki",
    "lavender",
    "lavenderblush",
    "lawngreen",
    "lemonchiffon",
    "lightblue",
    "lightcoral",
    "lightcyan",
    "lightgoldenrodyellow",
    "lightgray",
    "lightgreen",
    "lightpink",
    "lightsalmon",
    "lightseagreen",
    "lightskyblue",
    "lightslategray",
    "lightsteelblue",
    "lightyellow",
    "lime",
    "limegreen",
    "linen",
    "magenta",
    "maroon",
    "mediumaquamarine",
    "mediumblue",
    "mediumorchid",
    "mediumpurple",
    "mediumseagreen",
    "mediumslateblue",
    "mediumspringgreen",
    "mediumturquoise",
    "mediumvioletred",
    "midnightblue",
    "mintcream",
    "mistyrose",
    "moccasin",
    "navajowhite",
    "navy",
    "oldlace",
    "olive",
    "olivedrab",
    "orange",
    "orangered",
    "orchid",
    "palegoldenrod",
    "palegreen",
    "paleturquoise",
    "palevioletred",
    "papayawhip",
    "peachpuff",
    "peru",
    "pink",
    "plum",
    "powderblue",
    "purple",
    "red",
    "rosybrown",
    "royalblue",
    "saddlebrown",
    "salmon",
    "sandybrown",
    "seagreen",
    "seashell",
    "sienna",
    "silver",
    "skyblue",
    "slateblue",
    "slategray",
    "snow",
    "springgreen",
    "steelblue",
    "tan",
    "teal",
    "thistle",
    "tomato",
    "turquoise",
    "violet",
    "wheat",
    "white",
    "whitesmoke",
    "yellow",
    "yellowgreen",
  ];

  // Function to check if the color is valid
  const isValidColor = (color) => validColors.includes(color.toLowerCase());

  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const color = useSelector((state) => state.color.value);
  const [inputColor, setInputColor] = useState(color);
  const [suggestions, setSuggestions] = useState([]);
  const [colorr, setColorr] = useState("");

  useEffect(() => {
    const storedColor = localStorage.getItem("selectedColor");
    if (storedColor && isValidColor(storedColor)) {
      setInputColor(storedColor);
      dispatch(change_color({ color: storedColor }));
      setColorr(storedColor);
    }
  }, [dispatch]);

  // Handle changes to the input field
  const handleInputChange = (e) => {
    const input = e.target.value.toLowerCase();
    setError("");
    setInputColor(input);

    // Filter suggestions based on input
    if (input) {
      const filteredColors = validColors.filter((color) =>
        color.startsWith(input)
      );
      setSuggestions(filteredColors);
    } else {
      setSuggestions([]);
    }
  };

  // Handle color change
  const handleChangeColor = () => {
    if (isValidColor(inputColor)) {
      setColorr(inputColor);
      dispatch(change_color({ color: inputColor }));
      localStorage.setItem("selectedColor", inputColor);
      setSuggestions([]);
    } else if (inputColor.trim() === "") {
      setError("Please enter a color name 🙉");
    } else {
      setError(`Invalid color! 🤬 "${inputColor}" is not a recognized color.`);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (color) => {
    setInputColor(color);
    setSuggestions([]);
  };
  const count=useSelector((state)=>state.counter.value)

  return (
    <div>
      mashhood ak suuiiiiiii
      <div>
        <h1 style={{ color: color }}>Color Name is {colorr}</h1>
      </div>
      <input
        type="text"
        value={inputColor}
        onChange={handleInputChange}
        placeholder="Enter a color name"
        className="input"
      />
      <button className="btn" onClick={handleChangeColor}>
        Change Color
      </button>
      <button  style={{marginLeft:"8px",padding:"10px 15px"}}>{count}</button>

      {suggestions.length > 0 && (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {suggestions.map((color, index) => (
            <li
              key={index}
              style={{ cursor: "pointer", color: "#fff", marginBottom: "7px" }}
              onClick={() => handleSuggestionClick(color)}
            >
              {color}
            </li>
          ))}
        </ul>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}

      <hr />
    </div>
  );
};

export default Aside1;
