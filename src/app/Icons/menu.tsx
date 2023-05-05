import * as React from 'react';
import { SVGProps } from 'react';
const MenuSVG = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 72 72"
		{...props}
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeMiterlimit={10}
			strokeWidth={2}
			d="M16 26h40M16 36h40M16 46h40"
		/>
	</svg>
);
export default MenuSVG;
