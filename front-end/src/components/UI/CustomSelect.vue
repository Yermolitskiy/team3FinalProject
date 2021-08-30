<template>
    <div class="select_box">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'custom-select'
    }
</script>

<style>



.select_box svg{
    cursor:pointer;
    margin:0px 5px 0 10px;
}



.select_box select {
  background-color: rgb(124, 107, 181);
  color: #fff;
  font-size: inherit;
  padding: .5em;
  padding-right: 2.5em; 
  border: 0;
  margin: 0;
  border-radius: 3px;
  text-indent: 0.01px;
  text-overflow: '';
  -webkit-appearance: button; /* hide default arrow in chrome OSX */
}

.select_box::before,
.select_box::after {
  content: "";
  position: absolute;
  pointer-events: none;
}



.select_box select[disabled] {
  color: rgba(0,0,0,.3);
}

.select_box select[disabled]::after {
  color: rgba(0,0,0,.1);
}

.select_box::before {
  background-color: rgba(0,0,0,.15);
}

.select_box::after {
  color: rgba(0,0,0,.4);
}

</style>