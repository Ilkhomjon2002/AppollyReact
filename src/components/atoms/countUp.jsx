import { useEffect, useRef } from "react";
import { Text } from "@chakra-ui/react";
import { InView } from "react-intersection-observer";
export function CountUp({ count }) {
	const countupRef = useRef(null);
	console.log(count);
	let countUpAnim;

	async function initCountUp() {
		const countUpModule = await import("countup.js");
		countUpAnim = new countUpModule.CountUp(countupRef.current, count);
		if (!countUpAnim.error) {
			countUpAnim.start();
		} else {
			console.error(countUpAnim.error);
		}
	}

	return (
		<InView
			as="div"
			onChange={(inView, entry) => {
				if (inView) {
					initCountUp();
				}
			}}
		>
			<Text
				fontSize={"25px"}
				fontWeight={"600"}
				color={"white"}
				ref={countupRef}
			>
				0
			</Text>
		</InView>
	);
}
