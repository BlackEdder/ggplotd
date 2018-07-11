"use strict";
var items = [
{"ggplotd.bounds" : "ggplotd/bounds.html"},
{"ggplotd.bounds.Point" : "ggplotd/bounds/Point.html"},
{"ggplotd.bounds.Point.x" : "ggplotd/bounds/Point.html#x"},
{"ggplotd.bounds.Point.y" : "ggplotd/bounds/Point.html#y"},
{"ggplotd.bounds.Point.this" : "ggplotd/bounds/Point.html#this"},
{"ggplotd.bounds.Point.this" : "ggplotd/bounds/Point.html#this"},
{"ggplotd.bounds.Point.opEquals" : "ggplotd/bounds/Point.html#opEquals"},
{"ggplotd.bounds.Bounds" : "ggplotd/bounds/Bounds.html"},
{"ggplotd.bounds.Bounds.min_x" : "ggplotd/bounds/Bounds.html#min_x"},
{"ggplotd.bounds.Bounds.max_x" : "ggplotd/bounds/Bounds.html#max_x"},
{"ggplotd.bounds.Bounds.min_y" : "ggplotd/bounds/Bounds.html#min_y"},
{"ggplotd.bounds.Bounds.max_y" : "ggplotd/bounds/Bounds.html#max_y"},
{"ggplotd.bounds.Bounds.this" : "ggplotd/bounds/Bounds.html#this"},
{"ggplotd.bounds.Bounds.this" : "ggplotd/bounds/Bounds.html#this"},
{"ggplotd.bounds.height" : "ggplotd/bounds.html#height"},
{"ggplotd.bounds.width" : "ggplotd/bounds.html#width"},
{"ggplotd.bounds.withinBounds" : "ggplotd/bounds.html#withinBounds"},
{"ggplotd.bounds.validBounds" : "ggplotd/bounds.html#validBounds"},
{"ggplotd.bounds.minimalBounds" : "ggplotd/bounds.html#minimalBounds"},
{"ggplotd.bounds.adjustedBounds" : "ggplotd/bounds.html#adjustedBounds"},
{"ggplotd.bounds.AdaptiveBounds" : "ggplotd/bounds/AdaptiveBounds.html"},
{"ggplotd.bounds.AdaptiveBounds.bounds" : "ggplotd/bounds/AdaptiveBounds.html#bounds"},
{"ggplotd.bounds.AdaptiveBounds.this" : "ggplotd/bounds/AdaptiveBounds.html#this"},
{"ggplotd.bounds.AdaptiveBounds.this" : "ggplotd/bounds/AdaptiveBounds.html#this"},
{"ggplotd.bounds.AdaptiveBounds.this" : "ggplotd/bounds/AdaptiveBounds.html#this"},
{"ggplotd.bounds.AdaptiveBounds.adapt" : "ggplotd/bounds/AdaptiveBounds.html#adapt"},
{"ggplotd.bounds.AdaptiveBounds.adapt" : "ggplotd/bounds/AdaptiveBounds.html#adapt"},
{"ggplotd.bounds.AdaptiveBounds.adapt" : "ggplotd/bounds/AdaptiveBounds.html#adapt"},
{"ggplotd.bounds.AdaptiveBounds.adapt" : "ggplotd/bounds/AdaptiveBounds.html#adapt"},
{"ggplotd.theme" : "ggplotd/theme.html"},
{"ggplotd.theme.Theme" : "ggplotd/theme/Theme.html"},
{"ggplotd.theme.Theme.backgroundColour" : "ggplotd/theme/Theme.html#backgroundColour"},
{"ggplotd.theme.background" : "ggplotd/theme.html#background"},
{"ggplotd.theme.background" : "ggplotd/theme.html#background"},
{"ggplotd.legend" : "ggplotd/legend.html"},
{"ggplotd.legend.continuousLegend" : "ggplotd/legend.html#continuousLegend"},
{"ggplotd.legend.discreteLegend" : "ggplotd/legend.html#discreteLegend"},
{"ggplotd.legend.drawContinuousLegend" : "ggplotd/legend.html#drawContinuousLegend"},
{"ggplotd.legend.drawDiscreteLegend" : "ggplotd/legend.html#drawDiscreteLegend"},
{"ggplotd.stat" : "ggplotd/stat.html"},
{"ggplotd.stat.statFunction" : "ggplotd/stat.html#statFunction"},
{"ggplotd.stat.binID" : "ggplotd/stat.html#binID"},
{"ggplotd.stat.statHist" : "ggplotd/stat.html#statHist"},
{"ggplotd.stat.statHist2D" : "ggplotd/stat.html#statHist2D"},
{"ggplotd.stat.statDensity" : "ggplotd/stat.html#statDensity"},
{"ggplotd.stat.statDensity2D" : "ggplotd/stat.html#statDensity2D"},
{"ggplotd.axes" : "ggplotd/axes.html"},
{"ggplotd.axes.Axis" : "ggplotd/axes/Axis.html"},
{"ggplotd.axes.Axis.this" : "ggplotd/axes/Axis.html#this"},
{"ggplotd.axes.Axis.label" : "ggplotd/axes/Axis.html#label"},
{"ggplotd.axes.Axis.min" : "ggplotd/axes/Axis.html#min"},
{"ggplotd.axes.Axis.max" : "ggplotd/axes/Axis.html#max"},
{"ggplotd.axes.Axis.min_tick" : "ggplotd/axes/Axis.html#min_tick"},
{"ggplotd.axes.Axis.tick_width" : "ggplotd/axes/Axis.html#tick_width"},
{"ggplotd.axes.Axis.offset" : "ggplotd/axes/Axis.html#offset"},
{"ggplotd.axes.Axis.show" : "ggplotd/axes/Axis.html#show"},
{"ggplotd.axes.XAxis" : "ggplotd/axes/XAxis.html"},
{"ggplotd.axes.XAxis.axis" : "ggplotd/axes/XAxis.html#axis"},
{"ggplotd.axes.YAxis" : "ggplotd/axes/YAxis.html"},
{"ggplotd.axes.YAxis.axis" : "ggplotd/axes/YAxis.html#axis"},
{"ggplotd.axes.initialized" : "ggplotd/axes.html#initialized"},
{"ggplotd.axes.adjustTickWidth" : "ggplotd/axes.html#adjustTickWidth"},
{"ggplotd.axes.axisTicks" : "ggplotd/axes.html#axisTicks"},
{"ggplotd.axes.tickLength" : "ggplotd/axes.html#tickLength"},
{"ggplotd.axes.toAxisLabel" : "ggplotd/axes.html#toAxisLabel"},
{"ggplotd.axes.tickLength" : "ggplotd/axes.html#tickLength"},
{"ggplotd.axes.axisAes" : "ggplotd/axes.html#axisAes"},
{"ggplotd.meta" : "ggplotd/meta.html"},
{"ggplotd.gtk" : "ggplotd/gtk.html"},
{"ggplotd.gtk.GTKWindow" : "ggplotd/gtk/GTKWindow.html"},
{"ggplotd.gtk.GTKWindow.draw" : "ggplotd/gtk/GTKWindow.html#draw"},
{"ggplotd.gtk.GTKWindow.clearWindow" : "ggplotd/gtk/GTKWindow.html#clearWindow"},
{"ggplotd.gtk.GTKWindow.run" : "ggplotd/gtk/GTKWindow.html#run"},
{"ggplotd.colourspace" : "ggplotd/colourspace.html"},
{"ggplotd.colourspace.HCY" : "ggplotd/colourspace.html#HCY"},
{"ggplotd.colourspace.RGB" : "ggplotd/colourspace.html#RGB"},
{"ggplotd.colourspace.RGBA" : "ggplotd/colourspace.html#RGBA"},
{"ggplotd.colourspace.XYZ" : "ggplotd/colourspace.html#XYZ"},
{"ggplotd.colourspace.toColourSpace" : "ggplotd/colourspace.html#toColourSpace"},
{"ggplotd.colourspace.isColour" : "ggplotd/colourspace.html#isColour"},
{"ggplotd.colourspace.toCairoRGBA" : "ggplotd/colourspace.html#toCairoRGBA"},
{"ggplotd.colourspace.fromCairoRGBA" : "ggplotd/colourspace.html#fromCairoRGBA"},
{"ggplotd.colourspace.toTuple" : "ggplotd/colourspace.html#toTuple"},
{"ggplotd.colourspace.toTuple" : "ggplotd/colourspace.html#toTuple"},
{"ggplotd.colourspace.toTuple" : "ggplotd/colourspace.html#toTuple"},
{"example" : "example.html"},
{"ggplotd.aes" : "ggplotd/aes.html"},
{"ggplotd.aes.Pixel" : "ggplotd/aes/Pixel.html"},
{"ggplotd.aes.Pixel.this" : "ggplotd/aes/Pixel.html#this"},
{"ggplotd.aes.Pixel.this" : "ggplotd/aes/Pixel.html#this"},
{"ggplotd.aes.Pixel.value" : "ggplotd/aes/Pixel.html#value"},
{"ggplotd.aes.aes" : "ggplotd/aes.html#aes"},
{"ggplotd.aes.DefaultValues" : "ggplotd/aes.html#DefaultValues"},
{"ggplotd.aes.fieldWithDefault" : "ggplotd/aes.html#fieldWithDefault"},
{"ggplotd.aes.Aes" : "ggplotd/aes/Aes.html"},
{"ggplotd.aes.group" : "ggplotd/aes/group.html"},
{"ggplotd.aes.DataID" : "ggplotd/aes/DataID.html"},
{"ggplotd.aes.DataID.this" : "ggplotd/aes/DataID.html#this"},
{"ggplotd.aes.DataID.to" : "ggplotd/aes/DataID.html#to"},
{"ggplotd.aes.DataID.state" : "ggplotd/aes/DataID.html#state"},
{"ggplotd.aes.merge" : "ggplotd/aes/merge.html"},
{"ggplotd.aes.mergeRange" : "ggplotd/aes.html#mergeRange"},
{"ggplotd.algorithm" : "ggplotd/algorithm.html"},
{"ggplotd.algorithm.safeMax" : "ggplotd/algorithm.html#safeMax"},
{"ggplotd.algorithm.safeMin" : "ggplotd/algorithm.html#safeMin"},
{"ggplotd.range" : "ggplotd/range.html"},
{"ggplotd.range.uniquer" : "ggplotd/range.html#uniquer"},
{"ggplotd.range.mergeRange" : "ggplotd/range.html#mergeRange"},
{"ggplotd.colour" : "ggplotd/colour.html"},
{"ggplotd.colour.namedColour" : "ggplotd/colour.html#namedColour"},
{"ggplotd.colour.ColourGradientFunction" : "ggplotd/colour.html#ColourGradientFunction"},
{"ggplotd.colour.colourGradient" : "ggplotd/colour.html#colourGradient"},
{"ggplotd.colour.colourGradient" : "ggplotd/colour.html#colourGradient"},
{"ggplotd.scale" : "ggplotd/scale.html"},
{"ggplotd.scale.scale" : "ggplotd/scale.html#scale"},
{"ggplotd.scale.applyScaleFunction" : "ggplotd/scale.html#applyScaleFunction"},
{"ggplotd.guide" : "ggplotd/guide.html"},
{"ggplotd.guide.GuideStore" : "ggplotd/guide/GuideStore.html"},
{"ggplotd.guide.GuideStore.put" : "ggplotd/guide/GuideStore.html#put"},
{"ggplotd.guide.GuideStore.put" : "ggplotd/guide/GuideStore.html#put"},
{"ggplotd.guide.GuideStore.put" : "ggplotd/guide/GuideStore.html#put"},
{"ggplotd.guide.GuideStore.min" : "ggplotd/guide/GuideStore.html#min"},
{"ggplotd.guide.GuideStore.max" : "ggplotd/guide/GuideStore.html#max"},
{"ggplotd.guide.GuideStore.store" : "ggplotd/guide/GuideStore.html#store"},
{"ggplotd.guide.GuideStore.storeHash" : "ggplotd/guide/GuideStore.html#storeHash"},
{"ggplotd.guide.GuideStore.hasDiscrete" : "ggplotd/guide/GuideStore.html#hasDiscrete"},
{"ggplotd.guide.GuideToDoubleFunction" : "ggplotd/guide/GuideToDoubleFunction.html"},
{"ggplotd.guide.GuideToDoubleFunction.convert" : "ggplotd/guide/GuideToDoubleFunction.html#convert"},
{"ggplotd.guide.GuideToDoubleFunction.opCall" : "ggplotd/guide/GuideToDoubleFunction.html#opCall"},
{"ggplotd.guide.GuideToDoubleFunction.doubleConvert" : "ggplotd/guide/GuideToDoubleFunction.html#doubleConvert"},
{"ggplotd.guide.GuideToDoubleFunction.stringConvert" : "ggplotd/guide/GuideToDoubleFunction.html#stringConvert"},
{"ggplotd.guide.GuideToDoubleFunction.scaleFunction" : "ggplotd/guide/GuideToDoubleFunction.html#scaleFunction"},
{"ggplotd.guide.GuideToColourFunction" : "ggplotd/guide/GuideToColourFunction.html"},
{"ggplotd.guide.GuideToColourFunction.opCall" : "ggplotd/guide/GuideToColourFunction.html#opCall"},
{"ggplotd.guide.GuideToColourFunction.doubleConvert" : "ggplotd/guide/GuideToColourFunction.html#doubleConvert"},
{"ggplotd.guide.GuideToColourFunction.stringConvert" : "ggplotd/guide/GuideToColourFunction.html#stringConvert"},
{"ggplotd.guide.GuideToColourFunction.stringToDoubleConvert" : "ggplotd/guide/GuideToColourFunction.html#stringToDoubleConvert"},
{"ggplotd.guide.GuideToColourFunction.scaleFunction" : "ggplotd/guide/GuideToColourFunction.html#scaleFunction"},
{"ggplotd.guide.guideFunction" : "ggplotd/guide.html#guideFunction"},
{"ggplotd.guide.guideFunction" : "ggplotd/guide.html#guideFunction"},
{"ggplotd.geom" : "ggplotd/geom.html"},
{"ggplotd.geom.Geom" : "ggplotd/geom/Geom.html"},
{"ggplotd.geom.Geom.this" : "ggplotd/geom/Geom.html#this"},
{"ggplotd.geom.Geom.drawFunction" : "ggplotd/geom/Geom.html#drawFunction"},
{"ggplotd.geom.Geom.draw" : "ggplotd/geom/Geom.html#draw"},
{"ggplotd.geom.Geom.mask" : "ggplotd/geom/Geom.html#mask"},
{"ggplotd.geom.geomShape" : "ggplotd/geom/geomShape.html"},
{"ggplotd.geom.geomType" : "ggplotd/geom/geomType.html"},
{"ggplotd.geom.geomType.geomType" : "ggplotd/geom/geomType.html#geomType"},
{"ggplotd.geom.geomRectangle" : "ggplotd/geom.html#geomRectangle"},
{"ggplotd.geom.geomEllipse" : "ggplotd/geom.html#geomEllipse"},
{"ggplotd.geom.geomTriangle" : "ggplotd/geom.html#geomTriangle"},
{"ggplotd.geom.geomDiamond" : "ggplotd/geom.html#geomDiamond"},
{"ggplotd.geom.geomPoint" : "ggplotd/geom.html#geomPoint"},
{"ggplotd.geom.geomLine" : "ggplotd/geom/geomLine.html"},
{"ggplotd.geom.geomHist" : "ggplotd/geom.html#geomHist"},
{"ggplotd.geom.geomHist2D" : "ggplotd/geom.html#geomHist2D"},
{"ggplotd.geom.geomHist3D" : "ggplotd/geom.html#geomHist3D"},
{"ggplotd.geom.geomAxis" : "ggplotd/geom.html#geomAxis"},
{"ggplotd.geom.geomLabel" : "ggplotd/geom/geomLabel.html"},
{"ggplotd.geom.limits" : "ggplotd/geom.html#limits"},
{"ggplotd.geom.geomBox" : "ggplotd/geom.html#geomBox"},
{"ggplotd.geom.geomPolygon" : "ggplotd/geom.html#geomPolygon"},
{"ggplotd.geom.geomDensity" : "ggplotd/geom.html#geomDensity"},
{"ggplotd.geom.geomDensity2D" : "ggplotd/geom.html#geomDensity2D"},
{"ggplotd.geometry" : "ggplotd/geometry.html"},
{"ggplotd.geometry.Vertex3D" : "ggplotd/geometry/Vertex3D.html"},
{"ggplotd.geometry.Vertex3D.x" : "ggplotd/geometry/Vertex3D.html#x"},
{"ggplotd.geometry.Vertex3D.y" : "ggplotd/geometry/Vertex3D.html#y"},
{"ggplotd.geometry.Vertex3D.z" : "ggplotd/geometry/Vertex3D.html#z"},
{"ggplotd.geometry.Vertex3D.this" : "ggplotd/geometry/Vertex3D.html#this"},
{"ggplotd.geometry.Vertex3D.this" : "ggplotd/geometry/Vertex3D.html#this"},
{"ggplotd.geometry.Vertex3D.opBinary" : "ggplotd/geometry/Vertex3D.html#opBinary"},
{"ggplotd.geometry.gradientVector" : "ggplotd/geometry.html#gradientVector"},
{"ggplotd.ggplotd" : "ggplotd/ggplotd.html"},
{"ggplotd.ggplotd.TitleFunction" : "ggplotd/ggplotd.html#TitleFunction"},
{"ggplotd.ggplotd.Title" : "ggplotd/ggplotd/Title.html"},
{"ggplotd.ggplotd.Title.title" : "ggplotd/ggplotd/Title.html#title"},
{"ggplotd.ggplotd.title" : "ggplotd/ggplotd.html#title"},
{"ggplotd.ggplotd.title" : "ggplotd/ggplotd.html#title"},
{"ggplotd.ggplotd.drawTitle" : "ggplotd/ggplotd.html#drawTitle"},
{"ggplotd.ggplotd.Margins" : "ggplotd/ggplotd/Margins.html"},
{"ggplotd.ggplotd.Margins.this" : "ggplotd/ggplotd/Margins.html#this"},
{"ggplotd.ggplotd.Margins.this" : "ggplotd/ggplotd/Margins.html#this"},
{"ggplotd.ggplotd.Margins.left" : "ggplotd/ggplotd/Margins.html#left"},
{"ggplotd.ggplotd.Margins.right" : "ggplotd/ggplotd/Margins.html#right"},
{"ggplotd.ggplotd.Margins.bottom" : "ggplotd/ggplotd/Margins.html#bottom"},
{"ggplotd.ggplotd.Margins.top" : "ggplotd/ggplotd/Margins.html#top"},
{"ggplotd.ggplotd.GGPlotD" : "ggplotd/ggplotd/GGPlotD.html"},
{"ggplotd.ggplotd.GGPlotD.drawToSurface" : "ggplotd/ggplotd/GGPlotD.html#drawToSurface"},
{"ggplotd.ggplotd.GGPlotD.drawToSurface" : "ggplotd/ggplotd/GGPlotD.html#drawToSurface"},
{"ggplotd.ggplotd.GGPlotD.save" : "ggplotd/ggplotd/GGPlotD.html#save"},
{"ggplotd.ggplotd.GGPlotD.opBinary" : "ggplotd/ggplotd/GGPlotD.html#opBinary"},
{"ggplotd.ggplotd.GGPlotD.put" : "ggplotd/ggplotd/GGPlotD.html#put"},
{"ggplotd.ggplotd.GGPlotD.scale" : "ggplotd/ggplotd/GGPlotD.html#scale"},
{"ggplotd.ggplotd.GGPlotD.colourGradient" : "ggplotd/ggplotd/GGPlotD.html#colourGradient"},
{"ggplotd.ggplotd.GGPlotD.margins" : "ggplotd/ggplotd/GGPlotD.html#margins"},
{"ggplotd.ggplotd.putIn" : "ggplotd/ggplotd.html#putIn"},
{"ggplotd.ggplotd.Facets" : "ggplotd/ggplotd/Facets.html"},
{"ggplotd.ggplotd.Facets.put" : "ggplotd/ggplotd/Facets.html#put"},
{"ggplotd.ggplotd.Facets.drawToSurface" : "ggplotd/ggplotd/Facets.html#drawToSurface"},
{"ggplotd.ggplotd.Facets.drawToSurface" : "ggplotd/ggplotd/Facets.html#drawToSurface"},
{"ggplotd.ggplotd.Facets.save" : "ggplotd/ggplotd/Facets.html#save"},
{"ggplotd.ggplotd.Facets.save" : "ggplotd/ggplotd/Facets.html#save"},
];
function search(str) {
	var re = new RegExp(str.toLowerCase());
	var ret = {};
	for (var i = 0; i < items.length; i++) {
		var k = Object.keys(items[i])[0];
		if (re.test(k.toLowerCase()))
			ret[k] = items[i][k];
	}
	return ret;
}

function searchSubmit(value, event) {
	console.log("searchSubmit");
	var resultTable = document.getElementById("results");
	while (resultTable.firstChild)
		resultTable.removeChild(resultTable.firstChild);
	if (value === "" || event.keyCode == 27) {
		resultTable.style.display = "none";
		return;
	}
	resultTable.style.display = "block";
	var results = search(value);
	var keys = Object.keys(results);
	if (keys.length === 0) {
		var row = resultTable.insertRow();
		var td = document.createElement("td");
		var node = document.createTextNode("No results");
		td.appendChild(node);
		row.appendChild(td);
		return;
	}
	for (var i = 0; i < keys.length; i++) {
		var k = keys[i];
		var v = results[keys[i]];
		var link = document.createElement("a");
		link.href = v;
		link.textContent = k;
		link.attributes.id = "link" + i;
		var row = resultTable.insertRow();
		row.appendChild(link);
	}
}

function hideSearchResults(event) {
	if (event.keyCode != 27)
		return;
	var resultTable = document.getElementById("results");
	while (resultTable.firstChild)
		resultTable.removeChild(resultTable.firstChild);
	resultTable.style.display = "none";
}

