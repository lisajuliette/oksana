import Image from 'next/image';
import AriesSVG from './Icons/aries';
import GeminiSVG from './Icons/gemini';
import MenuSVG from './Icons/menu';
import ScorpioSVG from './Icons/scorpio';

export default function Home() {
	return (
		<main className="main">
			<nav className="flex justify-between">
				<h1 className="uppercase text-midnight">Oksvna</h1>
				<div className="self-center">
					<MenuSVG className="stroke-midnight" width={40} height={40} />
				</div>
			</nav>

			<div className="mosaic--container">
				<div
					className="
        mosaic--row-1--col-1
        mosaic--horizontal
        mosaic--image-container"
				>
					<Image
						src="/../public/images/nikki-chaise-cropped.png"
						width={600}
						height={300}
						alt="Picture of Nikki by the pool"
					/>
				</div>
				<div className="mosaic--row-1--col-3 mosaic--vertical relative before:absolute before:bg-sand before:w-full before:h-full before:z-[-1] before:mix-blend-multiply">
					<AriesSVG className="fill-white" />
					<span className="subtitle text-white uppercase absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
						Aries
					</span>
				</div>
				<div
					className="
          mosaic--row-1--col-4
          mosaic--vertical
          mosaic--image-container
         "
				>
					<Image
						src="/../public/images/liz-beach-cropped.jpg"
						width={300}
						height={600}
						alt="Picture of Elizabeth on the beach"
					/>
				</div>
				<div className="div4 mosaic--vertical relative before:absolute before:bg-palegreen before:w-full before:h-full before:z-[-1] before:mix-blend-multiply">
					<GeminiSVG className="fill-midgreen" />
					<span className="subtitle text-midgreen uppercase absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
						Gemini
					</span>
				</div>
				<div className="div5 mosaic--square">
					<Image
						src="/../public/images/palm-square.jpeg"
						width={300}
						height={300}
						alt="Picture of -"
					/>
				</div>
				<div className="div6 mosaic--square">
					<Image
						src="/../public/images/wave-square.png"
						width={300}
						height={300}
						alt="Picture of -"
					/>
				</div>
				<div
					className="
        div7
        mosaic--vertical
        mosaic--image-container"
				>
					<Image
						src="/../public/images/liz-jungle-cropped.jpg"
						width={300}
						height={600}
						alt="Picture of Elizabeth in the Jungle"
					/>
				</div>
				<div className="div8 mosaic--square">
					<Image
						src="/../public/images/bubbles-square.jpeg"
						width={300}
						height={300}
						alt="Picture of -"
					/>
				</div>
				<div className="div9 mosaic--square">
					<Image
						src="/../public/images/sand-square.jpeg"
						width={300}
						height={300}
						alt="Picture of -"
					/>
				</div>
				<div className="div10 mosaic--vertical relative before:absolute before:bg-cornflower before:w-full before:h-full before:z-[-1] before:mix-blend-multiply">
					<ScorpioSVG className="fill-tulip" />
					<span className="subtitle text-tulip uppercase absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
						Scorpio
					</span>
				</div>
			</div>
		</main>
	);
}
