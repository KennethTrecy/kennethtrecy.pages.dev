<script lang="ts">
import { textColor } from "@/components/general/theme"

let {
	icon,
	alternateName
}: {
	icon: string
	alternateName: string
} = $props()
let link = $derived(`https://cdn.simpleicons.org/${icon}/${$textColor}`)
</script>

<img class="h-8 w-auto" alt={alternateName} width="32" height="32" src={link}/>
