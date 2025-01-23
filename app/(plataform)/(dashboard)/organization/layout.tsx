const OrganizationLayout = ({ children }: { children: React.ReactNode }) => {
	//*************************** COMPONENTE
	return (
		<main className="pt-20 md:pt-24 px-4 max-w-6xl 2xl:max-w-screen-xl mx-auto">
			<div>{children}</div>
		</main>
	);
};

export default OrganizationLayout;
