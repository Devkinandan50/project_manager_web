import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import success from "../img/success.png";
import styles from "../style/emailverify.css";
// import { Fragment } from "react/cjs/react.production.min";
import ProjectContext from "../context/pro_jects/projectContext"


const EmailVerify = () => {
	const context = useContext(ProjectContext);

	// // context mese set_login function lekar aao
	const { host } = context;

	const [validUrl, setValidUrl] = useState(true);
	const param = useParams();

	useEffect(() => {
		const verifyEmailUrl = async () => {
			try {
				const response = await fetch(`${host}/api/auth/${param.id}/verify/${param.token}`, {
					method: 'PATCH',
					headers: {
						'Content-Type': 'application/json'
					}
				});
				const json = await response.json()
				if (json.success) {
					setValidUrl(true);
				}
				else {
					console.log(json.message)
					setValidUrl(false);
				}

			} catch (error) {
				console.log(error);
				setValidUrl(false);
			}
		};
		verifyEmailUrl();
	}, [param]);

	return (
		<>
			{validUrl ? (
				<div className="container text-center">
					<img src={success} alt="success_img" className={styles.success_img} />
					<h1>Email verified successfully</h1>
					<Link to="/login">
						<button className={styles.green_btnoflogin}>Login</button>
					</Link>
				</div>
			) : (
				<>
					<h1>404 Not Found</h1>
					<p> Invalid Link or link expires</p>
				</>
			)}
		</>
	);
};

export default EmailVerify;