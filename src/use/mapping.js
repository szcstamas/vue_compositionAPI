import { ref } from "vue";

export default function useMapping() {
    const map = ref(["Ey", "Yo", "Hey"]);
    const embedId = ref(10);
    console.log(`I am the mapper function! My embedId is ${embedId.value} and my map length is ${map.value.length}!`);
    
    return { map, embedId };
}