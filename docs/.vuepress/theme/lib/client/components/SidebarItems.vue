<script setup lang="ts">
import SidebarItem from "@theme/SidebarItem.vue"
import { onMounted, watch } from "vue"
import { useRoute } from "vue-router"
import { useSidebarItems } from "../composables"

const route = useRoute()
const sidebarItems = useSidebarItems()

onMounted(() => {
	watch(
		() => route.hash,
		(hash) => {
			// get the sidebar DOM
			const sidebar = document.querySelector(".sidebar")
			if (!sidebar) return

			// get the active sidebar item DOM, whose href equals to the current route
			const activeSidebarItem = document.querySelector(
				`.sidebar a.sidebar-item[href="${route.path}${hash}"]`
			)
			if (!activeSidebarItem) return

			// get the top and height of the sidebar
			const { top: sidebarTop, height: sidebarHeight } =
				sidebar.getBoundingClientRect()
			// get the top and height of the active sidebar item
			const { top: activeSidebarItemTop, height: activeSidebarItemHeight } =
				activeSidebarItem.getBoundingClientRect()

			let activedItem = sidebarItems.value[0].children.filter(
				(item) => item.text.trim() === activeSidebarItem.textContent.trim()
			)
			if (activedItem.length === 0) {
				for (let i = 0; i < sidebarItems.value[0].children.length; i++) {
					for (
						let j = 0;
						j < sidebarItems.value[0].children[i].children.length;
						j++
					) {
						if (
							sidebarItems.value[0].children[i].children[j].text.trim() ===
							activeSidebarItem.textContent.trim()
						) {
							activedItem = sidebarItems.value[0].children[i]
							break
						}
					}
				}
			}

			console.log(activedItem)

			// when the active sidebar item overflows the top edge of sidebar
			if (activeSidebarItemTop < sidebarTop) {
				// scroll to the top edge of sidebar
				activeSidebarItem.scrollIntoView(true)
			}
			// when the active sidebar item overflows the bottom edge of sidebar
			else if (
				activeSidebarItemTop + activeSidebarItemHeight >
				sidebarTop + sidebarHeight
			) {
				// scroll to the bottom edge of sidebar
				activeSidebarItem.scrollIntoView(false)
			}
		}
	)
})
</script>

<template>
	<ul v-if="sidebarItems.length" class="sidebar-items">
		<SidebarItem
			v-for="item in sidebarItems"
			:key="`${item.text}${item.link}`"
			:item="item"
		/>
	</ul>
</template>
