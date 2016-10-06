define(['ojs/ojcore', 
        'text!./basicTable.html', 
        './basicTable',
        'text!./basicTableMetadata.json', 
        'ojs/ojcomposite'],
 function(oj, view, viewModel, metadata)
 {
 //console.log("oj: "+oj+ " :view: " + view + " :viewModel: "+viewModel+" :metadata: "+ metadata);
    oj.Composite.register('object-jet', {
      view: {inline: view},
      viewModel: {inline: viewModel},
      metadata: {inline: JSON.parse(metadata)}
    });
 }
 );