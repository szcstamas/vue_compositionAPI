<template>
    <div class="profile-card">
        <div class="profile-image">
            <img :src="userData.pic">
        </div>
        <div class="profile-info">
            <span>Written by</span>
            <h3>{{ userData.name }}</h3>
            <p>{{ userData.bio }}</p>
        </div>
    </div>
</template>

<script>

import { ref } from "vue";
const loadUserData = async() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: "Tamas Szucs",
                pic: "https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg",
                bio: "I am a faithful beginner in the world of VueJS!",
            })
        }, 2000)
    })
}
    export default {
        async setup () {
            const userData = ref(await loadUserData())
            
            return {
                userData
            }
        }    
    }
</script>

<style lang="scss" scoped>

.profile-card {
    width: 100%;
    max-width: 700px;
    min-height: 180px;
    background: white;
    margin: 0 auto;
    padding: 30px;
    box-sizing: border-box;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, .1);
}

.profile-image {
    width: 10%;
    float: left;
}

.profile-image img {
    width: 100%;
    height: auto;
    border-radius: 50%;
    border: 5px solid green;
    padding: 5px;
}

.profile-info {
    width: 85%;
    float:right}
.profile-info span {
    text-transform: uppercase;
    color: #777;
    letter-spacing: 2px;
}

.profile-info h3 {
    margin: 10px 0;
    font-size: 1.5em;
    color: #222;
}

.profile-info p {
    line-height: 140%;
    color: #777;
}
</style>