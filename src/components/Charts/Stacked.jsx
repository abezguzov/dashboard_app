import React from "react";
import {
  ChartComponent,
  Inject,
  Legend,
  Category,
  StackingColumnSeries,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from "../../data/dummy";

const Stacked = ({ width, height }) => {
  return (
    <ChartComponent
      width={width}
      height={height}
      id="stack-chart"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      legendSettings={{ background: "white" }}
    >
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
    </ChartComponent>
  );
};

export default Stacked;
