<script>
export default {
	props: ['project'],
};
</script>

<template>
	<router-link
		to="/projects/single-project"
		class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-green-50 dark:bg-gray-800"
		aria-label="Single Project"
	>
		<div>
			<img
				:src="project.img"
				:alt="project.title"
				class="rounded-t-xl border-none"
			/>
		</div>
		<div class="text-center px-4 py-6">
			<p
				class="font-general-semibold text-xl text-gray-800 dark:text-green-700 font-semibold mb-2"
			>
				{{ project.title }}
			</p>
			<span
				class="font-general-medium text-lg text-gray-800 dark:text-green-700"
				>{{ project.category }}</span
			>
		</div>
	</router-link>
</template>

<style lang="scss" scoped></style>
