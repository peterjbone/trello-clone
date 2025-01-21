import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
	return (
		<div className="fixed bottom-0 w-full  px-4 border-t bg-slate-100">
			<div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
				<Logo />
				<div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
					<Button size="sm" variant="outline" asChild>
						<Link href="/sign-in">Login</Link>
					</Button>
					<Button size="sm" asChild>
						<Link href="/sign-up">get tasktify for free</Link>
					</Button>
				</div>
			</div>
		</div>
	);
};
