import { InterFaceCommon } from '../common/InterFaceCommon'

export declare namespace InterFaceCertificate {
    export interface Payload extends InterFaceCommon.Payload {
        data: Data[];
      }

    interface Data {
        title: string;
        date: string;
    }
}