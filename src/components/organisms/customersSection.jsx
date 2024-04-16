import { Text, Box } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import { CustomerCard } from "../atoms/customerCard";
import CustomerImg from "../../assets/images/customer.jpeg";
import { SectionHeader } from "../atoms/sectionHeader";
const customers = [
	{
		name: "Ann Lubin",
		position: "Co-Founder",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.",
		imgSrc: CustomerImg,
	},
	{
		name: "Ann Lubin",
		position: "Co-Founder",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.",
		imgSrc: CustomerImg,
	},
	{
		name: "Ann Lubin",
		position: "Co-Founder",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.",
		imgSrc: CustomerImg,
	},
	{
		name: "Ann Lubin",
		position: "Co-Founder",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.",
		imgSrc: CustomerImg,
	},
	{
		name: "Ann Lubin",
		position: "Co-Founder",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.",
		imgSrc: CustomerImg,
	},
	{
		name: "Ann Lubin",
		position: "Co-Founder",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.",
		imgSrc: CustomerImg,
	},
];
const CustomersSection = () => {
	return (
		<Box py={"120px"}>
			<SectionHeader
				title={"Our Happy Customers"}
				colorMode={"black"}
				description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
					ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
					amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus
					tempor, ac nunc libero urna, feugiat.`}
			></SectionHeader>

			<Box
				pt="60px"
				data-aos="zoom-out-up"
				w={"100%"}
				display={{ base: "none", xl: "inline-block" }}
			>
				<Swiper
					style={{ width: "100%" }}
					effect={"coverflow"}
					grabCursor={true}
					centeredSlides={true}
					loop={true}
					slidesPerView={"3"}
					spaceBetween={0}
					initialSlide={0}
					coverflowEffect={{
						rotate: 0,
						depth: 150,
						modifier: 1.5,
						slideShadows: false,
						stretch: -10,
					}}
					pagination={true}
					modules={[EffectCoverflow, Pagination, Navigation]}
					height={"100%"}
					navigation={{
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev",
						clickable: true,
					}}
				>
					{customers.map((customer, i) => {
						return (
							<SwiperSlide style={{ width: "100%" }} key={i}>
								{" "}
								<CustomerCard
									name={customer.name}
									position={customer.position}
									description={customer.description}
									imgSrc={customer.imgSrc}
								></CustomerCard>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</Box>
			<Box
				pt="60px"
				data-aos="zoom-out-up"
				w={"100%"}
				display={{ base: "inline-block", xl: "none" }}
			>
				<Swiper
					style={{ width: "100%" }}
					// effect={"coverflow"}
					grabCursor={true}
					centeredSlides={true}
					loop={true}
					slidesPerView={"1"}
					spaceBetween={0}
					initialSlide={0}
					// coverflowEffect={{
					// 	rotate: 0,
					// 	depth: 0,
					// 	modifier: 0,
					// 	slideShadows: false,
					// 	stretch: 0,
					// }}
					pagination={true}
					modules={[EffectCoverflow, Pagination, Navigation]}
					height={"100%"}
					navigation={{
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev",
						clickable: true,
					}}
				>
					{customers.map((customer, i) => {
						return (
							<SwiperSlide style={{ width: "100%" }} key={i}>
								{" "}
								<CustomerCard
									name={customer.name}
									position={customer.position}
									description={customer.description}
									imgSrc={customer.imgSrc}
								></CustomerCard>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</Box>
		</Box>
	);
};

export { CustomersSection };
