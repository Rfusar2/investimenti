/*
 * chart.type line, spline, area, areaspline, column, bar, pie, scatter, gauge, arearange, areasplinerange and columnrange.
 * */

class Idea3 extends Page {
    constructor(){
        super()
        this.page.id = "page-charts"
        this.page.innerHTML= `
<div>
    <div id="header">
        <div class="charts">
            <div id="chart-column" style="width:400px; height:200px;"></div>
        </div>
        <div class="charts">
            <div id="chart-column2" style="width:400px; height:200px;"></div>
        </div>
    </div>
    <div id="body">
    </div>
</div>
        `

        this.createChart({
            id:"chart-column", 
            title:"ciclo soldi", 
            subtitle:"€", 
            x_titles:MONTHS,
            data1:GLOBAL_ENTRATE, 
            data2:GLOBAL_USCITE
        })
    }

    createChart({id, title, subtitle, x_titles, data1, data2 }) { 
        Highcharts.chart(id, {
                chart: {
                    type: 'column'
                },
                title: {
                    text: title,
                },
                xAxis: {
                    categories: x_titles,
                },
                yAxis: {
                    title: {
                        text: subtitle
                    }
                },
                series: [{
                    type: 'column',
                    name: 'entrate',
                    data: data1, 
                }, {
                    type: 'column',
                    name: 'uscite',
                    data: data2,
                }]
        });
    }
}
