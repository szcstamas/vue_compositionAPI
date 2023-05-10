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
                    <ProfileCardSkeleton />
                </template>
            </Suspense>
        </CompositionSection>
    </main>
</template>

<script>
import CompositionSection from "@/components/CompositionSection.vue"
import ProfileCard from "@/components/ProfileCard.vue"
import ProfileCardSkeleton from "@/components/ProfileCardSkeleton.vue"

export default {
    components: {
    CompositionSection,
    ProfileCard,
    ProfileCardSkeleton
}
}

</script>

<style lang="scss" scoped>

</style>