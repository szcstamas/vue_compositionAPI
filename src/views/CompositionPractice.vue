<template>
    <main>
        <CompositionSection
            :sectionH1="'Practice Subpage'"
            :sectionH4="'2023.04.26'"
            :sectionSubline="'Just another routed page!'"
        >
            <p class="primary-text">Capacity: <strong>{{ capacity }}</strong></p>
            <button @click="increaseCapacity()">Increase Capacity</button>
        </CompositionSection>
    </main>
</template>

<script>
import CompositionSection from "@/components/CompositionSection.vue"
import { ref } from "vue"

export default {
    setup() {
        const capacity = ref(3);

        function increaseCapacity() { capacity.value++ }
        return { capacity, increaseCapacity }
    },
    components: {
        CompositionSection
    }
}
</script>

<style lang="css" scoped>

</style>