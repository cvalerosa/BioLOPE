<script>
import AppBanner from '@/components/shared/AppBanner.vue';
import ProjectsGrid from '../components/projects/ProjectsGrid.vue';
import Button from '../components/reusable/Button.vue';

export default {
	name: 'Home',
	components: {
		AppBanner,
		ProjectsGrid,
		Button,
	},
};
</script>

<template>
	<div class="container mx-auto">
		<!-- Banner -->
		<AppBanner />

		<!-- Projects -->
		<ProjectsGrid />
		<br>
		<br>
		<!-- Load more projects button -->
		<div>
			<router-link
				to="/projects"
				aria-label="More Projects"
			>
				<Button title="More Projects" />
			</router-link>
		</div>
	</div>
</template>

<style scoped></style>
