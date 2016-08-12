/**
    This module contains the different examples that are shown in the README

    It will only be included in unittest code, but is empty otherwise.
*/
module example;

version (unittest)

import dunit.toolkit;

///
unittest
{
    /// http://blackedder.github.io/ggplotd/images/function.png
    import std.random : uniform;
    import std.typecons : Tuple;
    import ggplotd.stat : statFunction;
    import ggplotd.ggplotd : GGPlotD;
    import ggplotd.geom : geomLine, geomPoint;
    import ggplotd.range : mergeRange;

    auto f = (double x) { return x / (1 + x); };

    auto aes = statFunction(f, 0.0, 10);
    auto gg = GGPlotD().put(geomLine(aes));

    // Generate some noisy points 
    auto f2 = (double x) { return x / (1 + x) * uniform(0.75, 1.25); };
    auto aes2 = f2.statFunction(0.0, 10, 25);

    // Show points in different colour
    auto withColour = Tuple!(string, "colour")("aquamarine").mergeRange(aes2);
    gg = gg.put(withColour.geomPoint);

    gg.save("function.png");
}

///
unittest
{
    /// http://blackedder.github.io/ggplotd/images/hist2D.svg
    import std.array : array;
    import std.algorithm : map;
    import std.conv : to;
    import std.range : repeat, iota;
    import std.random : uniform;

    import ggplotd.aes : Aes;
    import ggplotd.colour : colourGradient;
    import ggplotd.colourspace : XYZ;
    import ggplotd.geom : geomHist2D;
    import ggplotd.ggplotd : GGPlotD;
    import ggplotd.legend : continuousLegend;

    auto xs = iota(0,500,1).map!((x) => uniform(0.0,5)+uniform(0.0,5))
        .array;
    auto ys = iota(0,500,1).map!((y) => uniform(0.0,5)+uniform(0.0,5))
        .array;
    auto aes = Aes!(typeof(xs), "x", typeof(ys), "y")( xs, ys);
    auto gg = GGPlotD().put( geomHist2D( aes ) );
    // Use a different colour scheme
    gg.put( colourGradient!XYZ( "white-cornflowerBlue-crimson" ) );

    gg.put(continuousLegend);

    gg.save( "hist2D.svg" );
}

///
unittest
{
    /// http://blackedder.github.io/ggplotd/images/filled_density.svg
    import std.array : array;
    import std.algorithm : map;
    import std.range : repeat, iota, chain;
    import std.random : uniform;

    import ggplotd.aes : Aes;
    import ggplotd.geom : geomDensity;
    import ggplotd.ggplotd : GGPlotD;
    import ggplotd.legend : discreteLegend;
    auto xs = iota(0,50,1).map!((x) => uniform(0.0,5)+uniform(0.0,5)).array;
    auto cols = "a".repeat(25).chain("b".repeat(25));
    auto aes = Aes!(typeof(xs), "x", typeof(cols), "colour", 
        double[], "fill" )( 
            xs, cols, 0.45.repeat(xs.length).array);
    auto gg = GGPlotD().put( geomDensity( aes ) );
    gg.put(discreteLegend);
    gg.save( "filled_density.svg" );
}

///
unittest
{
    /// http://blackedder.github.io/ggplotd/images/density2D.png
    import std.array : array;
    import std.algorithm : map;
    import std.conv : to;
    import std.range : repeat, iota;
    import std.random : uniform;

    import ggplotd.aes : Aes;
    import ggplotd.colour : colourGradient;
    import ggplotd.colourspace : XYZ;
    import ggplotd.geom : geomDensity2D;
    import ggplotd.ggplotd : GGPlotD;
    import ggplotd.legend : continuousLegend;

    auto xs = iota(0,500,1).map!((x) => uniform(0.0,5)+uniform(0.0,5))
        .array;
    auto ys = iota(0,500,1).map!((y) => uniform(0.5,1.5)+uniform(0.5,1.5))
        .array;
    auto aes = Aes!(typeof(xs), "x", typeof(ys), "y")( xs, ys);
    auto gg = GGPlotD().put( geomDensity2D( aes ) );
    // Use a different colour scheme
    gg.put( colourGradient!XYZ( "white-cornflowerBlue-crimson" ) );
    gg.put(continuousLegend);

    gg.save( "density2D.png" );
}

///
unittest
{
    /// http://blackedder.github.io/ggplotd/images/labels.png
    import std.math : PI;

    import ggplotd.aes : Aes;
    import ggplotd.geom : geomPoint, geomLabel;
    import ggplotd.ggplotd : GGPlotD;
    import ggplotd.axes : xaxisRange, yaxisRange;
    auto dt = Aes!(double[], "x", double[], "y", string[], "label", double[], "angle",
        string[], "justify")( [0.0,1,2,3,4], [4.0,3,2,1,0], 
        ["center", "left", "right", "bottom", "top"],
        [0.0, 0.0, 0.0, 0.0, 0.0],
        ["center", "left", "right", "bottom", "top"]);

    auto gg = GGPlotD()
        .put(geomPoint( dt ))
        .put(geomLabel(dt))
        .put(xaxisRange(-2,11))
        .put(yaxisRange(-2,11));

    auto dt2 = Aes!(double[], "x", double[], "y", string[], "label", real[], "angle",
        string[], "justify")( [1.0,2,3,4,5], [5.0,4,3,2,1], 
        ["center", "left", "right", "bottom", "top"],
        [0.5*PI, 0.5*PI, 0.5*PI, 0.5*PI, 0.5*PI],
        ["center", "left", "right", "bottom", "top"]);
    gg.put( geomLabel(dt2) ).put(geomPoint(dt2));

    dt2 = Aes!(double[], "x", double[], "y", string[], "label", real[], "angle",
        string[], "justify")( [1.0,2,4,6,7], [8.0,7,5,3,2], 
        ["center", "left", "right", "bottom", "top"],
        [0.25*PI, 0.25*PI, 0.25*PI, 0.25*PI, 0.25*PI],
        ["center", "left", "right", "bottom", "top"]);
    gg.put( geomLabel(dt2) ).put(geomPoint(dt2));

    gg.save( "labels.png" );
}
