import React from "react";
import ReactDOMServer from "react-dom/server";
import Request from "request";
import PageFrame from "./js/PageFrame";

export default app => {
	app.post("/login", (req, res) => {
		Request.post("http://${process.env.AKSELI_PETRI_IP}:${process.env.AKSELI_PETRI_PORT}/login", {
			form: req.body
		}, (err, data) => {
			if (!err) {
				req.session.token = JSON.parse(data.body).token;
				req.session.save();
			}
		});
		res.redirect(302, "/");
	});

	if (process.env.AKSELI_PETRI_IP && process.env.AKSELI_PETRI_PORT) {
		console.log("petri env");
		app.use("/api", (req, res) => {
			Request.post(
				`http://${process.env.AKSELI_PETRI_IP}:${process.env.AKSELI_PETRI_PORT}/`,
				{
					headers: {
						"token": req.session.token
					},
					form: req.body
				},
				(err, data) => {
					if (err || !data) {
						console.log("500 service unavaivable");
						res.writeHead(500);
					} else {
						res.end(data.body);
					}
				}
			)
		});
	} else {
		app.use("/api", (req, res) => {
			console.log("500 service unavaivable");
			res.writeHead(500);
			res.end();
		});
	}

	app.use((req, res) => {
		res.status(200);
		res.send(`<!doctype html>\n${ReactDOMServer.renderToString(<PageFrame />)}`);
		res.end();
	});

	app.listen(process.env.AKSELI_PORT || 11111, () => {
		console.log("Serveri kuuntelee", process.env.AKSELI_PORT || 11111);
	});
}