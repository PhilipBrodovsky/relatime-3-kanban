// path to css
import "./Button.css";

// size = sm | lg
// color = primary | secondary | danger

function Button({ children, color = "primary", size = "sm" }) {
	return <button className={`btn ${color} ${size}`}>{children}</button>;
}

export default Button;
