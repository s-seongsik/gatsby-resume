import { InterFaceCommon } from '../common/InterFaceCommon'

export declare namespace InterFaceOpensource {
    export interface Payload extends InterFaceCommon.Payload {
        data: Data[];
      }

    interface Data {
        title: string;
        contents: Contents[];
    }

    interface Contents {
        text: string;
        link? : string;
    }
}