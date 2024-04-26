import { useEffect, useState } from "react";

function HueSlider() {
	const [computed, setComputed] = useState('');

	useEffect(() => {
		const [hue] = document.body.computedStyleMap().get('--hue');

		setComputed(hue.split('').filter(n => !isNaN(n)).join(''));
	}, []);

	return <div className='flex flex-col'>
		Hue
		<input
			type='range'
			value={computed}
			max='360'
			onChange={(e) => {
				const hue = e.target.value;

				document.body.style.setProperty('--hue', hue + 'deg');
				setComputed(hue);
			}}
		/>
	</div>;
}

export default HueSlider;