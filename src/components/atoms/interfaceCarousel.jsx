import { Box, Image, Button, IconButton } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { DeviceFrameset } from "react-device-frameset";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Image2 from "../../assets/images/featuresImage2.png";
import Image3 from "../../assets/images/featuresImage3.png";
import Image4 from "../../assets/images/featuresImage4.png";
import Image5 from "../../assets/images/featuresImage5.png";
import { useSwiper } from "swiper/react";
import "react-device-frameset/styles/marvel-devices.min.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import { useWindowResizer } from "../../useWindowResizer";
const images = [Image2, Image3, Image4, Image5, Image2, Image3, Image4, Image5];
const SwiperButton = ({ type, children }) => {
	const swiper = useSwiper();
	const move = () => {
		if (type == "next") {
			swiper.slideNext();
		} else {
			swiper.slidePrev();
		}
	};
	return (
		<Button
			pos={"absolute"}
			top={"50%"}
			right={type == "next" ? "0%" : ""}
			left={type == "prev" ? "0%" : ""}
			zIndex={999}
			_hover={{
				opacity: "50%",
			}}
			borderRadius={"50%"}
			w={"50px"}
			background={"primary.900"}
			height={"50px"}
			icon={children}
			onClick={move}
		>
			{children}
		</Button>
	);
};
const InterfaceCarousel = () => {
	const size = useWindowResizer();

	const pagination = {
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + "</span>";
		},
	};
	return (
		<>
			<Box maxH={"660px"} data-aos="zoom-in" pos={"relative"}>
				<Swiper
					autoplay
					effect={"coverflow"}
					grabCursor={true}
					centeredSlides={true}
					loop={true}
					slidesPerView={size.width > 1400 ? "4" : "3"}
					coverflowEffect={{
						rotate: 0,
						stretch: 0,
						depth: 70,
						modifier: 3,
						slideShadows: false,
						stretch: 0,
					}}
					pagination={pagination}
					modules={[EffectCoverflow, Pagination, Navigation]}
					height={"620px"}
					navigation={{
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev",
						clickable: true,
					}}
				>
					<SwiperButton type="prev">
						{" "}
						<ChevronLeft color="white" />
					</SwiperButton>
					<SwiperButton type="next">
						{" "}
						<ChevronRight color="white" />
					</SwiperButton>
					{images.map((image, i) => {
						return (
							<SwiperSlide key={i}>
								{({ isActive }) => {
									return isActive ? (
										// <DeviceFrameset device="iPhone X" color="black">
										<Image
											borderRadius={"40px"}
											src={image}
											objectFit={"contain"}
											alt="slide 1"
											w={"100%"}
										/>
									) : (
										//</DeviceFrameset>
										<Image
											objectFit={"contain"}
											borderRadius={"40px"}
											w={"100%"}
											src={image}
											alt="slide 1"
										/>
									);
								}}
							</SwiperSlide>
						);
					})}
				</Swiper>
			</Box>
		</>
	);
};

export { InterfaceCarousel };
