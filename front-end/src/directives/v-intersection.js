export default {
    mounted(element , binding){


        const options = {
            rootMargin:'8px',
            threshold:1.0
        }
        // eslint-disable-next-line no-unused-vars
        const callback = (entries , observer) => {
            if(entries[0].isIntersecting){
                binding.value()
            }
        }
        const observer = new IntersectionObserver(callback , options)
        observer.observe(element)
    },
    name:'intersection'
}