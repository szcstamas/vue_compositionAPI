<template>
    <main>
        <CompositionSection
            :sectionH1="'Dealing with Watchers'"
            :sectionH4="'2023.04.27.'"
            :sectionSubline="'Practicing Composition API with watchEffect'"
        >
            <div>
                Search for <input type="text" placeholder="something..." v-model="searchInput">
                <p style="margin-top:1rem;">Searched keyword: {{ results }}</p>
            </div>
        </CompositionSection>
    </main>
</template>

<script>
import CompositionSection from "@/components/CompositionSection.vue";
import { ref, watch } from "vue";
import { mapState } from "vuex";

export default {
    components: {
        CompositionSection
    },
    computed: {

    },
    setup() {
        const searchInput = ref("");
        const results = ref("waiting for keyword...");

        //LAZY LOAD OF WATCH
        watch(searchInput, () => {
            searchInput.value.length > 0 ? results.value = searchInput.value : results.value = "waiting for keyword...";  
        }, { immediate: true });

        //IMMEDIATE LOAD OF WATCH
        // watchEffect(() => {
        //     searchInput.value.length > 0 ? results.value = searchInput.value : results.value = "waiting for keyword...";
        // })

        return { searchInput, results };
    }
}

</script>

<style lang="scss" scoped>
input {
    padding: 1rem 2rem;
    border-radius: 10px;
    background-color: #efefef;
    appearance: none;
    border: none;
    outline: none;
}

</style>