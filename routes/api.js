/**
 * Created by aharon.amram on 12/2/2015.
 */
var express = require('express');
var AWS = require('aws-sdk');

var router = express.Router();

/* list buckets */
router.get('/listBuckets/', function(req, res, next) {
    var s3 = new AWS.S3();
    s3.listBuckets(function(err, data) {
        if (err) {
            console.log("Error:", err);
            res.end();
        }
        else {
            res.jsonp({ buckets: data.Buckets });
        }
    });
});

router.get('/listObjects/:bucketName', function(req, res, next) {
    var s3 = new AWS.S3();
    s3.listObjects({ Bucket: req.params.bucketName }, function(err, data) {
        if (err) {
            console.log("Error:", err);
            res.end();
        }
        else{
            res.jsonp({ objects: data.Contents });
        }
    });
});

/*router.get('/copyObject/:bucketName/:objectName', function(req, res, next) {
    //rawdata.qa2.sarinelight.com
    //WB_17111.txt
    var s3 = new AWS.S3();
    s3.getObject({ Bucket: req.params.bucketName, Key: req.params.objectName }, function(err, data) {
        if (err) {
            console.log("Error:", err);
            res.end();
        }
        else{
            res.jsonp({ object: data });
        }
    });
});*/



module.exports = router;
