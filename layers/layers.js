ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-8313188.982884, 4918383.779806, -8312329.943488, 4918935.227676]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_riparian_east_1 = new ol.format.GeoJSON();
var features_riparian_east_1 = format_riparian_east_1.readFeatures(json_riparian_east_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_riparian_east_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_riparian_east_1.addFeatures(features_riparian_east_1);
var lyr_riparian_east_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_riparian_east_1, 
                style: style_riparian_east_1,
                popuplayertitle: 'riparian_east',
                interactive: true,
                title: '<img src="styles/legend/riparian_east_1.png" /> riparian_east'
            });
var format_Transects_2 = new ol.format.GeoJSON();
var features_Transects_2 = format_Transects_2.readFeatures(json_Transects_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Transects_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Transects_2.addFeatures(features_Transects_2);
var lyr_Transects_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Transects_2, 
                style: style_Transects_2,
                popuplayertitle: 'Transects',
                interactive: false,
                title: '<img src="styles/legend/Transects_2.png" /> Transects'
            });
var lyr_introduced_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'introduced<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/introduced_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8313092.477954, 4918420.779966, -8312466.117974, 4918833.740557]
        })
    });
var lyr_natives_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'natives<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/natives_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8313114.975424, 4918552.650731, -8312659.707287, 4918852.810072]
        })
    });
var lyr_invasives_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'invasives<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/invasives_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8313114.975424, 4918552.650731, -8312659.707287, 4918852.810072]
        })
    });
var group_status = new ol.layer.Group({
                                layers: [lyr_introduced_3,lyr_natives_4,lyr_invasives_5,],
                                fold: 'open',
                                title: 'status'});

lyr_OSMStandard_0.setVisible(true);lyr_riparian_east_1.setVisible(true);lyr_Transects_2.setVisible(true);lyr_introduced_3.setVisible(true);lyr_natives_4.setVisible(true);lyr_invasives_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_riparian_east_1,lyr_Transects_2,group_status];
lyr_riparian_east_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_Transects_2.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'code': 'code', });
lyr_riparian_east_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr_Transects_2.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'code': 'TextEdit', });
lyr_riparian_east_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_Transects_2.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'code': 'no label', });
lyr_Transects_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});