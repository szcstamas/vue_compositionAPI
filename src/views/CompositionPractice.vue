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
//IMPORT COMPOSITION FUNCTION MODULE
import useEventSpace from "@/use/event-space"
import useMapping from "@/use/mapping"
// import { ref, reactive, computed, toRefs} from "vue"

export default {
    setup() {
        //MODULARIZING
        const { capacity, attending, spacesLeft, increaseCapacity } = useEventSpace();
        const {map, embedId} = useMapping();
        return { capacity, attending, spacesLeft, increaseCapacity, map, embedId };

        //DEFAULT WAY OF USING REACTIVE DATA
        //1.
        // const capacity = ref(3);
        // const attending = ref(["Tim", "Bob", "Joe"]);
        // const spacesLeft = computed(() => {
        //     return capacity.value - attending.value.length
        // })

        // function increaseCapacity() { capacity.value++; }
        // return { capacity, increaseCapacity, attending, spacesLeft };

        //ALTERNATIVE WAY OF USING REACTIVE DATA
        //2.
        //using reactive function here which takes an object with the used data
        // const event = reactive({
        //     capacity: 4,
        //     attending: ["Tim", "Bob", "Joe"],
        //     spacesLeft: computed(() => {
        //         return event.capacity - event.attending.length
        //     })
        // })

        //have to use toRefs to hold passed data reactive + this way we dont have to destructure event properties
        // function increaseCapacity() { event.capacity++; }
        // return { ...toRefs(event), increaseCapacity };
        //end of alternative way
    },
    components: {
        CompositionSection
    }
}

//this will be imported from the following route: "@/use/event-space"
//COMPONENT FUNCTION
// function useEventSpace() {
//     const capacity = ref(3);
//     const attending = ref(["Tim", "Bob", "Joe"]);
//     const spacesLeft = computed(() => {
//         return capacity.value - attending.value.length
//     })

//     function increaseCapacity() { capacity.value++; }
//     return { capacity, increaseCapacity, attending, spacesLeft };
// }

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