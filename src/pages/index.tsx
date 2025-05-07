import BlogArea from '@/components/Homepage/BlogArea'
import Organizations from '@/components/Homepage/Organizations'
import Projects from '@/components/Homepage/Projects'
import ScheduleTour from '@/components/Homepage/ScheduleTour'
import SustainableCity from '@/components/Homepage/SustainableCity'
import TourSection from '@/components/Homepage/TourSection'
import { ArrowCircleLeft, ArrowCircleRight, ArrowIcon, SlideDown } from '@/components/SVGs/SVGicons'
import Head from 'next/head'
import Image from 'next/image'
import images from '../../public/images'
import styles from '../styles/Home.module.scss'
import { Link as ScrollLink } from 'react-scroll'
import AOS from 'aos';
import { useEffect, useRef, useState } from 'react'
import useResponsive from '@/hooks/useResponsiveness'
import PopupContainer from '@/components/Homepage/PopupContainer'
import { heroSectionCarousel } from '@/components/Homepage/HeroSectionImages'

export default function Home() {

	//#region hooks

	const onMobile = useResponsive();

	//#endregion

	//#region state

	const carouselRef = useRef<HTMLDivElement>(null);

	const [currentlyActiveIndex, setCurrentlyActiveIndex] = useState(0);

	const [maxReached, setMaxReached] = useState(false);

	const [backgroundImage, setBackgroundImage] = useState(images.beautifulCityChina1);

	const [isPopupVisible, setIsPopupVisible] = useState(false);

	//#endregion

	//#region function

	function moveCardsLeft() {

		if (currentlyActiveIndex == 5 && carouselRef.current) {
			carouselRef.current.scroll({
				left: 0,
				behavior: 'smooth',
			});
			setCurrentlyActiveIndex(0);

			return;
		}
		if (carouselRef.current) {
			// carouselRef.current.scrollTo({
			// 	left: carouselRef.current.scrollLeft + 200,
			// 	behavior: 'smooth',
			// 	// easing: 'cubic-bezier(0.1, 0.7, 1.0, 0.1)'
			// });
			carouselRef.current.scroll({
				left: carouselRef.current.scrollLeft += 140,
				behavior: 'smooth',
			});
			setCurrentlyActiveIndex(currentlyActiveIndex + 1);
		}
		// for (let index = 0; index < heroSectionCarousel.length; index++) {
		// 	// if(currentlyActiveIndex == index && currentlyActiveIndex == 0) {
		// 	// 	setCurrentlyActiveIndex(heroSectionCarousel.length);
		// 	// }
		// 	if(currentlyActiveIndex == index) {
		// 		setCurrentlyActiveIndex( index = 1)
		// 	}
		// }
	}

	function moveCardsRight() {

		if (currentlyActiveIndex == 0) {
			return;
		}
		if (carouselRef.current) {
			carouselRef.current.scroll({
				left: carouselRef.current.scrollLeft -= 140,
				behavior: 'smooth',
			});
			setCurrentlyActiveIndex(currentlyActiveIndex - 1);
		}
	}

	//#endregion

	//#region react hooks

	useEffect(() => {

		const scrollInterval = setInterval(() => {
			if (carouselRef.current) {
				if (onMobile && carouselRef.current.scrollLeft >= 1296) {
					setMaxReached(true);
				}
				if (!onMobile && carouselRef.current.scrollLeft >= 560) {
					setMaxReached(true);
				}

				const _currentlyActiveIndex = currentlyActiveIndex + 1;
				carouselRef.current.scroll({
					left: onMobile ? carouselRef.current.scrollLeft += 224 : carouselRef.current.scrollLeft += 140,
					behavior: 'smooth',
				});

				setCurrentlyActiveIndex(_currentlyActiveIndex);

				console.log('currentlyActiveIndex: ', currentlyActiveIndex);
				console.log('_currentlyActiveIndex: ', _currentlyActiveIndex);
				console.log('carouselRef.current.scrollLeft: ', carouselRef.current.scrollLeft);
			}
		}, 3000);

		return () => clearInterval(scrollInterval);
	}, [maxReached, currentlyActiveIndex]);

	useEffect(() => {
		if (carouselRef.current) {
			carouselRef.current.scroll({
				left: 0,
				behavior: 'smooth'
			});
			setCurrentlyActiveIndex(0);
			setMaxReached(false);
		}
	}, [maxReached]);

	useEffect(() => {
		AOS.init();
	}, []);

	//#endregion

	return (
		<section className={`${styles.homepage}`}>

			<div className={styles.heroSection}>
				<div className={styles.heroSection__image}>
					<Image src={heroSectionCarousel[currentlyActiveIndex]?.image} alt={heroSectionCarousel[currentlyActiveIndex]?.name} />
					{/* <Image src={backgroundImage} alt="beautiful_city_china" /> */}
				</div>

				<div className={styles.heroSection__contents}>
					<div className={styles.left}>
						<div className={styles.textArea} data-aos={onMobile ? "fade-up" : "fade-left"}>
							<h2>An {onMobile && <br />}Aerotropolis City {!onMobile && <br />}<span>made for you</span></h2>
							<p>Creating a desired destination community that supports
								hospitality, infrastructure, and utilities in the host environment.</p>
							<div className={styles.textArea__button}>
								<button>Explore <ArrowIcon /></button>
							</div>
						</div>
						{!onMobile && <div className={styles.scrollIcon}>
							<ScrollLink to="sustainableCity" smooth={true} duration={500} offset={0}>
								<p>Scroll down</p>
								<span className={styles.slideIcon}><SlideDown /></span>
							</ScrollLink>
						</div>}
					</div>
					{!onMobile &&
						<div className={styles.carouselArea}>
							<div className={styles.carousel} data-aos="fade-up" ref={carouselRef}>
								{
									heroSectionCarousel.map((each, index) => (
										<div className={styles.eachCard} key={index}>
											<Image src={each.image} alt={each.name} /> 
											<p>{each.name}</p> 
										</div>
									))
								}
							</div>
							<div className={styles.indicator}>
								{/* <span onClick={moveCardsLeft} className={`${currentlyActiveIndex == 5 ? styles.inactive : ''}`}><ArrowCircleLeft /></span>  */}
								<span onClick={moveCardsLeft}><ArrowCircleLeft /></span>
								<span onClick={moveCardsRight} className={`${currentlyActiveIndex == 0 ? styles.inactive : ''}`}><ArrowCircleRight /></span>
							</div>
						</div>}
					{onMobile &&
						<div className={styles.mobileCarouselArea}>
							<div className={styles.carousel} data-aos="fade-up" ref={carouselRef}>
								{
									heroSectionCarousel.map((each, index) => (
										<div className={styles.eachCard} key={index}>
											<Image src={each.image} alt={each.name} />
											<p>{each.name}</p>
										</div>
									))
								}
							</div>
							<div className={styles.indicator}>
								{/* <span onClick={moveCardsLeft} className={`${currentlyActiveIndex == 5 ? styles.inactive : ''}`}><ArrowCircleLeft /></span>  */}
								<span onClick={moveCardsLeft}><ArrowCircleLeft /></span>
								<span onClick={moveCardsRight} className={`${currentlyActiveIndex == 0 ? styles.inactive : ''}`}><ArrowCircleRight /></span>
							</div>
						</div>}
				</div>
			</div>

			<SustainableCity />

			<Projects />

			<ScheduleTour />

			{/* <BlogArea /> */}

			<Organizations />

			<TourSection setIsPopupVisible={setIsPopupVisible} />
			
			{
				isPopupVisible && 
				<PopupContainer setIsPopupVisible={setIsPopupVisible} />
			}

		</section>
	)
}
