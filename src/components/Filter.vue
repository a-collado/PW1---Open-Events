
<script>
export default{
    data() {
        return {
            location : "",
            date_start: "",
            date_end: "",
            rating: "",
            category:"",
            num_assistents:"",
            sort_option: "",

        }
    },
    methods: {
      setRating(rating){
        console.log("clicked on star " + rating);
      },
      applyFilter(){
        console.log("filter applied");
        console.log(this.location + ", " 
        + this.date_start + ", "
        + this.date_end + ", " 
        + this.rating + ", " 
        + this.category + ", " 
        + this.num_assistents + ", "
        + this.sort_option);

        if (this.rating !== ""){
          this.sort_option = "rati_up"
        }

        //Filter events
        var filters = [this.location, this.date_start, this.date_end, this.rating, this.category, this.num_assistents, this.sort_option];

        console.log(filters);
        this.$parent.applyFilter(filters);
        
      

      },
      resetFilter(){
        this.location = "";
        this.date_start= "";
        this.date_end = "";
        this.rating = "";
        this.category = "";
        this.num_assistents = "";
        this.sort_option = "";

        this.$parent.resetFilter();
      }
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
      <!-- Whole Filter-->
      <div id="filter" v-bind:class="{hidden: this.$parent.isFilterShown}">
        <!-- Filter Header-->
        <div class="filter_header">
          <img src="src\assets\images\icons\left-arrow 1.png"  v-on:click="this.$parent.toggleFilter()">
          <h1>Filtros</h1>
          <div style="display:flex">
            <p style="color:steelblue" v-on:click="this.applyFilter()">Apply</p>
            <p v-on:click="this.resetFilter()"> Reset</p>
          </div>
        </div>
        <!-- Filter container-->
        <div class="flex_container">
          <hr class="small_divider">
          <div class="slider">
            <div>
              <p class="darkblue_normal_bold">Minimum assistents</p>
            </div>
            <input type="range" min="0" max="1000" class="slider_bar" v-model="num_assistents">
            <p>0 - {{num_assistents}}</p>
          </div>
          <hr class="small_divider">
          <div class="slider">
            <div>
              <p class="darkblue_normal_bold">Min Start Date</p>
              <p>{{date_start}}</p>
            </div>
            <input type="datetime-local" id="start" name="trip-start" class="input_timeHour" v-model="date_start">
            <div class="darkblue_normal_bold">
              <p class="darkblue_normal_bold">Max Start Date</p>
              <p>{{date_end}}</p>
            </div>
            <input type="datetime-local" id="start" name="trip-start" class="input_timeHour" v-model="date_end">
          </div>
          <hr class="small_divider">
          <div>
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
          </div>
          <hr class="small_divider">
          <div class="radio_buttons">
            <p class="darkblue_normal_bold">Rating:</p>
            <div class="rate">
              <input type="radio" id="star5" name="rate" value="5" v-model="rating"/>
              <label for="star5" title="star5" ></label>
              <input type="radio" id="star4" name="rate" value="4" v-model="rating"/>
              <label for="star4" title="star4"></label>
              <input type="radio" id="star3" name="rate" value="3" v-model="rating"/>
              <label for="star3" title="star3"></label>
              <input type="radio" id="star2" name="rate" value="2" v-model="rating"/>
              <label for="star2" title="star2"></label>
              <input type="radio" id="star1" name="rate" value="1" v-model="rating"/>
              <label for="star1" title="star1"></label>
            </div>
          </div>
          <div>
              <label><p class="darkblue_normal_bold">Provincia</p></label>
              <input class="input_timeHour"  list="provincias" name="provincia" v-model="location"/>
          </div>
        </div>
        <hr class="small_divider">
        <!-- Sorter -->
        <h1 id="sorter" class="filter_header">Sorter</h1>
        <div class="flex_container">
          <div id="alphabetically" class="sorter_option">
            <p class="darkblue_normal_bold">Alphabetically</p>
            <div>
              <input type="radio" id="alphaUp" name="sort" value="alph_up" class="darkblue_normal_bold" v-model="sort_option">
              <label for="alphaUp" title="alpha" name="alphabet">Sort alphabetically ↑</label>
            </div>
            <div>
              <input type="radio" id="alphaUp" name="sort" value="alph_do" class="darkblue_normal_bold"  v-model="sort_option">
              <label for="alphaUp" title="alpha" name="alphabet">Sort alphabetically ↓</label>
            </div> 
          </div>
          <div id="date">
            <p class="darkblue_normal_bold">Start Date</p>
            <div>
              <input type="radio" id="alphaUp" name="sort" value="date_up" class="darkblue_normal_bold"  v-model="sort_option">
              <label for="alphaUp" title="alpha" name="alphabet">Sort by date ↑</label>
            </div>
            <div>
              <input type="radio" id="alphaUp" name="sort" value="date_do" class="darkblue_normal_bold"  v-model="sort_option">
              <label for="alphaUp" title="alpha" name="alphabet">Sort by date ↓</label>
            </div>
          </div>
          <div id="Assistance">
            <p class="darkblue_normal_bold">Assistance</p>
            <div>
              <input type="radio" id="alphaUp" name="sort" value="assi_up" class="darkblue_normal_bold"  v-model="sort_option">
              <label for="alphaUp" title="alpha" name="alphabet">Sort by assistance ↑</label>
            </div>
            <div>
              <input type="radio" id="alphaUp" name="sort" value="assi_do" class="darkblue_normal_bold"  v-model="sort_option">
              <label for="alphaUp" title="alpha" name="alphabet">Sort by assistance ↓</label>
            </div>
          </div>
          <div id="Rating">
            <p class="darkblue_normal_bold">Rating</p>
            <div>
              <input type="radio" id="alphaUp" name="sort" value="rati_up" class="darkblue_normal_bold"  v-model="sort_option">
              <label for="alphaUp" title="alpha" name="alphabet">Sort by rating ↑</label>
            </div>
            <div>
              <input type="radio" id="alphaUp" name="sort" value="rati_do" class="darkblue_normal_bold"  v-model="sort_option">
              <label for="alphaUp" title="alpha" name="alphabet">Sort by rating ↓</label>
            </div></div>
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
  width:80vw;
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
  margin: -5px;
  border-radius:  15px 15px 0px 0px;
  background-color: #CCCCCC;
}
.filter_header *{
  margin: 5px;
}
.filter_header h1{
  font-size: 18px;
}

#sorter{
  font-size:18px;
  margin: -5px;
  padding: 7px;
  border: 0px;
  border-radius:  0px;
  display: flex;
  justify-content: center;
}

.sorter_option{
  display: flex;
  flex-direction: column;
}


.flex_container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
#filter{
  border: 1px solid #000000;
  border-radius: 15px;
  padding: 5px;
  width: 60vw;
  margin-top: 10px;

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

.radio_buttons input{
  display:none;
}
.radio_buttons label{
  margin-left: 0px;
}

.small_divider{
  border:0;
  border-top: 1px solid #CCCCCC;
  margin: 8px
}

.rate {
    display: flex;
    flex-direction: row-reverse;
    padding: 0px;
    margin: 0px
}
.rate:not(:checked) > input {
    position:absolute;

}
.rate:not(:checked) > label {
    float:right;
    width:1em;
    overflow:hidden;
    white-space:nowrap;
    cursor:pointer;
    font-size:30px;
    color:#ccc;
}
.rate:not(:checked) > label:before {
    content: '★ ';
}
.rate > input:checked ~ label {
    color: #ffc700;    
}
.rate:not(:checked) > label:hover,
.rate:not(:checked) > label:hover ~ label {
    color: #deb217;  
}
.rate > input:checked + label:hover,
.rate > input:checked + label:hover ~ label,
.rate > input:checked ~ label:hover,
.rate > input:checked ~ label:hover ~ label,
.rate > label:hover ~ input:checked ~ label {
    color: #c59b08;
}

</style>