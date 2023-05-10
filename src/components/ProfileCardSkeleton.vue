<template>
    <div class="profile-card">
        <div class="profile-image">
            <img />
        </div>
        <div class="profile-info">
            <span></span>
            <h3></h3>
            <p></p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.profile-image img {
    width: 100%;
    padding-top: 100%;
    background-color: #eee;
    animation: pulse-bg 1s infinite;
}

.profile-info span {
    width: 100%;
    height: 16px;
    display: block;
    background-color: #eee;
    animation: pulse-bg 1.5s infinite;
}

.profile-info h3 {
    width: 250px;
    height: 24px;
    background-color: #eee;
    animation: pulse-bg 1.75s infinite;
}
.profile-info p {
    width: 80%;
    height: 16px;
    background-color: #eee;
    animation: pulse-bg 1.25s infinite;
}

@keyframes pulse-bg {
    0% {
        background-color: #eee;
    }
    50% {
        background-color: #e0e0e0;
    }
    100% {
        background-color: #eee;
    }
}
</style>