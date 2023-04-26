<template>
    <main>
        <CompositionSection
            :sectionH1="'Practice Subpage'"
            :sectionH4="'2023.04.26'"
            :sectionSubline="'Just another routed page!'"
        >
            <p class="primary-text">Spaces Left: {{ spacesLeft }} out of <strong>{{ capacity }}</strong></p>
            <button @click="increaseCapacity()">Increase Capacity</button>
            <div class="attending-div">
                <h2>Attending</h2>
                <ul>
                    <li v-for="(name, index) in attending" :key="index">
                        {{ name }}
                    </li>
                </ul>
            </div>
        </CompositionSection>
    </main>
</template>

<script>
import CompositionSection from "@/components/CompositionSection.vue"
import { ref, computed } from "vue"

export default {
    setup() {
        const capacity = ref(3);
        const attending = ref(["Tim", "Bob", "Joe"]);

        const spacesLeft = computed(() => {
            return capacity.value - attending.value.length
        })

        function increaseCapacity() { capacity.value++; }
        return { capacity, increaseCapacity, attending, spacesLeft };
    },
    components: {
        CompositionSection
    }
}
</script>

<style lang="scss" scoped>
.attending-div {
    margin-top: 2rem;

    ul {
        margin-top: 1rem;
        padding-left: 2rem;
    }
}

</style>