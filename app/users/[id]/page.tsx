import React from "react";

const IDpage = ({ params }: { params: { id: string } }) => {
	return (
		<div>
			<h2>IDpage</h2>
			<p>id: {params.id}</p>
		</div>
	);
};

export default IDpage;
