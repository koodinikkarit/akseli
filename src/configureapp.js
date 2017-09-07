import express from "express";
import bodyParser from "body-parser";
import session from "express-session";

export default app => {
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	app.use(
		session(
			{ 
				secret: "makkaraperunat",
				resave: false,
				saveUninitialized: false,
				cookie: { 
					maxAge: 60000000,
					secure: false
				}
			}
		)
	);
	app.use("/static", express.static("public"));
};