const { Fragment } = require("react");

function Comp() {
	return (
		<Fragment>
			<div>1</div>,<div>2</div>
		</Fragment>
	);

	return (
		<>
			<div>1</div>,<div>2</div>
		</>
	);
}
