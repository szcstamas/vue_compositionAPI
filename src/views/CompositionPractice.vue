<template>
    <main>
        <CompositionSection
            :sectionH1="'Practice Subpage'"
            :sectionH4="'2023.04.26'"
            :sectionSubline="'Just another routed page!'"
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