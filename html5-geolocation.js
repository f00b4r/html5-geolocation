var html5geolocation = (function () {

    var lat = null;
    var lng = null;
    var ok = false;

    /**
     * Loading function..
     */
    var load = function (callback) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(callback, error);
        } else {
            unsupported();
        }
    };

    /**
     * Called when navigator.geolocation is not supported
     * @param msg
     */
    var unsupported = function () {
        ok = false;
        alert('not supported');
    }

    /**
     * Error handle
     * @param msg
     */
    var error = function (msg) {
        ok = false;
        alert(msg);
    }

    /**
     * Success handle
     * @param position
     */
    var success = function (position) {
        ok = true;
        lat = position.coords.latitude;
        lng = position.coords.longitude;
    }

    return {
        load:function (callback) {
            if(callback == null) {
                return load(success);
            } else {
                return load(callback);
            }
        },
        getLat:function () {
            return lat;
        },
        getLng:function () {
            return lng;
        },
        isOK:function () {
            return ok;
        }
    }
})();