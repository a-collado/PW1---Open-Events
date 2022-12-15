
<script>
export default{
    data() {
        return {
            

        }
    },
    methods: {

    }
}

</script>

<template>
     <div id="filter" v-bind:class="{hidden: this.$parent.isFilterShown}">
    <div class="filter_header">
      <img src="src\assets\images\icons\left-arrow 1.png"  v-on:click="this.$parent.toggleFilter()">
      <h1>Filtros</h1>
      <p> Reset</p>
    </div>
    <hr class="small_divider">
    <div class="slider">
      <div>
        <p>Rango de precios</p>
        <p>0-12€</p>
      </div>
      <input type="range" min="0" max="50" value="12" class="slider_bar">
    </div>
    <hr class="small_divider">
    <div class="slider">
      <div>
        <p>Distancia</p>
        <p>&#60; 15 km</p>
      </div>
      <input type="range" min="0" max="50" value="12" class="slider_bar">
    </div>
    <hr class="small_divider">
    <div class="radio_buttons">
      <p>Puntuación media del creador:</p>
      <input type="radio"  name="punt" value="4">
      <label for="punt1"><img src="src\assets\images\icons\4_estrellas.png"></label><br>
      <input type="radio"  name="punt" value="3">
      <label for="punt1"><img src="src\assets\images\icons\3_estrellas.png"></label><br>
      <input type="radio"  name="punt" value="2">
      <label for="punt1"><img src="src\assets\images\icons\2_estrellas.png"></label><br>
      <input type="radio"  name="punt" value="1">
      <label for="punt1"><img src="src\assets\images\icons\1_estrella.png"></label><br>
    </div>
  </div>
</template>

<style>

.filter-row{
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 26px;
  font-weight: bold;
  margin-top: 20px;
  width:90vw;
  max-width: 800px;
}


.filter_header{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  margin: 0px
}
.filter_header *{
  margin: 5px;
}
.filter_header h1{
  font-size: 18px;
}

#filter{
  border: 1px solid #000000;
  border-radius: 15px;
  padding: 5px;
}

.slider div{
  display: flex;
  flex-direction: row;
  justify-content:  space-between;
  align-content:flex-start;
  font-size: 14px;
}

.slider input {
  -webkit-appearance: none;
  width: 100%;
  height: 5px;
  border-radius: 5px;  
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider input::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 15px;
  height: 15px;
  border-radius: 50%; 
  background: #000000;
  cursor: pointer;
}

.radio_buttons{
  font-size: 14px;
}
.radio_buttons label{
  margin-left: 80px;
}

.small_divider{
  border:0;
  border-top: 1px solid #CCCCCC;
  margin: 8px
}


</style>