import { computed , onMounted , onUnmounted , ref } from 'vue'
import debounce from 'debounce'

export default function(){
    let windowWidth = ref(window.innerWidth)

    const onWidthChange = () => windowWidth.value = window.innerWidth
    onMounted(() => window.addEventListener('resize' , debounce(onWidthChange,50)))
    onUnmounted(() => {
        window.removeEventListener('resize' , onWidthChange)
        
    })

    const type = computed(() => {
        if(windowWidth.value < 768) return 'mobile'
        if(windowWidth.value > 767 && windowWidth.value < 1440) return 'tablet'
        if(windowWidth.value > 1439) return 'desktop'
        else return undefined
    })

    const width = computed(() => windowWidth.value)

    return {width , type}
}