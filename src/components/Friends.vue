<template>

    <article class="centered_vertical">
    <div class="flex_row_wrap">
        <h2>Amigos(24)</h2>
        <div class="centered_horitzontal">
            <h2>Solicitudes</h2>
            <ellipse>1</ellipse>
        </div>
    </div>
    <hr>
    <input class="searchbar" type="text" placeholder="Buscar">
</article>

<main>
    
</main>


</template>


<style scoped>

    .flex_row_wrap{
        width: 90%;
        flex-wrap: nowrap;
        justify-content: space-between;
        margin-top: 20px;
    }

    .centered_vertical{
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .centered_horitzontal{
        align-items:center;
    }

    .searchbar{
        background: rgba(0, 0, 0, 0.07);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        padding: 15px; 
        margin-bottom: 5px;
        border-style: none;
        outline: none;        
    }

    hr{
        width: 90vw;
    }

    ellipse{
        padding-top: 3px;
        padding-right: 7px;
        padding-bottom: 3px;
        padding-left: 7px;
        border-radius: 50%;
        background: #E26ABA;
        margin-left: 5px;
        
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 10px;
        line-height: 12px;
        color: #FFFFFF;
    }

    h2 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
        margin-top: 0px;
        margin-bottom: 0px;
    }



</style>
