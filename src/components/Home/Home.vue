<template>
    <div class="home">
        <Foo class="foo"/>
        <Bar class="bar"/>
    </div>
</template>

<script>
    import Foo from "./Foo";
    import Bar from "./Bar";

    export default {
        name: "Home",
        components: {Foo, Bar}
    }
</script>

<style lang="scss" scoped>
.home{
    margin-top: 8%;
    .foo{
        float: left;
        margin-right: 10%;
    }
    .bar{
        float: left;
    }
}
</style>