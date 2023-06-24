import "bpk-stylesheets/base";
import "bpk-stylesheets/base.css";
import "bpk-stylesheets/font";
import "bpk-stylesheets/font.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
