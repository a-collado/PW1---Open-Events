<script>

export default{
    components:{
    },
    data() {
        return {
        }
    },
    setup(){
        /*const route = useRoute();
        const id = ref();
        console.log(route)
        id.value = route.params.id;

        watch(
        () => route.params.id,
        async newId => {
            window.location.reload()
        },
        () => { 
            id.value = route.params.id; 
        }
        )

        return { id };*/
    },
    
    created(){
        
    },
    methods: {
    }
}

</script>

<template>

    <router-view/>
    <!-- <div v-if="profile">
        <User :user="this.user" :friends="this.friends" :own-profile="this.ownProfile" :key="this.profileKey" :isFriend="this.isFriend"  @goToProfileR="goToProfileR($event)"/>
        <UsersEvents/>
        <UsersStatistics/>
    </div>
    <div v-else class="empty"></div> -->
    <!--
     <div v-if="showingFriends">
        <Friends v-if="ownProfile" :friends="this.friends" @goBack="showingProfile($event)"></Friends>
        <Friends v-else :friends="this.friendsR" @goToProfileR="goToProfileR($event)" @goBack="showingProfile($event)" :logedUser="false"></Friends> 
    </div> -->


</template>

