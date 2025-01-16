import React from "react";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
	//* COMPONENTE
	return (
		<div className="h-full bg-slate-100">
			{/* Navbar here */}
			<main className="pt-40 pb-20 bg-slate-100">{children}</main>
		</div>
	);
};

export default MarketingLayout;
