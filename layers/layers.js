ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-8313320.047856, 4918576.992016, -8312658.625482, 4919021.923325]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
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
var format_Exclosures_2 = new ol.format.GeoJSON();
var features_Exclosures_2 = format_Exclosures_2.readFeatures(json_Exclosures_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Exclosures_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Exclosures_2.addFeatures(features_Exclosures_2);
var lyr_Exclosures_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Exclosures_2, 
                style: style_Exclosures_2,
                popuplayertitle: 'Exclosures',
                interactive: false,
                title: '<img src="styles/legend/Exclosures_2.png" /> Exclosures'
            });
var format_Subplots_3 = new ol.format.GeoJSON();
var features_Subplots_3 = format_Subplots_3.readFeatures(json_Subplots_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Subplots_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Subplots_3.addFeatures(features_Subplots_3);
var lyr_Subplots_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Subplots_3, 
                style: style_Subplots_3,
                popuplayertitle: 'Subplots',
                interactive: false,
                title: '<img src="styles/legend/Subplots_3.png" /> Subplots'
            });
var lyr_fopos_invasive_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'fopos_invasive<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/fopos_invasive_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8313235.970087, 4918294.162872, -8312267.615327, 4918978.858157]
        })
    });

lyr_OSMStandard_0.setVisible(true);lyr_riparian_east_1.setVisible(true);lyr_Exclosures_2.setVisible(true);lyr_Subplots_3.setVisible(true);lyr_fopos_invasive_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_riparian_east_1,lyr_Exclosures_2,lyr_Subplots_3,lyr_fopos_invasive_4];
lyr_riparian_east_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_Exclosures_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'name': 'name', 'description': 'description', 'changed': 'changed', 'pictureFolder': 'pictureFolder', 'pictureName': 'pictureName', 'picturePath': 'picturePath', 'created': 'created', 'perimeter': 'perimeter', 'perimeterUnit': 'perimeterUnit', 'area': 'area', 'areaUnit': 'areaUnit', 'numberOfPoints': 'numberOfPoints', });
lyr_Subplots_3.set('fieldAliases', {'fid': 'fid', 'subplot_uuid': 'subplot_uuid', 'transect': 'transect', 'subplot': 'subplot', 'status': 'status', });
lyr_riparian_east_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr_Exclosures_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'description': 'TextEdit', 'changed': 'TextEdit', 'pictureFolder': 'TextEdit', 'pictureName': 'TextEdit', 'picturePath': 'TextEdit', 'created': 'TextEdit', 'perimeter': 'TextEdit', 'perimeterUnit': 'TextEdit', 'area': 'TextEdit', 'areaUnit': 'TextEdit', 'numberOfPoints': 'TextEdit', });
lyr_Subplots_3.set('fieldImages', {'fid': 'TextEdit', 'subplot_uuid': 'TextEdit', 'transect': 'TextEdit', 'subplot': 'Range', 'status': 'ValueRelation', });
lyr_riparian_east_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_Exclosures_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'name': 'no label', 'description': 'no label', 'changed': 'no label', 'pictureFolder': 'no label', 'pictureName': 'no label', 'picturePath': 'no label', 'created': 'no label', 'perimeter': 'no label', 'perimeterUnit': 'no label', 'area': 'no label', 'areaUnit': 'no label', 'numberOfPoints': 'no label', });
lyr_Subplots_3.set('fieldLabels', {'fid': 'no label', 'subplot_uuid': 'no label', 'transect': 'no label', 'subplot': 'no label', 'status': 'no label', });
lyr_Subplots_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});