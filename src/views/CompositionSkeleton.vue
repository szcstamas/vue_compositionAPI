<template>
    <main>
        <CompositionSection
            :sectionH1="'Skeleton Loading Screen - Suspense'"
            :sectionH4="'2023.05.10'"
            :sectionSubline="'Having fun with Suspense element'"
        >
            <Suspense>
                <template #default>
                    <ProfileCard />
                </template>
                <template #fallback>
                    Loading...
                </template>
            </Suspense>
        </CompositionSection>
    </main>
</template>

<script>
import CompositionSection from "@/components/CompositionSection.vue"
import ProfileCard from "@/components/ProfileCard.vue"

export default {
    components: {
    CompositionSection,
    ProfileCard
}
}

</script>

<style lang="scss" scoped>

</style>