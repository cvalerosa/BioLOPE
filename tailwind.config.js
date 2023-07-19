const colors = require('tailwindcss/colors');

module.exports = {
	content: [
		'./src/**/*.vue',
		'./src/**/*.js',
		'./src/**/*.jsx',
		'./src/**/*.html',
		'./src/**/*.md'
	],

	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'green-700': '#709775',
				
				'black': '#000000',
				'gray-900': '#212121',
				'gray-800': '#303030',
				'gray-700': '#424242',
				'gray-600': '#757575',
				'gray-500': '#9E9E9E',
				'gray-400': '#BDBDBD',
				'gray-300': '#EOEOEO',
				'gray-200': '#EEEEEE',
				'gray-100': '#F5F5F5',
				'gray-50': '#FAFAFA',
				'green-900': '#3E5641',
				'green-800': '#4C6950',
				'green-700': '#5A7C5E',
				'green-600': '#69916E',
				'green-500': '#7FA284',
				'green-400': '#96B39A',
				'green-300': '#AEC4B1',
				'green-200': '#C5D5C7',
				'green-100': '#DCE6DD',
				'green-50': '#F3F7F4',
				'white': '#FFFFFF',
			},
			container: {
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '5rem',
					xl: '6rem',
					'2xl': '8rem',
				},
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
