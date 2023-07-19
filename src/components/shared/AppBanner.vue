<script>
import BasePage from '@/components/reusable/BasePage.vue';
import Button from '@/components/reusable/Button.vue';

export default {
	name: 'AppBanner',
	components: {
		BasePage,
		Button,
	},
};
</script>

<template>
	<section class="w-full pb-24">
		<BasePage>
			<div class="col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left">
				<span
					class="font-general-semibold text-base text-gradient uppercase"
					data-aos="fade-right"
					data-aos-once="true"
				>
					Introducing
				</span>
				<h1
					class="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize text-gray-500 sm:pr-8 xl:pr-10"
					data-aos="fade-right"
					data-aos-once="true"
				>
					The <span class="text-header-gradient">BioLOPES</span> revolution
				</h1>
				<p
					class="paragraph hidden text-gray-500 text-lg sm:block"
					data-aos="fade-down"
					data-aos-once="true"
					data-aos-delay="300"
				>
					A pioneering fusion of digital design and additive manufacturing for sustainable urban habitat integration.
				</p>
				<div
					class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2"
					data-aos="fade-up"
					data-aos-once="true"
					data-aos-delay="700"
				>
					<Button title="More information" />
				</div>
			</div>
			<div class="hidden sm:block col-span-12 lg:col-span-6">
				<div class="w-full">
					<img
						:src="require('@/assets/images/cover.png')"
						class="w-auto h-auto"
						alt=""
						data-aos="fade-up"
						data-aos-once="true"
					/>
				</div>
			</div>
			<img
				:src="require('@/assets/images/wild-bird-flock.svg')"
				class="hidden sm:block absolute bottom-16 xl:bottom-10 left-4 xl:left-[20rem] w-8"
				data-aos="fade-up"
				data-aos-delay="300"
			/>
			<img
				:src="require('@/assets/images/wild-bird-fly.svg')"
				class="hidden sm:block absolute top-20 sm:top-20 right-16 lg:right-0 lg:left-[30rem] w-8"
				data-aos="fade-up"
				data-aos-delay="300"
			/>
		</BasePage>
	</section>
</template>

<style scoped>
.text-header-gradient {
  background: rgb(161, 204, 165);
  background: linear-gradient(169.4deg, #A1CCA5 -6.01%, #8FB996 36.87%, #709775 78.04%, #415D43 103.77%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.cover-gradient {
	background: linear-gradient(
		169.4deg,
		rgba(161, 204, 165, 0.04) -6.01%,
		rgba(143, 185, 150, 0.04) 36.87%,
		rgba(112, 151, 117, 0.04) 78.04%,
		rgba(65, 93, 67, 0.04) 103.77%
	);
}
.cover-gradient-2 {
	background: linear-gradient(
		169.4deg,
		rgba(161, 204, 165, 0.1) -6.01%,
		rgba(143, 185, 150, 0.1) 36.87%,
		rgba(112, 151, 117, 0.1) 78.04%,
		rgba(65, 93, 67, 0.1) 103.77%
	);
}
.text-gradient {
	background: linear-gradient(136.91deg, #709775 -12.5%, #A1CCA5 107.5%);
}
.text-gradient {
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}
</style>
