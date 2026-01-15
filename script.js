dscc.subscribeToData(() => {
  document.body.innerHTML = '<h1>OK – Visual carregou</h1>';
});


// dscc.subscribeToData(function (data) {
//   if (!data || !data.tables.DEFAULT) return;

//   const rows = data.tables.DEFAULT;

//   // Assumindo: 1 dimensão + 1 métrica
//   const dimension = data.fields.dimension[0].name;
//   const metric = data.fields.metric[0].name;

//   const values = rows.map(r => ({
//     categoria: r[dimension],
//     valor: Number(r[metric])
//   }));

//   const spec = {
//     "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
//     "data": { "values": values },
//     "mark": "bar",
//     "encoding": {
//       "x": {
//         "field": "categoria",
//         "type": "nominal",
//         "title": dimension
//       },
//       "y": {
//         "field": "valor",
//         "type": "quantitative",
//         "title": metric
//       },
//       "tooltip": [
//         { "field": "categoria", "type": "nominal" },
//         { "field": "valor", "type": "quantitative" }
//       ]
//     }
//   };

//   vegaEmbed('#vis', spec, { actions: false });
// }, { transform: dscc.tableTransform });
