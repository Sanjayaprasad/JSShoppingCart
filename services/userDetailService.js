app.factory('userDetailService', function () {
    var formData = {};
    var homepagedata = {};

    return {
        getData: function () {
            //You could also return specific attribute of the form data instead
            //of the entire data
            return formData;
            console.log(formData);
        },
        setData: function (newFormData) {
            //You could also set specific attribute of the form data instead
            formData = newFormData;
            console.log("iam in side the myService");
            console.log(newFormData);
        },
        resetData: function () {
            //To be called when the data stored needs to be discarded
            formData = {};
        }
    };
});