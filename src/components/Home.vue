<template>
    <div class="wrapper">
        <hr>
        <div class="event">
            <img class="event_img" src="src\assets\images\events\sala_3_place-full 1.png">
            <div class="event_footer">
                <h1>Festival anual de Barcelona</h1>
                <p class="date">14 de Octubre a las 18:00h</p>
                <p class="location">Sala Tango, calle Ruiseñor, Barcelona</p>
            </div>
        </div>
    </div>

</template>



<style scoped>
hr{
    border-style:solid;
    border-width: 0.5px;
    background-color: black;
}

.event_img{
    filter:blur(1px);
    object-fit: cover;
}

.event_footer{
    width: 100%;
    max-width: 500px;
    border-radius: 15px;
    height: 15%;
    background: rgba(0, 0, 0, 0.42);
    position: absolute;
    padding: 5px;
}
.event{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: end;
    max-width: 500px;   
}

.event_footer h1{
    color: white;
    font-size: 16px;
    margin: 5px;
}

.event_footer .date{
    margin: 5px;
    color: rgb(250, 6, 234);
    font-size: 14px;
}

.event_footer .location{
    margin: 5px;
    color: white;
    font-size: 12px;
}
</style>