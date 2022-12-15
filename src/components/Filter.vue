
<script>
export default{
    data() {
        return {
            location : "",
            date_start: "",
            date_end: "",
            rating: "",
            category:"",
            num_assistents:""

        }
    },
    methods: {

    }
}

</script>

<template>
<datalist id="provincias">
    <option value="A Coruña">A Coruña</option>
    <option value="Alacant">Alacant</option>
    <option value="Albacete">Albacete</option>
    <option value="Almería">Almería</option>
    <option value="Araba">Araba</option>
    <option value="Asturias">Asturias</option>
    <option value="Ávila">Ávila</option>
    <option value="Badajoz">Badajoz</option>
    <option value="Barcelona">Barcelona</option>
    <option value="Bizkaia">Bizkaia</option>
    <option value="Burgos">Burgos</option>
    <option value="Cantabria">Cantabria</option>
    <option value="Castelló">Castelló</option>
    <option value="Ceuta">Ceuta</option>
    <option value="Ciudad Real">Ciudad Real</option>
    <option value="Cuenca">Cuenca</option>
    <option value="Cáceres">Cáceres</option>
    <option value="Cádiz">Cádiz</option>
    <option value="Córdoba">Córdoba</option>
    <option value="Gipuzcoa">Gipuzcoa</option>
    <option value="Girona">Girona</option>
    <option value="Granada">Granada</option>
    <option value="Guadalajara">Guadalajara</option>
    <option value="Huelva">Huelva</option>
    <option value="Huesca">Huesca</option>
    <option value="Illes Balears">Illes Balears</option>
    <option value="Jaén">Jaén</option>
    <option value="La Rioja">La Rioja</option>
    <option value="Las Palmas">Las Palmas</option>
    <option value="León">León</option>
    <option value="Lleida">Lleida</option>
    <option value="Lugo">Lugo</option>
    <option value="Madrid">Madrid</option>
    <option value="Melilla">Melilla</option>
    <option value="Murcia">Murcia</option>
    <option value="Málaga">Málaga</option>
    <option value="Navarra">Navarra</option>
    <option value="Ourense">Ourense</option>
    <option value="Palencia">Palencia</option>
    <option value="Pontevedra">Pontevedra</option>
    <option value="Salamanca">Salamanca</option>
    <option value="Tenerife">Tenerife</option>
    <option value="Segovia">Segovia</option>
    <option value="Sevilla">Sevilla</option>
    <option value="Soria">Soria</option>
    <option value="Tarragona">Tarragona</option>
    <option value="Teruel">Teruel</option>
    <option value="Toledo">Toledo</option>
    <option value="Valladolid">Valladolid</option>
    <option value="València">València</option>
    <option value="Zamora">Zamora</option>
    <option value="Zaragoza"></option>
</datalist>

  <form>
      <div id="filter" v-bind:class="{hidden: this.$parent.isFilterShown}">
      <div class="filter_header">
        <img src="src\assets\images\icons\left-arrow 1.png"  v-on:click="this.$parent.toggleFilter()">
        <h1>Filtros</h1>
        <p> Reset</p>
      </div>
      <hr class="small_divider">
      <div class="slider">
        <div>
          <p>Minimum assistents</p>
          <p>0 - {{num_assistents}}</p>
        </div>
        <input type="range" min="0" max="1000" class="slider_bar" v-model="num_assistents">
      </div>
      <hr class="small_divider">
      <div class="slider">
        <div>
          <p>Min Date</p>
          <p>{{date_start}}</p>
        </div>
        <input type="datetime-local" id="start" name="trip-start" class="input_timeHour" v-model="date_start">
        <div>
          <p>Max Date</p>
          <p>{{date_end}}</p>
        </div>
        <input type="datetime-local" id="start" name="trip-start" class="input_timeHour" v-model="date_end">
      </div>
      <hr class="small_divider">
      <label><p class="darkblue_normal_bold">Tipo de evento</p></label>
      <select class="input_timeHour" v-model="category">
          <option value="Social">Social</option>
          <option value="Educativo">Educativo</option>
          <option value="Deportivo">Deportivo</option>
          <option value="Empresarial">Empresarial</option>
          <option value="Reunión">Reunión</option>
          <option value="Convención">Convención</option>
          <option value="Cultural">Cultural</option>
      </select>
      <hr class="small_divider">
      <div class="radio_buttons">
        <p>Rating:</p>
        <input type="radio"  name="punt" value="4">
        <label for="punt1"><img src="src\assets\images\icons\4_estrellas.png"></label><br>
        <input type="radio"  name="punt" value="3">
        <label for="punt1"><img src="src\assets\images\icons\3_estrellas.png"></label><br>
        <input type="radio"  name="punt" value="2">
        <label for="punt1"><img src="src\assets\images\icons\2_estrellas.png"></label><br>
        <input type="radio"  name="punt" value="1">
        <label for="punt1"><img src="src\assets\images\icons\1_estrella.png"></label><br>
      </div>
      <div>
          <label><p class="darkblue_normal_bold">Provincia</p></label>
          <input class="input_timeHour"  list="provincias" name="provincia" v-model="location"/>
      </div>
    </div>
  </form>
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
.input_timeHour{
  border: 1px solid #00adbdf6;
  border-radius: 30px;
  padding: 10px;
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