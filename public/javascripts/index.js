var map = null;
var hubbygo = hubbygo || {};
hubbygo.init = function(){
    this.initMap();
}
hubbygo.initMap = function(){
    var point = new BMap.Point(113.915591, 22.557581);
    map = new BMap.Map("map_container");
    map.centerAndZoom(point, 15);
    map.addControl(new BMap.NavigationControl({
        type: BMAP_NAVIGATION_CONTROL_ZOOM,
        anchor: BMAP_ANCHOR_BOTTOM_RIGHT
    }));
    map.enableScrollWheelZoom();
    map.enableContinuousZoom();
    map.enableInertialDragging();
}
hubbygo.index = function(){
    this.init();
    var point = new BMap.Point(113.915591, 22.557581);
    var marker = new BMap.Marker(point);
    var infoWindow = new BMap.InfoWindow("普通标注", {
        enableMessage: false
    });
    marker.addEventListener("click", function(){
        this.openInfoWindow(infoWindow);
    });
    map.addOverlay(marker);
}
hubbygo.history = function(){
    this.init();
    var point = new BMap.Point(113.915591, 22.557581);
    var points = [];
    var lng = point.lng;
    var lat = point.lat;
    for (var i = 0; i < 20; i++) {
        lng += (Math.random() * 0.01);
        lat += (Math.random() * 0.005);
        var p = new BMap.Point(lng, lat);
        points.push(p);
    }
    var polyline = new BMap.Polyline(points, {});
    map.addOverlay(polyline);
    setTimeout(function(){
        var marker = new BMap.Marker(points[0]);
        marker.setAnimation(BMAP_ANIMATION_DROP);
        map.addOverlay(marker);
        var index = 0;
        var timer = setInterval(function(){
            var p = points[index++];
            if (p) {
                var flag = map.getBounds().containsPoint(p);
                if (!flag) {
                    map.panTo(p);
                }
                marker.setPosition(p);
            }
            else {
                clearInterval(timer);
                for (var p in points) {
                    (function(){
                        var marker = new BMap.Marker(points[p], {
                            title: "普通标注" + p
                        });
                        map.addOverlay(marker);
                        var infoWindow = new BMap.InfoWindow("普通标注" + p, {
                            enableMessage: false
                        });
                        marker.addEventListener("click", function(){
                            this.openInfoWindow(infoWindow);
                        });
                    })();
                }
            }
        }, 200);
    }, 2000);
}
