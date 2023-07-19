<template>
	<div class="bg-white py-24 sm:py-32">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="relative">
				<div class="h-64 rounded-lg overflow-hidden">
					<img src="@/assets/images/city.png" alt="Cover Image" class="w-full h-full object-cover object-center" />
				</div>
			</div>
				<div class="relative inset-0 flex flex-col justify-center items-center text-center">
					<h2 class="text-base font-semibold leading-7 text-green-700">Enhanced Design</h2>
					<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Experience the power of our solution</p>
					<p class="mt-6 text-lg leading-8 text-gray-600">Our product offers unique advantages that transform the way you deploy your app. Explore the benefits below:</p>
				</div>
			<div class="relative mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
				<dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
					<div v-for="advantage in advantages" :key="advantage.name" class="relative pl-16">
						<dt class="text-base font-semibold leading-7 text-gray-900">
							<div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-700">
								<font-awesome-icon :icon="['fas', advantage.icon]" class="h-6 w-6 text-white" />
							</div>
							{{ advantage.name }}
						</dt>
						<dd class="mt-2 text-base leading-7 text-gray-600">{{ advantage.description }}</dd>
					</div>
				</dl>
			</div>
		</div>
	</div>
</template>

<script setup>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDove, faEarthAmericas, faBuildingCircleCheck, faHouseSignal } from '@fortawesome/free-solid-svg-icons'

library.add(faDove, faEarthAmericas, faBuildingCircleCheck, faHouseSignal )
// eslint-disable-line no-unused-vars
const advantages = [
	{
		name: 'Biodiversity Promotion',
		description: 'Our façade redesigns create habitat for cavity-dependent animal species, promoting biodiversity within urban environments.',
		icon: 'dove',
	},
	{
		name: 'Positive Climatic Impact',
		description: 'Our designs prioritize positive climatic impact for both animal species and humans, contributing to a sustainable urban ecosystem.',
		icon: 'earth-americas',
	},
	{
		name: 'Structural Feasibility and Integrability',
		description: 'Our façade design ensures structural feasibility and seamless integration with standard ceramic façade systems.',
		icon: 'building-circle-check',
	},
	{
		name: 'Innovative Digital Technologies',
		description: 'We leverage emerging digital technologies to enable site-specific solutions that address human and animal needs.',
		icon: 'fa-house-signal',
	},
]
</script>
