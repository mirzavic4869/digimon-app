import { useEffect, useState } from "react";
import axios from "axios";
import DigiCard from "@/components/card";
import Header from "@/components/header";

export default function Home() {
	const [allDigimon, setAllDigimon] = useState(null);

	const getAllDigimon = async () => {
		try {
			const result = await axios.get(`https://digimon-api.vercel.app/api/digimon`);
			setAllDigimon(result.data);
			console.log(result.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getAllDigimon();
	}, []);
	return (
		<>
			<Header />
			<div className="p-8 md:p-16">
				<div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">{allDigimon && allDigimon.map(({ img, name, level }) => <DigiCard img={img} name={name} level={level} />)}</div>
			</div>
		</>
	);
}
