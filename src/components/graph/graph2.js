import React, { Component } from 'react';
import './graph2.css';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

class Graph extends Component {

    chart;

    constructor() {
        super();
        this.state = {
            data : {}
        };
    }

    setupGraph( data ) {
        let chart = am4core.create("chartdiv2", am4charts.XYChart);
        chart.data = data;
    
        let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.grid.template.location = 0;
    
        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = true;
        valueAxis.renderer.minWidth = 35;
    
        let series_vip = chart.series.push(new am4charts.LineSeries());
        series_vip.dataFields.dateX = "date";
        series_vip.dataFields.valueY = "qty_vip";
        series_vip.tooltipText = "{qty_vip}";
        
        /*
        let series_red = chart.series.push(new am4charts.LineSeries());
        series_red.dataFields.dateX = "date";
        series_red.dataFields.valueY = "qty_red";
        series_red.tooltipText = "{qty_red}";
        

        let series_kaola = chart.series.push(new am4charts.LineSeries());
        series_kaola.dataFields.dateX = "date";
        series_kaola.dataFields.valueY = "qty_kaola";
        series_kaola.tooltipText = "{qty_kaola}";
        */

        chart.cursor = new am4charts.XYCursor();
    
        let scrollbarX = new am4charts.XYChartScrollbar();
        scrollbarX.series.push(series_vip);
        // scrollbarX.series.push(series_red);
        // scrollbarX.series.push(series_kaola);
        chart.scrollbarX = scrollbarX;
    
        return chart;
    }

    componentDidMount() {
        fetch( "/api/graph1" )
        .then( res => res.json() )
        .then( data => {
            this.setState({ data });
            
            this.chart = this.setupGraph( data.data );
            console.log( "### graph data fetched : ", this.state );
        } )
        .catch( error => console.log( `### error : ${error.message}` ) );
    }
    

    componentDidUpdate() {}

    render() {
        return (
            <div id="chartdiv2"></div>
        );
    }
}

export default Graph;