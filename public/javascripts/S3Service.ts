/**
 * Created by aharon.amram on 12/1/2015.
 */

///<reference path="ref.ts"/>

module S3{
    export class S3Service{
        private region:string;

        constructor(){
            this.region = Env.Globals.region;
        }

        getBucket(): any {
            //var bucket = new AWS.S3({params: {Bucket: 'myBucket'}});
        }

    }
}
