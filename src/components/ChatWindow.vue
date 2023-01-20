<script>

import { ref, nextTick } from 'vue';

// Corregir error al recibir mensajes muy largos

export default{
    
    props: {
        messages: Array,
    },
    data() {
      return {
        
      };
    },
    watch: { 
        messages: function(newVal, oldVal) {
            if (newVal.length != oldVal.length){
                
                
                this.scrollToEnd();
                //this.$forceUpdate();
                
            }
        }
    },
    mounted() {
		this.scrollToEnd();
        //this.forceUpdateChat();
	},
    methods: {
        messageSended(sender_id) {
            return sender_id == localStorage.getItem("loggedUser");
        },
        async scrollToEnd() {
            await nextTick();
			var container = document.querySelector(".prechat");
			var scrollHeight = container.scrollHeight;
			container.scrollTop = scrollHeight;
            
            
		}
    },

}
</script>

<template>

<main>
    <div class="prechat">
        <div class="chat"  v-for="message in messages" :key="message.id">

            <div class="message send" v-if="messageSended(message.user_id_send)">
                <p>{{ message.content }}</p>
                <img class="icon" src="../assets/images/icons/read_g.png" alt="leido">
                <h4>{{ message.timeStamp.substr(11,5) }}</h4>
            </div>
            <div class="message received" v-else>
                <p>{{ message.content }}</p>
                <img class="icon" src="../assets/images/icons/read_g.png" alt="leido">
                <h4>{{ message.timeStamp.substr(11,5) }}</h4>
            </div>
            

        </div>
    </div>
</main>

</template>


<style scoped>

.chat{
    display: flex;
    flex-direction: column;
}

.prechat{
    margin: 25px;
    min-height: 40vh;
    height: 100%;
    max-height: 50vh;
    overflow: auto;
}

.message{
    display: flex;
    flex-wrap: nowrap;
    width: fit-content;
    border-radius: 10px;
    margin-bottom: 10px;
}

.message.send{
    background: linear-gradient(180deg, #25585D 0%, rgba(61, 178, 190, 0.79) 0.01%, rgba(59, 225, 240, 0.48) 100%);
    align-self: flex-end;
}

.message.received{
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.06) 0%, rgba(0, 0, 0, 0.0222) 100%);
    align-self: flex-start;
}

.messageBox{
    display: flex;
    flex-direction: column;
    height: 60vw auto;
    max-height: 50vh;
    overflow: auto;
}

ellipse{
    padding: 8px;
    border-radius: 50%;
    background: #E26ABA;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 12px;
    color: #FFFFFF;

    background: radial-gradient(50% 50% at 50% 50%, #E26ABA 0%, rgba(226, 106, 186, 0.48) 15.62%, #E26ABA 80.21%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

.icon{
    width: 35px;
    height: 35px;
}

.message .icon{
    width: 17px;
    height: 17px;
    align-self: flex-end;
    margin-bottom: 12px;
    margin-left: 10px;
    margin-right: 5px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

ellipse img.icon{
    width: 30px;
    height: 29px;
}

p{
    margin: 17px;
    margin-right: 3px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 17px;
    line-clamp: 10px;
    width: 25vh;
    color: #000000;
}

h4{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 15px;
    margin: 0px;
    margin-left: 12px;
}

.message h4{
    position: relative;
    margin: 0px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: -0.11em;
    color: #ABABAB;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    align-self: flex-end;
    margin-right: 15px;
    margin-bottom: 15px;
    margin-left: 10px;
}

.message.send h4{
    margin-left: 0px;
    color: #ffffff;
}

h5{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 17px;
    margin: 0px;
    margin-top: 8px;
    margin-left: 15px;
}

h5.yellow{
    color: #D5D916;
}
h5.green{
    color: #75D073;
}

h5.red{
    color: #FF265A;
}

@media (min-width: 768px) {
    .flex_row_wrap{
        justify-content: flex-start;
    }
    
    .small_profilePic{
        margin-left: 10vw;
    }

    .message.received{
        margin-left: 10vw;
    }

    .message.send{
        margin-right: 10vw;
    }

    footer .searchbar{
        width: 60vw;
    }

    p{
        width:auto;
    }
}

</style>