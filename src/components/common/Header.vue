<template>
    <div id="header">
        <p id="welcome">欢迎进入</p>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/common/css/init.css";

    #header {
        background: antiquewhite;
        #welcome{
            font-size: large;
        }
    }

</style>