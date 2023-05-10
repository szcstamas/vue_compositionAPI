<template>
    <main>
        <CompositionSection
            :sectionH1="'Sharing State'"
            :sectionH4="'2023.05.10.'"
            :sectionSubline="'Sharing state between components when API call happens'"
        >
            <div>
                Search for <input v-model="searchInput">
                <div>
                    <p>Loading: {{ loading }}</p>
                    <p>Error: {{ error }}</p>
                    <p>Number of events: {{ results }}</p>
                </div>
            </div>
        </CompositionSection>
    </main>
</template>

<script>
import CompositionSection from "@/components/CompositionSection.vue";
import { ref, watch } from "vue";
import eventApi from "@/api/event.js";
import usePromise from "@/composables/use-promise";
export default {
  setup() {
    const searchInput = ref("");
    const getEvents = usePromise(search => 
        eventApi.getEventCount(search.value)
    )

    watch(searchInput, () => {
      if (searchInput.value !== "") {
        getEvents.createPromise(searchInput);
      } else {
        getEvents.results.value = null;
      }
    });
    return { searchInput, ...getEvents };
  }
}

</script>

<style lang="scss" scoped>

</style>