import axios from "axios";
import { useEffect, useState } from "react";

const useWindowResizer = () => {
	const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

	useEffect(() => {
		const screenWidth = window.innerWidth;
		const screenHeight = window.innerHeight;
		setWindowSize({ width: screenWidth, height: screenHeight });
	});

	return windowSize;
};

const useFetch = (url) => {
	const [data, setData] = useState();
	const [isLoading, setIsLoading] = useState();
	const [isError, setIsError] = useState();
	useEffect(() => {
		setIsLoading(true);

		axios
			.get(url)
			.then(
				(res) => {
					console.log(res);
					setData(res.data);
				},
				(err) => {
					setIsError(err);
				}
			)
			.finally(() => {
				setIsLoading(false);
			});
	}, []);

	return [data, isLoading, isError];
};

export { useWindowResizer, useFetch };
