<template>
    <section>
        <div class="flex-vertical">
            <h1>{{ sectionH1 }}</h1>
            <h4>{{ sectionH4 }}</h4>
            <p class="subline">{{ sectionSubline }}</p>
        </div>
        <div>
            <slot></slot>
        </div>
    </section>
</template>

<script>
    export default {
        props: {
            sectionH1: {
                type: String,
                required: true
            },
            sectionH4: {
                type: String,
                required: true
            },
            sectionSubline: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
section {
    width:100%;
    max-width:1280px;
    margin:auto;
    padding:5rem 0;
    
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    gap: var(--two-gap);
}
.flex-vertical {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: var(--mini-gap);
}
</style>