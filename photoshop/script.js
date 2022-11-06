var newDocument = app.documents.add(2550, 3300, 300, 'My new PS doc', NewDocumentMode.RGB)
// create a new document
// width, height, pixels per inch, name, mode

var layers = newDocument.artLayers
var newLayer = layers.add()
newLayer.name = 'My new layer'
