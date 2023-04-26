<template>
    <main>
        <CompositionSection
            :sectionH1="'Practicing Composition API'"
            :sectionH4="'2023.04.26'"
            :sectionSubline="'This is going to be amazing!'"
        />
    </main>
</template>

<script>
import CompositionSection from "@/components/CompositionSection.vue"

export default {
    components: {
        CompositionSection
    }
}
</script>

<style lang="css" scoped>
</style>