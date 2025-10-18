<script lang="ts">
let {
	name,
	class: otherClasses = []
}: {
	name: string
	class?: string[]
} = $props()

let joinedClasses = $derived([
	"material-symbols-outlined",
	...otherClasses
].join(" "))
</script>

<span class={joinedClasses} data-icon={name}></span>

<style lang="postcss">
	.material-symbols-outlined::after {
		content: attr(data-icon);
	}
</style>
