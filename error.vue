<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
	error: Object as () => NuxtError
})
</script>

<template>
	<NuxtLayout>
		<div class="flex-center w-full flex-1 flex-col">
			<h1 v-if="props.error">Error {{ props.error.statusCode }}</h1>
			<h2 v-if="props.error">{{ props.error.statusMessage }}</h2>
			<NuxtLink to="/" class="mt-4">Go back home</NuxtLink>
		</div>
	</NuxtLayout>
</template>
