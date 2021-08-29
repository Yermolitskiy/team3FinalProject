<template>
    <div id="burger"  :class="{'active' : isNavOpen}"  @click="toggleNav">
        <slot>

            <button type="button" class="burger_button button" title="menu">
                <span class="burger_bar burger__bar1"></span>
                <span class="burger_bar burger__bar2"></span>
                <span class="burger_bar burger__bar3"></span>
            </button>

        </slot>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
    export default {
           computed:{
               ...mapState({
                   isNavOpen:(state) => state.isNavOpen
               })
           },

            methods:{
                ...mapMutations({
                    toggleNav: 'toggleNavbar'
                })
            },
            
    }
</script>

<style scoped>

.hidden{
    visibility: hidden;
}

.button{
    cursor: pointer;
}

button:focus{
    outline: 0;
}

.burger_button{
    position:relative;
    height: 30px;
    width: 32px;
    display: block;
    border: 0;
    border-radius: 0;
    background-color: transparent;
    pointer-events: all;
    transition: transofrm .6s cubic-bezier(.165 , .84 , .44 , 1);
}

.burger_bar{
    background-color: #130f40;
    position: absolute;
    top: 50%;
    right: 6px;
    left: 6px;
    height: 2px;
    width: auto;
    margin-top: -1px;
    transition: transform .6s cubic-bezier(.165 , .84 , .44 ,1) , opacity .3s cubic-bezier(.165 , .84 , .44 , 1) , background-color .6s cubic-bezier(.165 , .84 , .44 , 1);
}

.burger__bar1{
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
}

.burger__bar2{
    transform-origin: 100% 50%;
    transform:scaleX(.8);
}

.burger_button:hover .burger__bar2{
    transform: scaleX(1);
}

.no_touchevents .burger__bar2:hover {
    transform:scaleX(1);
}

.burger__bar3{
    transform: translateY(6px);
}


#burger.active .burger_button{
    transform:rotate(-180deg)
}

#burger.active .burger__bar1{
    transform: rotate(45deg);
}

#burger.active  .burger__bar2{
    opacity: 0;
}
#burger.active .burger__bar3{
    transform: rotate(-45deg);
}

</style>