// Use D3 fetch to read the JSON file
// The data from the JSON file is arbitrarily named importedData as the argument
d3.json("static/js/data/samples.json").then((importedData) => {
    console.log(importedData);
    var data = importedData;
    // define some key variables
    var nameList =  data.names;
    var meta = data.metadata;
    console.log(meta);
    var samples = data.samples;
    console.log(samples);

    // function filterSamples(sample) {
    //     sample.id === "940";
    // };

    // var id940 = filterSamples(samples);

    dropDownMenu = d3.selectAll("#selDataset"); 
    // map the nameList so that the dropdown menu has the IDs
    nameList.map((item) => {
        option = dropDownMenu.append("option");
        option.text(item);
    });

});




