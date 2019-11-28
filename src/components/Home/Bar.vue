<template>
    <div class="bar">
        <div id="barcharts" style="width: 600px;height:400px;"></div>
    </div>
</template>

<script>
    import * as echarts from "echarts";

    export default {
        name: "Bar",
        data() {
            return {}
        },
        methods: {
            initBar() {
                var myChart = echarts.init(document.getElementById('barcharts'));
                let option = {
                    title : {
                        text: '某站点用户访问来源',
                        subtext: '纯属虚构',
                        x:'center'
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                    },
                    series : [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius : '55%',
                            center: ['50%', '60%'],
                            data:[
                                {value:111, name:'直接访问'},
                                {value:222, name:'邮件营销'},
                                {value:333, name:'联盟广告'},
                                {value:444, name:'视频广告'},
                                {value:555, name:'搜索引擎'}
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                };
                myChart.setOption(option);

            },
        },
        mounted() {
            this.initBar();
        }
    }
</script>

<style lang="scss" scoped>

</style>