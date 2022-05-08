import { InterFaceCommon } from '../common/InterFaceCommon'

export declare namespace InterFaceEducation {
    export interface Payload extends InterFaceCommon.Payload {
        data: Data[];
      }

    interface Data {
        title: string;
        subtitle: string;
    }
}